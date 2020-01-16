<template>
  <div>
    <h2> Centres où se changer </h2>
    <div class="services" v-for="service in filteredList" v-bind:key="service.nom">
      <div v-if="service.nom=='Vestiaire'">
               <h3> {{service.centre.adresse}} </h3>
               <router-link class="plusinfo":to="{ name: 'centre-id', params: { id: service.centre.id }}" tag="a" > Plus d'informations </router-link>
      </div>
    </div>

    <div class="map">
        <div id="map-wrap" style="height: 600px; ">
           <l-map :zoom=12 :center="[45.835425,1.2644847]">
             <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"> </l-tile-layer>
                <div class="marker" v-for="service in filteredList" v-bind:key="service.centre.id">
                  <div v-if="service.nom=='Vestiaire'">
                     <l-marker :lat-lng="[service.centre.latitude, service.centre.longitude]" >
                     <l-popup :content="service.centre.association.nom + ' | ' + service.centre.adresse"/> </l-marker>
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
