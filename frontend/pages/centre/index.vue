<template>
  <div>
    <h3> Centres </h3>
    <div class="accueilDeJour">


        <div class="listeCentre">

          <div class="centre" v-for="centre in filteredList" v-bind:key="centre">
            <h4>{{centre.association.nom}}</h4>
            <h5>Adresse : </h5>
            <p>{{centre.adresse}}</p>
            <h5>Horraire d'ouverture : </h5>
            <p>Matin : {{centre.heureOuvertureMatin}} - {{centre.heureFermetureMatin}}</p>
            <p>Après-midi : {{centre.heureOuvertureSoir}} - {{centre.heureFermetureSoir}}</p>
          </div>

        </div>

        <div class="map">
            <h4> Les centres </h4>
            <iframe src="https://www.google.com/maps/d/embed?mid=1SJ0fyamK-fWDJJytAadYBpUfF4w13y1-"></iframe>
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
