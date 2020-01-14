<template>
  <body>
    <h2>Signaler quelque chose ?</h2>
    <button class="plusinfo call"><a href="tel:+33115">115</a></button>
    <h3> Centres ouverts </h3>

    <div class="accueilDeJour">
      <div class="listeCentre">
        <div class="centre" v-for="centre in filteredList" v-bind:key="centre.id">
          <div class="row">
            <div>
              <h4>{{centre.association.nom}}</h4>
              <h5>Adresse : </h5>
              <p>{{centre.adresse}}</p>
              <h5>Horaire d'ouverture : </h5>
              <div v-if="getDay == 1">
                <p>{{centre.jourshoraires.lundiMatin}} {{centre.jourshoraires.lundiApresMidi}}</p>
              </div>
              <div v-if="getDay == 2">
                <p>{{centre.jourshoraires.mardiMatin}} {{centre.jourshoraires.mardinApresMidi}}</p>
              </div>
              <div v-if="getDay == 3">
                <p>{{centre.jourshoraires.mercrediMatin}} {{centre.jourshoraires.mercrediApresMidi}}</p>
              </div>
              <div v-if="getDay == 4">
                <p>{{centre.jourshoraires.jeudiMatin}} {{centre.jourshoraires.jeudiApresMidi}}</p>
              </div>
              <div v-if="getDay == 5">
                <p>{{centre.jourshoraires.vendrediMatin}} {{centre.jourshoraires.vendrediApresMidi}}</p>
              </div>
              <div v-if="getDay == 6">
                <p>{{centre.jourshoraires.samediMatin}} {{centre.jourshoraires.samediApresMidi}}</p>
              </div>
              <div v-if="getDay == 0">
                <p>{{centre.jourshoraires.dimancheMatin}} {{centre.jourshoraires.dimancheApresMidi}}</p>
              </div>
            </div>
            <router-link class="plusinfo" :to="{ name: 'centre-id', params: { id: centre.id }}" tag="a" > Plus d'informations </router-link>
          </div>
        </div>
      </div>

      <div class="map">
          <h4> Les Centres </h4>
          <div id="map-wrap" style="height: 600px; ">
             <l-map :zoom=12 :center="[45.835425,1.2644847]">
               <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"> </l-tile-layer>
                  <div class="marker" v-for="centre in filteredList" v-bind:key="centre.id">
                       <l-marker :lat-lng="[centre.latitude, centre.longitude]" >
                       <l-popup :content="centre.association.nom + ' | ' + centre.adresse"/> </l-marker>
                     </div>
             </l-map>
          </div>
      </div>
    </div>
        </div>
</body>
</template>

<script>
import centresQuery from '~/apollo/queries/centre/centres'

export default {
  data() {
    return {
      centres: [],
      query: "",
    };
  },
  apollo: {
    centres: {
      prefetch: true,
      query: centresQuery
    }
  },
  computed: {
    // Search system
    filteredList() {
      return this.centres.filter(centre => {
        return centre.id.toLowerCase().includes(this.query.toLowerCase())
      })
    },
    getDay() {
      var day = new Date();
      return day.getDay();
    },
  },
};
</script>
