<template>
  <div>
    <h3>Ajouter un service</h3>
    <form @submit.stop.prevent="ajouterService">
      <fieldset>

        <div class="row">
          <label for="nom">Nom du service :</label>
          <input type="text" v-model="nom" />
        </div>

        <div class="row">
          <label for="description">Description du service :</label>
          <input type="text" v-model="description" />
        </div>

        <div class="row">
          <label>Choississez le centre</label>
          <select required v-model="centre">
            <option v-for="centre in association.centres" :key="centre.id" :value="centre">{{centre.lieu.adresse}}</option>
          </select>
        </div>

        <h3>Horaires du service</h3>

        <div class="row">
          <label for="nomJours">Nom de l'horaire : </label>
          <input required v-model="nomJours" placeholder="Horaires du service n°..">
        </div>
        <div class="row">
          <label for="lundiMatin">Lundi matin : </label>
          <input v-model="lundiMatin" placeholder="9h-12h">
        </div>
        <div class="row">
          <label for="lundiAprem">Lundi après-midi :</label>
          <input v-model="lundiAprem" placeholder="13h-17h">
        </div>
        <div class="row">
          <label for="lundiMatin">Mardi matin : </label>
          <input v-model="mardiMatin" placeholder="9h-12h">
        </div>
        <div class="row">
          <label for="mardiAprem">Mardi après-midi : </label>
          <input v-model="mardiAprem" placeholder="13h-17h">
        </div>
        <div class="row">
          <label for="mercrediMatin">Mercredi matin : </label>
          <input v-model="mercrediMatin" placeholder="9h-12h">
        </div>
        <div class="row">
          <label for="mercrediAprem">Mercredi après-midi : </label>
          <input v-model="mercrediAprem" placeholder="13h-17h">
        </div>
        <div class="row">
          <label for="jeudiMatin">Jeudi matin: </label>
          <input v-model="jeudiMatin" placeholder="9h-12h">
        </div>
        <div class="row">
          <label for="jeudiAprem">Jeudi après-midi : </label>
          <input v-model="jeudiAprem" placeholder="13h-17h">
        </div>
        <div class="row">
          <label for="vendrediMatin">Vendredi matin : </label>
          <input v-model="vendrediMatin" placeholder="9h-12h">
        </div>
        <div class="row">
          <label for="venrediMatin">Vendredi après-midi : </label>
          <input v-model="vendrediMatin" placeholder="13h-17h">
        </div>
        <div class="row">
          <label for="samediMatin">Samedi matin : </label>
          <input v-model="samediMatin" placeholder="9h-12h">
        </div>
        <div class="row">
          <label for="samediAprem">Samedi après-midi : </label>
          <input v-model="samediAprem" placeholder="13h-17h">
        </div>
        <div class="row">
          <label for="dimancheMatin">Dimanche matin : </label>
          <input v-model="dimancheMatin" placeholder="9h-12h">
        </div>
        <div class="row">
          <label for="dimancheAprem">Dimanche après-midi : </label>
          <input v-model="dimancheAprem" placeholder="13h-17h">
        </div>

        <div class="center">
          <button class="orangeButton" type="submit">Ajouter</button>
        </div>

      </fieldset>
    </form>
  </div>
</template>

<script>
import strapi from "~/utils/Strapi";
import associationQuery from '~/apollo/queries/association/association'

export default {
  data() {
    return {
      association: Object,
      service: Object,
      centre: Object,
      jourshoraires: Object,
      nom: '',
      description: '',
      query: '',
      nomJours: '',
      lundiMatin: '',
      lundiAprem: '',
      mardiMatin: '',
      mardiAprem: '',
      mercrediMatin: '',
      mercrediAprem: '',
      jeudiMatin: '',
      jeudiAprem: '',
      vendrediMatin: '',
      vendrediAprem: '',
      samediMatin: '',
      samediAprem: '',
      dimancheMatin: '',
      dimancheAprem: '',
      loading: false
    };
  },

  apollo: {
    association: {
      prefetch: true,
      query: associationQuery,
      variables () {
        return { id: this.associationUser.id }
      }
    }
  },

  computed: {
    associationUser() {
      return this.$store.getters["auth/association"];
    }
  },

  methods: {
    async ajouterService() {
      this.loading = true;
      try {
        //on creer le jourHoraire saisi pour pouvoir ensuite le mettre dans le
        //futur nouveau service
        this.jourshoraires = await strapi.createEntry("jourshoraires", {
          nom: this.nomJours,
          lundiMatin: this.lundiMatin,
          lundiApresMidi: this.lundiAprem,
          mardiMatin: this.mardiMatin,
          mardiApresMidi: this.mardiAprem,
          mercrediMatin: this.mercrediMatin,
          mercrediApresMidi: this.mercrediAprem,
          jeudiMatin: this.jeudiMatin,
          jeudiApresMidi: this.jeudiAprem,
          vendrediMatin: this.vendrediMatin,
          vendrediApresMidi: this.vendrediAprem,
          samediMatin: this.samediMatin,
          samediApresMidi: this.samediAprem,
          dimancheMatin: this.dimancheMatin,
          dimancheApresMidi: this.dimancheAprem,
        });

        //on ajoute le service dans la db
        this.service = await strapi.createEntry("services", {
          nom: this.nom,
          description: this.description,
          centre: this.centre,
          jourshoraires: this.jourshoraires
        });

        //on met a jour le centre associe
        await strapi.updateEntry("centres", this.centre.id, {
          service: this.service,
          centreInfos: this.centre
        });

        alert("Le service a bien été enregistré.");
        this.$router.push("/");
      } catch (err) {
        this.loading = false;
        this.$router.push("/");
        //alert(err);
      }
    }
  }
};
</script>
