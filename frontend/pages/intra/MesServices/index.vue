<template>
  <div>
    <client-only>
      <h3 style="padding-top:20px;"> Mes Services </h3><br>

      <div v-for="centre in association.centres" v-bind:key="association.centres.id">
        <div class="services">
          <div v-for="service in centre.services" :key="centre.services.id">
            <div class="cart">
              <h3>{{service.nom}}</h3>
              <h3>{{service.description}}</h3>
              <h5>Horaires d'ouverture :</h5>
              <table>
                <tr>
                  <th>Jour</th>
                  <th>Matin</th>
                  <th>Après-midi</th>
                </tr>
                <tr>
                  <td>Lundi </td>
                  <td>{{service.jourshoraires.lundiMatin}} </td>
                  <td>{{service.jourshoraires.lundiApresMidi}}</td>
                </tr>
                <tr>
                  <td>Mardi </td>
                  <td>{{service.jourshoraires.mardiMatin}} </td>
                  <td>{{service.jourshoraires.mardinApresMidi}}</td>
                </tr>
                <tr>
                  <td>Mercredi </td>
                  <td>{{service.jourshoraires.mercrediMatin}} </td>
                  <td>{{service.jourshoraires.mercrediApresMidi}}</td>
                </tr>
                <tr>
                  <td>Jeudi </td>
                  <td>{{service.jourshoraires.jeudiMatin}} </td>
                  <td>{{service.jourshoraires.jeudiApresMidi}}</td>
                </tr>
                <tr>
                  <td>Vendredi </td>
                  <td>{{service.jourshoraires.vendrediMatin}} </td>
                  <td>{{service.jourshoraires.vendrediApresMidi}}</td>
                </tr>
                <tr>
                  <td>Samedi </td>
                  <td>{{service.jourshoraires.samediMatin}} </td>
                  <td>{{service.jourshoraires.samediApresMidi}}</td>
                </tr>
                <tr>
                  <td>Dimanche </td>
                  <td>{{service.jourshoraires.dimancheMatin}} </td>
                  <td>{{service.jourshoraires.dimancheApresMidi}}</td>
                </tr>
              </table>
            </div>
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
      centre: Object,
      services: [],
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

.services {
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;
}


</style>
