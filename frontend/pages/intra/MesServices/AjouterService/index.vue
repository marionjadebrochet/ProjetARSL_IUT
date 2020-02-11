<template>
  <div>
    <h3>Ajouter un service</h3>
    <form @submit.stop.prevent="ajouterService">
      <fieldset>
        <div class="row">
          <label for="nom">Nom du service:</label>
          <input type="text" v-model="nom" />
        </div>
        <div class="row">
          <label for="description">Description du centre :</label>
          <input type="text" v-model="description" />
          <br />
          <br />
        </div>
        <div class="row">
          <label for="centre">Choississez le centre qui lui est rattaché : </label>
          <select v-model="centre">
            <option v-for="centre in association.centres" :key="centre.id" :value="centre">{{centre.id}}</option>
          </select>
        </div>
        
        <p>Veuillez rentrez les horaires : </p>
        <div class="row">
          <label for="lundiMatin"></label>
        </div>
        
        <div class="center">
          <button class="bouton" type="submit">Ajouter</button>
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
      centres: [],
      centre: Object,
      nom: '',
      description: '',
      query: '',
      loading: false
    };
  },

  apollo: {
    association: {
      prefetch: true,
      query: associationQuery,
      variables () {
        return { id: this.associationUser.id}
      }
    }
  },

  computed: {
    listeCentres() {
      return this.centres.filter(centre => {
        return centre.id.toLowerCase().includes(this.query.toLowerCase());
      })
    },
    associationUser() {
      return this.$store.getters["auth/association"];
    }
  },

  methods: {
    async ajouterService() {
      this.loading = true;
      try {
        await strapi.createEntry("services", {
          nom: this.nom,
          description: this.description,
          centre: this.centre
        });
        alert("Le service a bien été enregistré.");
        this.$router.push("/");
      } catch (err) {
        this.loading = false;
        alert(err);
      }
    }
  }
};
</script>
