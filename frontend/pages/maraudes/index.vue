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
                  <p>Lieu d'arrivé : {{maraude.lieuArrive}}</p>
                  <p>Heure de Départ : {{maraude.heureDepart}}</p>
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
               <l-map :zoom=12 :center="[45.835425,1.2644847]">
                 <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"> </l-tile-layer>
                    <div class="marker" v-for="centre in filteredList" v-bind:key="centre.id">

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
