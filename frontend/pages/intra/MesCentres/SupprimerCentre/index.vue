<template>
  <div>
    <client-only>

      <h3 style="padding-top:20px;"> Suppression de centres existants </h3>
      <img :src="'http://localhost:1337/' + associationUser.logo.url">
      <div class="infoAssociation">
        <h2> Centre de l'association : {{association.nom}}</h2>
        <div class="centre" v-for="centre in association.centres" v-bind:key="association.centres.id">
          <h3>Adresse : </h3>
          <p>{{centre.adresse}}</p>
          <h3>Horaires d'ouverture :</h3>
          <table>
            <tr>
              <td>Lundi </td>
              <td>{{centre.jourshoraires.lundiMatin}} </td>
              <td>{{centre.jourshoraires.lundiApresMidi}}</td>
            </tr>
            <tr>
              <td>Mardi </td>
              <td>{{centre.jourshoraires.mardiMatin}} </td>
              <td>{{centre.jourshoraires.mardinApresMidi}}</td>
            </tr>
            <tr>
              <td>Mercredi </td>
              <td>{{centre.jourshoraires.mercrediMatin}} </td>
              <td>{{centre.jourshoraires.mercrediApresMidi}}</td>
            </tr>
            <tr>
              <td>Jeudi </td>
              <td>{{centre.jourshoraires.jeudiMatin}} </td>
              <td>{{centre.jourshoraires.jeudiApresMidi}}</td>
            </tr>
            <tr>
              <td>Vendredi </td>
              <td>{{centre.jourshoraires.vendrediMatin}} </td>
              <td>{{centre.jourshoraires.vendrediApresMidi}}</td>
            </tr>
            <tr>
              <td>Samedi </td>
              <td>{{centre.jourshoraires.samediMatin}} </td>
              <td>{{centre.jourshoraires.samediApresMidi}}</td>
            </tr>
            <tr>
              <td>Dimanche </td>
              <td>{{centre.jourshoraires.dimancheMatin}} </td>
              <td>{{centre.jourshoraires.dimancheApresMidi}}</td>
            </tr>
          </table>

        </div>
        <button @onclique="SupprimerCentre">Supprimer</button>
      </div>
    </client-only>
  </div>

</template>

<script>
import associationQuery from '~/apollo/queries/association/association'

export default {
  data() {
    return {
      association: Object,
      centres: [],
      query: '',
    }
  },
  computed: {
    // Get your association thanks to your getter
    associationUser() {
      return this.$store.getters["auth/association"];
    }
  },
  apollo: {
    association: {
      prefetch: true,
      query: associationQuery,
      variables () {
        return { id: this.associationUser.id }
      }
    }
  },
  methods:{
    supprimerCentre() {
      //return ....
    }
  }
}


</script>
