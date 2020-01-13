<template>
<div>


  <client-only>

    <h2>{{centre.association.nom}}</h2>
    <h3>Adresse : </h3>
    <p>{{centre.adresse}}</p>
    <h3>Horaires d'ouverture :</h3>
    <p>Lundi : {{centre.jourshoraires.lundiMatin}} {{centre.jourshoraires.lundiApresMidi}}</p>
    <p>Mardi : {{centre.jourshoraires.mardiMatin}} {{centre.jourshoraires.mardiApresMidi}}</p>
    <p>Mercredi : {{centre.jourshoraires.mercrediMatin}} {{centre.jourshoraires.mrecrediApresMidi}}</p>
    <p>Jeudi : {{centre.jourshoraires.jeudiMatin}} {{centre.jourshoraires.jeudiApresMidi}}</p>
    <p>Vendredi : {{centre.jourshoraires.vendrediMatin}} {{centre.jourshoraires.vendrediApresMidi}}</p>
    <p>Samedi : {{centre.jourshoraires.samediMatin}} {{centre.jourshoraires.samediApresMidi}}</p>
  </client-only>
</div>
</template>

<script>
import centreQuery from '~/apollo/queries/centre/centre'

export default {
  data() {
    return {
      centre: Object
    }
  },
  apollo: {
    centre: {
      prefetch: true,
      query: centreQuery,
      variables () {
        return { id: this.$route.params.id }
      }
    }
  }
}
</script>
