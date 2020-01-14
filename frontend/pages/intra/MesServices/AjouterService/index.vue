<template>
    <div>
        <h1>Ajouter un service</h1>
        <form @submit.stop.prevent="ajouterService">
            <label for="nom">Nom du service:</label>
            <input type="text" v-model="nom"><br /><br />
            <label for="description">Description du centre :</label>
            <input type="text" v-model="description"><br /><br />
          <button type="submit">Ajouter</button>
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
