<template>
  <body>

    <h3> Centres ouverts </h3>

    <div class="accueilDeJour">
      <div class="listeCentre">
        <div class="centre" v-for="centre in filteredList" v-bind:key="centre">
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
      </div>


    <div class="map">
      <h4>Les centres</h4>
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=10B3EB07xHA2NsGIkl3oS4JymcHtICPx6"
        width="640"
        height="480"
      ></iframe>
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
