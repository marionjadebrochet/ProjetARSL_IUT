<template>
    <div>
        <h3>Ajouter un centre</h3>
        <form @submit.stop.prevent="ajouterCentre">
          <fieldset>
            <div class="row">
              <label>Adresse du centre :</label>
              <input type="text" v-model="adresse">
            </div>
            <div class="row">
              <label >Téléphone du centre :</label>
              <input type="tel" v-model="telephone">
            </div>
            <div class="row">
              <label> Animaux :</label>
              <div class="radio">
                <label>Acceptés</label>
                <input type="radio" v-model="accepte" name="animaux" checked>
                <label>Interdits</label>
      	        <input type="radio" v-model="refuse" name="animaux">
              </div>
            </div>
            <div class="row">
              <label>public concerné par le centre :</label>
              <input type="text" v-model="public">
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
        ajouterCentre() {

        }
    }
}
</script>
