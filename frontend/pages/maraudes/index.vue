<template>
    <div>
      <h3> Maraudes </h3>
      <div class="maraude">
        <div>
          <h3>Maraudes en cours</h3>
          <div v-for="maraude in filteredList" v-bind:key="maraude.id">
              <div class="infomaraude" v-show="!maraude.enPrevisions">
                  <p><b>Date de départ :</b> {{maraude.dateDepart}}</p>
                  <p><b>Lieu de départ :</b> {{maraude.lieuDepart.libelle}}</p>
                  <p><b>Heure de Départ : </b> {{maraude.heureDepart}}</p>
                  <p><b>Point de Rendez-vous:</b> {{maraude.lieuRdv.libelle}}</p>
                  <p><b>Heure de Rendez-vous :</b> {{maraude.heureRdv}}</p>
                  <p><b>Lieu d'arrivé : </b>{{maraude.lieuArrive.libelle}}</p>
                  <p><b>Personne en charge : </b> {{maraude.user.Nom}}  {{maraude.user.Prenom}}</p>
              </div>
          </div>
        </div>

        <div>
          <h3>Maraudes en prévisions</h3>
          <div v-for="maraude in filteredList" v-bind:key="maraude.id">
              <div class="infomaraude" v-show="maraude.enPrevisions">
                  <p><b>Date de départ :</b> {{maraude.dateDepart}}</p>
                  <p><b>Lieu de départ :</b> {{maraude.lieuDepart.libelle}}</p>
                  <p><b>Heure de Départ : </b> {{maraude.heureDepart}}</p>
                  <p><b>Point de Rendez-vous:</b> {{maraude.lieuRdv.libelle}}</p>
                  <p><b>Heure de Rendez-vous :</b> {{maraude.heureRdv}}</p>
                  <p><b>Lieu d'arrivé : </b>{{maraude.lieuArrive.libelle}}</p>
                  <p><b>Personne en charge : </b> {{maraude.user.Nom}}  {{maraude.user.Prenom}}</p>
              </div>
          </div>
        </div>

        <div class="map">
            <div id="map-wrap" style="height: 600px; ">
               <l-map :zoom=14 :center="[45.835425,1.2644847]">
                 <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"> </l-tile-layer>
                    <div class="marker" v-for="maraude in filteredList" v-bind:key="maraude.id">
                      <!-- marqueurs temporaires -->
                      <l-marker :lat-lng="[maraude.lieuDepart.latitude, maraude.lieuDepart.longitude]" >
                            <l-popup :content="maraude.lieuDepart.libelle + ' | ' + maraude.heureDepart"  />
                      </l-marker>
                      <l-marker :lat-lng="[maraude.lieuRdv.latitude, maraude.lieuRdv.longitude]" >
                            <l-popup :content="maraude.lieuRdv.libelle +' | ' + maraude.heureRdv"  />
                      </l-marker>
                      <l-marker :lat-lng="[maraude.lieuArrive.latitude, maraude.lieuArrive.longitude]" >
                          <l-popup :content="maraude.lieuArrive.libelle"/>
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
