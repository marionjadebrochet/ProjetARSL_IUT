<template>
    <div>
        <h1>Commencer une maraude</h1>
        <form @submit.stop.prevent="ajouterMaraude">
            <label for="heureDepart">Début de la maraude :</label>
            <input type="text" v-model="heureDepart"><p>Heure</p>
            <label for="lieuDepart">Lieu de Depart de la maraude :</label>
            <input type="text" v-model="lieuDepart">
            <label for="lieuArrive">Lieu d'arrivée :</label>
            <input type="text" v-model="lieuArrive">
            <button type="submit">Commencer</button>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        ajouterMaraude() {
            
        }
    }
}
</script>