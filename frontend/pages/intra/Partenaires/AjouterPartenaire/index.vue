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
          <input type="mail" v-model="mail">
        </div>
        <div class="row">
          <label>Logo du partenaire :</label>
          <input type="file" name="nom_du_fichier">
        </div>
        <div class="center">
          <button class="orangeButton" type="submit">Ajouter</button>
        </div>
      </fieldset>
      </form>
  </div>
</template>

<script>
export default {
    methods: {
        ajouterPartenaire() {

        }
    }
}
</script>
