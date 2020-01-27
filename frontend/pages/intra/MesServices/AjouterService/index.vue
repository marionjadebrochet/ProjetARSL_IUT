<template>
    <div>
        <h3>Ajouter un service</h3>
          <form @submit.stop.prevent="ajouterService">
            <fieldset>
              <div class="row">
                <label>Nom du service:</label>
                <input type="text" v-model="nom">
              </div>
              <div class="row">
                <label>Description du centre :</label>
                <input type="text" v-model="description"><br /><br />
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
        ajouterService() {

        }
    }
}
</script>
