<template>
  <div>
    <h3>Ajouter un partenaire</h3>
      <form @submit.stop.prevent="ajouterPartenaire">
        <fieldset>
        <div class="row">
          <label>Nom du partenaire :</label>
          <input type="text" v-model="nom">
        </div>
        <div class="row">
          <label>Téléphone du partenaire :</label>
          <input type="tel" v-model="telephone">
        </div>
        <div class="row">
          <label> Email du partenaire :</label>
          <input type="mail" v-model="email">
        </div>
        <!-- <div class="row">
          <label>Logo du partenaire :</label>
          <input type="file" name="nom_du_fichier">
        </div> -->
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
        logo: Object,
        query: '',
        loading: false
      };
    },
    computed: {
      associationUser() {
        return this.$store.getters["auth/association"];
      }
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



    methods: {
      async ajouterPartenaire() {
        this.loading = true;
        try {

          this.partenaire = await strapi.createEntry("partenaires", {
            nom: this.nom,
            telephone: this.telephone,
            email: this.email,
            // logo: NULL,
            association: this.association.id
          });

          alert("Le partenaire a bien été enregistré.");
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
