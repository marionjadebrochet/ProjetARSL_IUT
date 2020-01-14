<template>
  <div>
    <client-only>

      <h3 style="padding-top:20px;"> Suppression de services existants </h3>
      <img :src="'http://localhost:1337/' + associationUser.logo.url">
      <div class="infoAssociation">
        <h2> Centre de l'association : {{association.nom}}</h2>
        <div class="centre" v-for="centre in association.centres" v-bind:key="association.centres.id">
          <h3>Adresse : </h3>
          <p>{{centre.adresse}}</p>
          <div class="service" v-for="service in centre.services" v-bind:key="centre.services.id">
            <div class="infoServices">
              <h3>Nom : </h3>
              <p>{{service.nom}}</p>
              <h3>Description : </h3>
              <p>{{service.description}}</p>
              <button @onclique="SupprimerService">Supprimer</button>
            </div>
          </div>
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
  computed: {
    // Get your association thanks to your getter
    associationUser() {
      return this.$store.getters["auth/association"];
    }
  },
  apollo: {
    association: {
      prefetch: true,
      query: associationQuery,
      variables () {
        return { id: this.associationUser.id }
      }
    }
  },
  methods:{
    supprimerService() {
      //return ....
    }
  }
}


</script>
