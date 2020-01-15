<template>
    <div>
        <h2>Maraudes en prévisions</h2>
        <div v-for="maraude in filteredList" v-bind:key="maraude.id">
            <div v-show="maraude.enPrevisions">
                <p>Lieu de départ : {{maraude.lieuDepart}}</p>
                <p>Lieu d'arrivé : {{maraude.lieuArrive}}</p>
                <p>Heure de Départ : {{maraude.heureDepart}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import maraudesQuery from '~/apollo/queries/maraude/maraudes'

export default {
  data() {
    return {
      maraudes: [],
      query: '',
    }
  },
  apollo: {
    maraudes: {
      prefetch: true,
      query: maraudesQuery
    }
  },
  computed: {
    // Search system
    filteredList() {
      return this.maraudes.filter(maraudes => {
        return maraudes.id.toLowerCase().includes(this.query.toLowerCase())
      })
    },
  },
}

</script>
