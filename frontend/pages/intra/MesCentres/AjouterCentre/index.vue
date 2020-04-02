<template>
    <div>
        <h3>Ajouter un centre</h3>
        <form @submit.stop.prevent="ajouterCentre">
          <fieldset>
            <div class="row">
              <label>Nom du nouveau centre :</label>
              <input type="text" v-model="libelle">
            </div>
            <div class="row">
              <label >Téléphone du centre :</label>
              <input type="tel" v-model="tel">
            </div>
            <div class="row">
              <label for="enceinte">Animaux autoriser ?</label>
              <input type="checkbox" id="animaux" v-model="animaux">
            </div>
            <div class="row">
              <label>public concerné par le centre :</label>
              <input type="text" v-model="publicConcerne">
            </div>
            <div class="row">
              <label for="lieu">Adresse du centre : </label>
              <select v-model="lieu" required>
                <option v-for="lieu in listeLieus" :key="lieu.id" :value="lieu">{{lieu.libelle}}</option>
              </select>
            </div>

            <h3>Horaires du centre</h3>

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
  import lieusQuery from '~/apollo/queries/lieu/lieus';

  export default {
    data() {
      return {
        association: Object,
        centre: Object,
        jourshoraires: Object,
        lieus: [],
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

    computed: {
      associationUser() {
        return this.$store.getters["auth/association"];
      },
      listeLieus() {
        return this.lieus.filter(lieu => {
          return lieu.libelle.toLowerCase().includes(this.query.toLowerCase())
        })
      },
    },
    apollo: {
      lieus: {
        prefetch: true,
        query: lieusQuery
      }
    },
    methods: {
      async ajouterCentre() {
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

          this.centre = await strapi.createEntry("centres", {
            libelle: this.libelle,
            tel: this.tel,
            association: this.associationUser.id,
            Animaux: this.animaux,
            publicConcerne: this.publicConcerne,
            jourshoraires: this.jourshoraires,
            lieu: this.lieu.id,
          });

          alert("Le centre a bien été enregistré.");
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
