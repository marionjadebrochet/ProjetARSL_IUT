<template>
    <div>
        <h3>Maraudes terminées</h3>
        <div v-for="maraude in this.maraudes" :key="maraude.id">
            <div v-show="maraude.fini">
                <p>Date de départ : {{maraude.dateDepart}}</p>
                <p>Lieu de départ : {{maraude.lieuDepart}}</p>
                <p>Lieu d'arrivé : {{maraude.lieuArrive}}</p>
                <p>Heure de départ : {{maraude.heureDepart}}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    computed: {
    // Get your username thanks to your getter
    maraudes() {
      return this.$store.getters["auth/maraudes"];
    }
  },
}
</script>