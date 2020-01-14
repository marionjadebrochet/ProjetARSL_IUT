<template>
  <div>
    <client-only>
      <h3 style="padding-top:20px;"> Suppression de services existants </h3>
      <div class="mesCentres">
        <div>
          <h2>{{association.nom}}</h2>
          <img :src="'http://localhost:1337/' + associationUser.logo.url">
        </div>
        <div class="centre" v-for="centre in association.centres" v-bind:key="association.centres.id">
          <div class="cart">
            <h3>{{centre.adresse}}</h3>
            <div class="service" v-for="service in centre.services" v-bind:key="centre.services.id">
              <div class="infoServices">
                <h3>Nom : </h3>
                <p>{{service.nom}}</p>
                <h3>Description : </h3>
                <p>{{service.description}}</p>
                <button class="plusinfo greybutton" @onclique="SupprimerService">Supprimer</button>
              </div>
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
