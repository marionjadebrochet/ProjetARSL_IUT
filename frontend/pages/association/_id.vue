<template>

<div class="page">
  <client-only>
    <h3>{{association.nom}}</h3>
    <div class="association">
      <div class="cadre">
        <div class="image">
          <img :src="'http://localhost:1337/' + association.logo.url">
        </div>
        <section>{{association.description}}</section>
      </div>
    </div>
    <h3> Centres </h3>
    <div class="association">
      <div class="cadre space-around" v-for="centres in association.centres" v-bind:key="association.centres.id">
          <h3>{{centres.lieu.adresse}}</h3>
          <p> Services proposés par le centre : </p>
          <div class="services" v-for="services in centres.services" v-bind:key="centres.services.id">
            <p> {{services.nom}} </p>
          </div>
        <br>
        <router-link class="bouton" :to="{ name: 'centre-id', params: { id: centres.id }}" tag="a" > Plus d'informations </router-link>
      </div>
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
  },

  mounted() {
    if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
}
}
</script>
