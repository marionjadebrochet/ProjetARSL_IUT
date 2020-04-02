<template>
  <div>
    <h2>Les Maraudes</h2>
    <div class="maraude">
      <div class="cadre">
        <h3>Aujourd'hui</h3>
        <div v-for="maraude in filteredList" v-bind:key="maraude.id">
          <div class="infomaraude">
            <div v-if="getDay < maraude.dateDepart && getTomorrow > maraude.dateDepart && !maraude.fini">
              <p>
                <b>Date de départ :</b>
                {{maraude.dateDepart}}
              </p>
              <p>
                <b>Lieu de départ :</b>
                {{maraude.lieuDepart.libelle}}
              </p>
              <p>
                <b>Heure de Départ :</b>
                {{maraude.heureDepart}}
              </p>
              <p>
                <b>Point de Rendez-vous:</b>
                {{maraude.lieuRdv.libelle}}
              </p>
              <p>
                <b>Heure de Rendez-vous :</b>
                {{maraude.heureRdv}}
              </p>
              <p>
                <b>Lieu d'arrivé :</b>
                {{maraude.lieuArrive.libelle}}
              </p>
              <p>
                <b>Personne en charge :</b>
                {{maraude.user.Nom}} {{maraude.user.Prenom}}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="cadre">
        <h3>En prévision</h3>
        <div v-for="maraude in filteredList" v-bind:key="maraude.id">
          <div
            class="infomaraude">
            <div v-if="getTomorrow < maraude.dateDepart">
              <p>
                <b>Date de départ :</b>
                {{maraude.dateDepart}}
              </p>
              <p>
                <b>Lieu de départ :</b>
                {{maraude.lieuDepart.libelle}}
              </p>
              <p>
                <b>Heure de Départ :</b>
                {{maraude.heureDepart}}
              </p>
              <p>
                <b>Point de Rendez-vous:</b>
                {{maraude.lieuRdv.libelle}}
              </p>
              <p>
                <b>Heure de Rendez-vous :</b>
                {{maraude.heureRdv}}
              </p>
              <p>
                <b>Lieu d'arrivé :</b>
                {{maraude.lieuArrive.libelle}}
              </p>
              <p>
                <b>Personne en charge :</b>
                {{maraude.user.Nom}} {{maraude.user.Prenom}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="map">
      <div id="map-wrap" style="height: 600px; ">
        <l-map :zoom="14" :center="[45.835425,1.2644847]">
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
          <div class="marker" v-for="maraude in filteredList" v-bind:key="maraude.id">
            <l-marker :lat-lng="[maraude.lieuDepart.latitude, maraude.lieuDepart.longitude]">
              <l-popup :content="maraude.lieuDepart.libelle + ' | ' + maraude.heureDepart" />
            </l-marker>
            <l-marker :lat-lng="[maraude.lieuRdv.latitude, maraude.lieuRdv.longitude]">
              <l-popup :content="maraude.lieuRdv.libelle +' | ' + maraude.heureRdv" />
            </l-marker>
            <l-marker :lat-lng="[maraude.lieuArrive.latitude, maraude.lieuArrive.longitude]">
              <l-popup :content="maraude.lieuArrive.libelle" />
            </l-marker>
          </div>
        </l-map>
      </div>
    </div>
  </div>
</template>

<script>
import maraudesQuery from "~/apollo/queries/maraude/maraudes";

export default {
  data() {
    return {
      maraudes: [],
      query: ""
    };
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
        return maraudes.id.toLowerCase().includes(this.query.toLowerCase());
      });
    },
    getDay() {
      var date = new Date().toJSON().slice(0, 10);
      console.log(date);

      return date;
    },
    getTomorrow() {
      var date = new Date().toJSON().slice(0, 10);

      var tomorrow = new Date(date);
      tomorrow.setDate(tomorrow.getDate() + 1);
      var tomorrow1 = new Date(tomorrow).toJSON().slice(0, 10);

      return tomorrow1;
    }
  }
};
</script>

<style>
</style>
