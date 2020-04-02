<template>
  <div>
    <h2> Centres où se laver </h2>
    <div  v-for="service in filteredList" v-bind:key="service.nom">
      <div class="space-between cadre padding10" v-if="service.nom=='Douche'">
           <h3> {{service.centre.lieu.adresse}} </h3>
           <router-link class="orangeBorderButton" :to="{ name: 'centre-id', params: { id: service.centre.id }}" tag="a" > Plus d'informations </router-link>
      </div>
    </div>

    <div class="map">
        <div id="map-wrap" style="height: 600px; ">
           <l-map :zoom=12 :center="[45.835425,1.2644847]">
             <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"> </l-tile-layer>
                <div class="marker" v-for="service in filteredList" v-bind:key="service.centre.id">
                  <div v-if="service.nom=='Douche'">
                     <l-marker :lat-lng="[service.centre.lieu.latitude, service.centre.lieu.longitude]" >
                     <l-popup :content="service.centre.association.nom + ' | ' + service.centre.lieu.adresse"/> </l-marker>
                   </div>
                </div>
           </l-map>
        </div>
    </div>
  </div>
</template>


<script>
import servicesQuery from '~/apollo/queries/service/services'

export default {
  data() {
    return {
      services: [],
      query: ''
    }
  },
  apollo: {
    services: {
      prefetch: true,
      query: servicesQuery
    }
  },
  computed: {
    // Search system
    filteredList() {
      return this.services.filter(services => {
        return services.nom.toLowerCase().includes(this.query.toLowerCase())
      })
    },
  }
}
</script>
