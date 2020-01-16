<template>
    <div>
      <h3> Maraudes </h3>
      <div class="maraude">
        <div class="cart">
          <h3>Maraudes en cours</h3>
          <div v-for="maraude in filteredList" v-bind:key="maraude.id">
              <div class="infomaraude" v-show="!maraude.enPrevisions">
                  <p>Date de départ : {{maraude.dateDepart}}</p>
                  <p>Lieu de départ : {{maraude.lieuDepart}}</p>
                  <p>Heure de Départ : {{maraude.heureDepart}}</p>
                  <p>Point de Rendez-vous: {{maraude.lieuRdv}}</p>
                  <p>Heure de Rendez-vous : {{maraude.heureRdv}}</p>
                  <p>Lieu d'arrivé : {{maraude.lieuArrive}}</p>
                  <p>Personne en charge : {{maraude.user.Nom}}  {{maraude.user.Prenom}}</p>
              </div>
          </div>
        </div>

        <div class="cart">
          <h3>Maraudes en prévisions</h3>
          <div v-for="maraude in filteredList" v-bind:key="maraude.id">
              <div class="infomaraude" v-show="maraude.enPrevisions">
                  <p>Date de départ : {{maraude.dateDepart}}</p>
                  <p>Lieu de départ : {{maraude.lieuDepart}}</p>
                  <p>Lieu d'arrivé : {{maraude.lieuArrive}}</p>
                  <p>Heure de Départ : {{maraude.heureDepart}}</p>
                  <p>Personne en charge : {{maraude.user.Nom}}  {{maraude.user.Prenom}}</p>
              </div>
          </div>
        </div>

        <div class="map">
            <div id="map-wrap" style="height: 600px; ">
               <l-map :zoom=14 :center="[45.835425,1.2644847]">
                 <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"> </l-tile-layer>
                    <div class="marker" v-for="maraude in filteredList" v-bind:key="maraude.id">
                      <!-- marqueurs temporaires -->
                      <l-marker :lat-lng="[45.8268024,1.2592301]" >
                            <l-popup :content="'Mairie | ' + maraude.heureDepart"  />
                      </l-marker>
                      <l-marker :lat-lng="[45.84,1.2726]" >
                            <l-popup :content="'Gare des Bénédictins | ' + maraude.heureRdv"  />
                      </l-marker>
                      <l-marker :lat-lng="[45.8318,1.2532]" >
                          <l-popup :content="'Place Winston Churchill'"/>
                      </l-marker>
                    </div>
               </l-map>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import maraudesQuery from '~/apollo/queries/maraude/maraudes'

export default {
  data() {
    return {
      maraudes: [],
      query: '',
    }
  },
  apollo: {
    maraudes: {
      prefetch: true,
      query: maraudesQuery
    }
  },
  computed: {
    // Search system
    filteredList() {
      return this.maraudes.filter(maraudes => {
        return maraudes.id.toLowerCase().includes(this.query.toLowerCase())
      })
    },
  },
}

</script>

<style>

.maraude {
  display:flex;
  flex-direction: row;
  align-items: top;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom:50px;
}

.maraude h3 {
  padding:10px 0px;
}

.infomaraude {
  padding:10px 0px;
}

</style>
