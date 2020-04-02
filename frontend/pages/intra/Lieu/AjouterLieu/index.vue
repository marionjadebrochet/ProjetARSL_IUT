<template>
  <div>
    <h3>Ajouter un lieu</h3>
    <form @submit.stop.prevent="ajouterLieu">
      <fieldset>

        <div class="row">
          <label for="nom">Nom :</label>
          <input type="text" v-model="libelle" />
        </div>

        <div class="row">
          <label for="adresse">Adresse :</label>
          <input type="text" v-model="adresse" />
        </div>
        <div class="row">
            <a href="https://www.google.fr/maps"><button type="button">Pour récupérer latitude et longitude</button></a>
        </div>
        <div class="row">
          <label for="latitude">Latitude :</label>
          <input type="text" v-model="latitude" />
        </div>

        <div class="row">
          <label for="longitude">Longitude :</label>
          <input type="text" v-model="longitude" />
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

export default {
  data() {
    return {
      loading: false,

    };
  },

  methods: {
    async ajouterLieu() {
      this.loading = true;
      try {

        await strapi.createEntry("lieus", {
          libelle: this.libelle,
          adresse: this.adresse,
          latitude: this.latitude,
          longitude: this.longitude
        });

        alert(
          "Le lieu a bien été ajoutée"
        );
        this.$router.push("/");
      } catch (error) {
        alert(error);
      }
      this.loading = false;
    }
  }
};
</script>
