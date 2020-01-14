<template>
    <div>
        <h3>Ajouter un service</h3>
        <div class="center">
          <form @submit.stop.prevent="ajouterService">
            <fieldset>
              <div class="row">
                <label for="nom">Nom du service:</label>
                <input type="text" v-model="nom">
              </div>
              <div class="row">
                <label for="description">Description du centre :</label>
                <input type="text" v-model="description"><br /><br />
              </div>
            <div class=center>
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
        ajouterService() {

        }
    }
}
</script>
