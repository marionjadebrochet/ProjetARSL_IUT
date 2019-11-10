<template>
  <div>
    <h3> Les associations </h3>

    <div class="association" v-for="association in filteredList" v-bind:key="association">
       <img :src="'http://localhost:1337/' + association.logo.url">
       <h4>{{association.nom}}</h4>
       <p>{{association.description}}</p>
    </div>

  </div>
</template>


<script>
import associationsQuery from '~/apollo/queries/association/associations'

export default {
  data() {
    return {
      associations: [],
      query: ''
    }
  },
  apollo: {
    associations: {
      prefetch: true,
      query: associationsQuery
    }
  },
  computed: {
    // Search system
    filteredList() {
      return this.associations.filter(association => {
        return association.nom.toLowerCase().includes(this.query.toLowerCase())
      })
    },
  }
}
</script>
