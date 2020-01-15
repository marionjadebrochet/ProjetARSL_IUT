<template>
    <div>
        <h2>Ajouter une maraude</h2>
        <form @submit.stop.prevent="ajouterMaraude">
            <label for="nom">Veuillez donner un nom à la maraude :</label>
            <input type="text" v-model="nom">
            <label for="heureDepart">Début de la maraude :</label>
            <input type="text" v-model="heureDepart">
            <label for="lieuDepart">Lieu de Depart de la maraude :</label>
            <input type="text" v-model="lieuDepart">
            <label for="lieuArrive">Lieu d'arrivée :</label>
            <input type="text" v-model="lieuArrive">
            <label for="dateDepart">Date de Départ prévue :</label>
            <input type="date" v-model="dateDepart">
            <button :disabled="loading" type="submit">Commencer</button>
        </form>
    </div>
</template>

<script>
import strapi from '~/utils/Strapi'

export default {

    data() {
        return {
            loading: false,
            nom: '',
            heureDepart: '',
            lieuDepart: '',
            lieuArrive: '',
            dateDepart: null,
        }
    },
    methods: {
        async ajouterMaraude() {
            this.loading = true;
            try {
                await strapi.createEntry('maraudes', {
                    nom: this.nom,
                    lieuDepart: this.lieuDepart,
                    lieuArrive: this.lieuArrive,
                    heureDepart: this.heureDepart,
                    dateDepart: thi.dateDepart
                })
                alert("N'oubliez pas de rentrer votre rapport à la fin de votre maraude dans l'onglet Rapport,"
                + "et d'indiquer que la maraude est terminé.")
                this.$router.push('/')
            } catch (error) {
                this.loading = false
                alert('Une erreur est survenue.')
            }
        }
    }
}
</script>
