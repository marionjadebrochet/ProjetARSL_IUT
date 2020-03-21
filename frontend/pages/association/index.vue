<template>
  <div>
    <h2> Les organismes </h2>
    <div class="listeAssociation">
        <div class="cadre association" v-for="association in filteredList" v-bind:key="association">
            <h3>{{association.nom}}</h3>
            <div class="trait"></div>
            <div class="image">
              <img :src="'http://localhost:1337/' + association.logo.url">
            </div>
           <router-link class="orangeBorderButton" :to="{ name: 'association-id', params: { id: association.id }}" tag="a" > Plus d'informations </router-link>
         </div>
      </div>
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
