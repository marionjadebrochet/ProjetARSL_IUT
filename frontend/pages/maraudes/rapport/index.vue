<template>
  <div>
    <h2>Ajout d'une ligne de rapport : </h2>
    <form @submit.stop.prevent="ajouterLigneRapport">
      <fieldset>

        <div class="row">

          <label for="pseudo">Pseudo : </label>
          <input type="text" v-model="pseudo">
        </div>
        <div class="row">

          <label for="nom">Nom de famille (optionnel) : </label>
          <input type="text" v-model="nom">
        </div>

        <div class="row">

          <label for="lieuRencontre">Lieu de rencontre avec la personne</label>
          <input type="text" v-model="lieuRencontre">
        </div>

        <div class="row">

          <label for="nbPersonnesFamille">Nombre de personne de sa famille : </label>
          <input type="number" v-model="nombrePersonneFamille">
        </div>

        <div class="row">

          <label for="nbAnimaux">Nombre d'animaux de la personne : </label>
          <input type="number" v-model="nombreAnimaux">
        </div>

        <div class="row">

          <label for="typeAnimaux">Type d'animaux : </label>
          <input type="text" v-model="typeAnimaux">
        </div>

        <div class="row">
          <label for="nationalite">Nationalité : </label>
          <input type="text" v-model="nationalite">
        </div>

        <div class="row">

          <label for="enceinte">La personne est-elle enceinte ?</label>
          <input type="checkbox" v-model="enceinte">
        </div>

        <div class="row">

          <label for="problemeSante">La personne a-t-elle des problèmes de santé ?</label>
          <input type="checkbox" v-model="problemeSante">
        </div>

        <div class="row">

          <label for="descriptionProblemeSante">Si oui, décrivez le problème si besoin : </label>
          <input type="text" v-model="descriptionProblemeSante">
        </div>

        <div class="row">

          <label for="situation">Situation actuelle (à la rue, a une tente...) :</label>
          <input type="text" v-model="situation">
        </div>

        <div class="row">

          <label for="demandeHebergement">La personne souhaite-t-elle faire une demade d'hébergement ?</label>
          <input type="checkbox" v-model="demandeHebergement">
        </div>

        <input type="submit" value="Ajouter" class="orangeButton">
      </fieldset>
    </form>

    <!--Clement je met le composant Rapport dans une div pour que tu puisse modifier plus facilement la page
    avec ton css-->
    <div>
      <Rapport/>
    </div>

  </div>

</template>

<script>
  import strapi from '~/utils/Strapi'
  import Rapport from "~/components/Rapport.vue"

  export default {
    data() {
      return {
        lignerapport: Object,
        enceinte: false,
        problemeSante: false,
        demandeHebergement: false
      }
    },

    components: {
      Rapport
    },

    methods: {
      async ajouterLigneRapport() {
        try {
          this.lignerapport = await strapi.createEntry("lignerapports", {
            pseudo: this.pseudo,
            nom: this.nom,
            lieuRencontre: this.lieuRencontre,
            nombrePersonneFamille: this.nombrePersonneFamille,
            nombreAnimaux: this.nombreAnimaux,
            typeAnimaux: this.typeAnimaux,
            nationalite: this.nationalite,
            enceinte: this.enceinte,
            problemeSante: this.problemeSante,
            descriptionProblemeSante: this.descriptionProblemeSante,
            demandeHebergement: this.demandeHebergement,
            situation: this.situation
          })

          this.$store.commit('rapport/ajouterLigne', this.lignerapport);
          this.$router.push('/maraudes/rapport');
        } catch (error) {
          alert(error)
        }
      }
    }
  }
</script>
