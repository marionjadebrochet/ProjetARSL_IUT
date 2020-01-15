<template>
  <div>
    <h3> Maraudes </h3>
    <div class="maraudes">
        <div class="maraudesEnPrevisions">
          <h3> Maraudes en previsions </h3>
          <div class="maraude" v-for="maraude in filteredList" v-bind:key="maraude.id">
            <p>  {{maraude.lieuDepart}} </p>
          </div>
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
