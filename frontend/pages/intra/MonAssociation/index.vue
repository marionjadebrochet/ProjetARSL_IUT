<template>
  <div>
    <h3> Mon association </h3>

    <div class="association" v-for="association in filteredList" v-bind:key="association">
       <img :src="'http://localhost:1337/' + association.logo.url">
       <div class="infoAssociation">
          <h4>{{association.nom}}</h4>
          <section>{{association.description}}</section>
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
    association: {
      prefetch: true,
      query: associationQuery
    }
  },
}
</script>
