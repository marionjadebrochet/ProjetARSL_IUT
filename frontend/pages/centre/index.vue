<template>

  <div>
    <h3> Accueils de jour </h3>
    <div class="accueilDeJour">

        <div class="listeCentre">
          <div class="centre" v-for="centre in filteredList" v-bind:key="centre.id">
            <h4>{{centre.association.nom}}</h4>
            <h5>Adresse : </h5>
            <p>{{centre.adresse}}</p>
            <h5>Horaire d'ouverture : </h5>
            <p>Matin : {{centre.heureOuvertureMatin}} - {{centre.heureFermetureMatin}}</p>
            <p>Après-midi : {{centre.heureOuvertureSoir}} - {{centre.heureFermetureSoir}}</p>
          </div>
        </div>

        <div class="map">
            <h4> Les accueils de jour </h4>
            <div id="map-wrap" style="height: 100vh">
               <l-map :zoom=13 :center="[45.8188956,1.2521794]">
                 <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"> </l-tile-layer>
                    <div class="marker" v-for="centre in filteredList" v-bind:key="centre">
                         <l-marker :lat-lng="[centre.lieu.latitude, centre.lieu.longitude]" >
                         <l-popup :content="centre.association.nom + ' | ' + centre.lieu.adresse"/> </l-marker>
                       </div>
               </l-map>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import centreQuery from '~/apollo/queries/centre/centres'

export default {
  data() {
    return {
      centres: [],
      query: '',
    }
  },
  apollo: {
    centres: {
      prefetch: true,
      query: centreQuery
    }
  },
  computed: {
    // Search system
    filteredList() {
      return this.centres.filter(centre => {
        return centre.lieu.adresse.toLowerCase().includes(this.query.toLowerCase())
      })
    },
  },
}

</script>
