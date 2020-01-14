<template>
  <div>
      <form @submit.stop.prevent="ajouterPartenaire">
          <label for="nom">Nom du partenaire :</label>
          <input type="text" v-model="nom"><br /><br />
          <label for="telephone">Téléphone du partenaire :</label>
          <input type="tel" v-model="telephone"><br /><br />
          <label for="email"> Email du partenaire :</label>
          <input type="mail" v-model="mail"><br /><br />
          <label for="image">Logo du partenaire :</label>
          <input type="file" name="nom_du_fichier"><br/><br />
        <button type="submit">Ajouter</button>
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
