<template>
  <div>
    <h3> Centres </h3>
    <div class="accueilDeJour">


        <div class="listeCentre">

          <div class="centre" v-for="centre in filteredList" v-bind:key="centre">
            <h4>{{centre.association.nom}}</h4>
            <h5>Adresse : </h5>
            <p>{{centre.adresse}}</p>
            <h5>Horraire d'ouverure : </h5>
            <p>Matin : {{centre.heureOuvertureMatin}} - {{centre.heureFermetureMatin}}</p>
            <p>Après-midi : {{centre.heureOuvertureSoir}} - {{centre.heureFermetureSoir}}</p>
          </div>

        </div>

        <div class="map">
            <h4> Les centres </h4>
            <iframe src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Limoges+(Les%20centres)&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=B&amp;output=embed">
            </iframe>
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
      query: ''
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
        return centre.adresse.toLowerCase().includes(this.query.toLowerCase())
      })
    },
  }
}

</script>
