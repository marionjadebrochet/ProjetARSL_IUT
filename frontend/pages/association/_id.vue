<template>
  <div>
    <h3>{{association.nom}}</h3>
    <div class="row cadre">
      <div class="image">
        <img :src="'http://localhost:1337/' + association.logo.url">
      </div>
      <section class="justify">{{association.description}}</section>
    </div>
    <h3> Les accueils de jour </h3>
    <div>
      <div class="cadre space-around align-center" v-for="centres in association.centres"
           v-bind:key="association.centres.id">
        <p>{{centres.lieu.adresse}}</p>
        <p> Services du de l'accueil de jour : </p>
        <p v-for="services in centres.services" v-bind:key="centres.services.id"> {{services.nom}} </p>
        <router-link class="orangeBorderButton" :to="{ name: 'centre-id', params: { id: centres.id }}" tag="a"> Plus
          d'informations
        </router-link>
      </div>
    </div>
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
        variables() {
          return {id: this.$route.params.id}
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
