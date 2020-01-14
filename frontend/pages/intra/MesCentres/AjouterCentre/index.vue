<template>
    <div>
        <h3>Ajouter un centre</h3>
        <div class="center">
        <form @submit.stop.prevent="ajouterCentre">
          <fieldset>
            <div class="row">
              <label for="adresse">Adresse du centre :</label>
              <input type="text" v-model="adresse">
            </div>
            <div class="row">
              <label for="telephone">Téléphone du centre :</label>
              <input type="tel" v-model="telephone">
            </div>
            <div class="row">
              <label for="animaux"> Animaux :</label>
              <div class="radio">
                <label>Acceptés</label>
                <input type="radio" v-model="accepte" name="animaux" checked>
                <label>Interdits</label>
      	        <input type="radio" v-model="refuse" name="animaux">
              </div>
            </div>
            <div class="row">
              <label for="public">public concerné par le centre :</label>
              <input type="text" v-model="public">
            </div>
            <div class="center">
              <button class="plusinfo" type="submit">Ajouter</button>
            </div>
          </fieldset>
        </form>
      </div>
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
