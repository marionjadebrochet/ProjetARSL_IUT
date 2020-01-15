<template>
    <div>
        <h2>Maraudes en prévisions</h2>
        <div v-for="maraude in filteredList" v-bind:key="maraude.id">
            <div v-show="maraude.enPrevisions">
                <p>Date de départ : {{maraude.dateDepart}}</p>
                <p>Lieu de départ : {{maraude.lieuDepart}}</p>
                <p>Lieu d'arrivé : {{maraude.lieuArrive}}</p>
                <p>Heure de Départ : {{maraude.heureDepart}}</p>
                <p>Personne en charge : {{maraude.user.Nom}}  {{maraude.user.Prenom}}</p>
            </div>
        </div>

        <h2>Maraudes en cours</h2>
        <div v-for="maraude in filteredList" v-bind:key="maraude.id">
            <div v-show="!maraude.enPrevisions">
                <p>Date de départ : {{maraude.dateDepart}}</p>
                <p>Lieu de départ : {{maraude.lieuDepart}}</p>
                <p>Lieu d'arrivé : {{maraude.lieuArrive}}</p>
                <p>Heure de Départ : {{maraude.heureDepart}}</p>
                <p>Personne en charge : {{maraude.user.Nom}}  {{maraude.user.Prenom}}</p>
            </div>s
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
