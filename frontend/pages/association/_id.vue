<template>

<div>
  <client-only>
    <img :src="'http://localhost:1337/' + association.logo.url">
    <h2>{{association.nom}}</h2>
    <section>{{association.description}}</section>
    <h3> Centres : </h3>
      <div class="association" v-for="centres in association.centres" v-bind:key="association.centres.id">
          <h3>{{centres.adresse}}</h3>
      </div>
  </client-only>
</div>
</template>

<script>
import associationQuery from '~/apollo/queries/association/association'

export default {
  data() {
    return {
      association: Object,
      centres: [],
      query: '',
    }
  },
  apollo: {
    association: {
      prefetch: true,
      query: associationQuery,
      variables () {
        return { id: this.$route.params.id }
      }
    }
  }
}
</script>
