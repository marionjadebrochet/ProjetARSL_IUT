<template>
  <div>
    <client-only>

      <h3 style="padding-top:20px;"> Mes accueils de jour </h3>
      <div class="mesCentres cadre">
        <div>
          <h2>{{association.nom}}</h2>
          <img :src="'http://localhost:1337' + associationUser.logo.url">
        </div>
          <div class="cart">
            <div class="centre" v-for="centre in association.centres" v-bind:key="centre.id">
              <h3>Adresse : </h3>
              <p>{{centre.lieu.adresse}}</p>
              <h3>Horaires d'ouverture :</h3>
              <table>
                <tr>
                  <th>Jour</th>
                  <th>Matin</th>
                  <th>Après-midi</th>
                </tr>
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
        </div>
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
  }
}
</script>

<style>


</style>
