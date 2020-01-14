<template>
    <div>
        <h1>Ajouter un centre</h1>
        <form @submit.stop.prevent="ajouterCentre">
            <label for="adresse">Adresse du centre :</label>
            <input type="text" v-model="adresse"><br /><br />
            <label for="telephone">Téléphone du centre :</label>
            <input type="tel" v-model="telephone"><br /><br />
            <!--check box pour animaux autorsé ou non-->
            <label for="animaux"> Animaux :</label>
            <input type="radio" v-model="accepte" checked> Autorisés
  	        <input type="radio" v-model="refuse"> Interdits<br /><br />
            <label for="public">public concerné par le centre :</label>
            <input type="text" v-model="public"><br /><br />
          <button type="submit">Ajouter</button>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        ajouterCentre() {

        }
    }
}
</script>
