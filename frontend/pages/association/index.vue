<template>
  <div>
    <h3> Les associations </h3>
    <div class="listeAssociation">
        <div class="cadre association" v-for="association in filteredList" v-bind:key="association">
            <h4>{{association.nom}}</h4>
            <div class="trait"></div>
            <div class="image">
              <img :src="'http://localhost:1337/' + association.logo.url">
            </div>
           <router-link class="whiteButton" :to="{ name: 'association-id', params: { id: association.id }}" tag="a" > Plus d'informations </router-link>
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
