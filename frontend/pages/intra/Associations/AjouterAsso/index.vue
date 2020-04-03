<template>
  <div>
    <h3>Ajouter un organisme</h3>
    <form @submit.stop.prevent="ajouterAsso">
      <fieldset>

        <div class="row">
          <label for="nom">Nom :</label>
          <input type="text" v-model="nom" />
        </div>

        <div class="row">
          <label for="description">Description :</label>
          <input type="text" v-model="description" />
        </div>

        <!-- <div class="row">
          <label for="logo">Logo :</label>
          <input type="file" @change="previewFiles" >
        </div> -->

        <div class="row">
          <label for="adresse">Adresse :</label>
          <input type="text" v-model="adresse" />
        </div>

        <div class="row">
          <label for="email">Email :</label>
          <input type="email" v-model="email" />
        </div>

        <div class="row">
          <label for="telephone">Téléphone:</label>
          <input type="telephone" v-model="telephone" />
        </div>

        <div class="center">
          <button class="orangeButton" type="submit">Ajouter</button>
        </div>

      </fieldset>
    </form>
  </div>
</template>

<script>
  //marche mais je sais pas comment ajouter le Logo
  //je sais pas pourquoi mais l'adresse et le mail veulent pas s'ajouter
import strapi from "~/utils/Strapi";

export default {
  data() {
    return {
      selectedFile: null,
      nom: '',
      description: '',
      logo: Object,
      adresse: '',
      email: '',
      telephone: '',
      loading: false,

    };
  },

  methods: {
  //   previewFiles(event) {
  //     console.log(event.target.files[0]);
  //     this.selectedFile = event.target.files[0];
  // },
    async ajouterAsso() {
      this.loading = true;
      // const fd = new FormData();
      // fd.append('image', this.selectedFile, this.selectedFile.name);
      // console.log(this.selectedFile.name);
      try {

        await strapi.createEntry("associations", {
          nom: this.nom,
          description: this.description,
          // logo: fd,
          Adresse: this.adresse,
          Email: this.email,
          telephone: this.telephone
        });

        alert(
          "L'association a bien été ajoutée"
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
