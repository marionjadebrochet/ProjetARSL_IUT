<template>
  <div>
    <h3>Ajouter un partenaire</h3>
    <div class="center">
      <form style="width:50%"@submit.stop.prevent="ajouterPartenaire">
        <div class="row">
          <label for="nom">Nom du partenaire :</label>
          <input type="text" v-model="nom">
        </div>
        <div class="row">
          <label for="telephone">Téléphone du partenaire :</label>
          <input type="tel" v-model="telephone">
        </div>
        <div class="row">
          <label for="email"> Email du partenaire :</label>
          <input type="mail" v-model="mail">
        </div>
        <div class="row">
          <label for="image">Logo du partenaire :</label>
          <input type="file" name="nom_du_fichier">
        </div>
        <div class="center">
          <button class="plusinfo"type="submit">Ajouter</button>
        </div>
      </form>
    </div>
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
