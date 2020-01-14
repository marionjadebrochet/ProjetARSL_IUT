<template>
<div>


  <client-only>
    <div class="page">
      <div class="column">
        <h4>{{centre.association.nom}}</h4>
        <div class="cart">
          <h5>Adresse </h5>
          <p>{{centre.adresse}}</p>
          <h5>Horaires d'ouverture </h5>
          <table>
            <tr>
              <th>Jour</th>
              <th>Matin</th>
              <th>Après-midi</th>
            </tr>
            <tr>
              <th>Lundi</th>
              <td>{{centre.jourshoraires.lundiMatin}}</td>
              <td>{{centre.jourshoraires.lundiApresMidi}}</td>
            </tr>
            <tr>
              <th>Mardi</th>
              <td>{{centre.jourshoraires.mardiMatin}}</td>
              <td>{{centre.jourshoraires.mardinApresMidi}}</td>
            </tr>
            <tr>
              <th>Mercredi</th>
              <td>{{centre.jourshoraires.mercrediMatin}}</td>
              <td>{{centre.jourshoraires.mercrediApresMidi}}</td>
            </tr>
            <tr>
              <th>Jeudi</th>
              <td>{{centre.jourshoraires.jeudiMatin}}</td>
              <td>{{centre.jourshoraires.jeudiApresMidi}}</td>
            </tr>
            <tr>
              <th>Vendredi</th>
              <td>{{centre.jourshoraires.vendrediMatin}}</td>
              <td>{{centre.jourshoraires.vendrediApresMidi}}</td>
            </tr>
            <tr>
              <th>Samedi</th>
              <td>{{centre.jourshoraires.samediMatin}}</td>
              <td>{{centre.jourshoraires.samediApresMidi}}</td>
            </tr>
            <tr>
              <th>Dimanche</th>
              <td>{{centre.jourshoraires.dimancheMatin}}</td>
              <td>{{centre.jourshoraires.dimancheApresMidi}}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="column">
        <h4>Services </h4>
        <div class="cart" v-for="service in centre.services" v-bind:key="centre.services.id">
            <h5>{{service.nom}}</h5>
            <table>
              <tr>
                <th>Jour</th>
                <th>Matin</th>
                <th>Après-midi</th>
              </tr>
              <tr>
                <th>Lundi</th>
                <td>{{service.jourshoraires.lundiMatin}}</td>
                <td>{{service.jourshoraires.lundiApresMidi}}</td>
              </tr>
              <tr>
                <th>Mardi</th>
                <td>{{service.jourshoraires.mardiMatin}}</td>
                <td>{{service.jourshoraires.mardinApresMidi}}</td>
              </tr>
              <tr>
                <th>Mercredi</th>
                <td>{{service.jourshoraires.mercrediMatin}}</td>
                <td>{{service.jourshoraires.mercrediApresMidi}}</td>
              </tr>
              <tr>
                <th>Jeudi</th>
                <td>{{service.jourshoraires.jeudiMatin}}</td>
                <td>{{service.jourshoraires.jeudiApresMidi}}</td>
              </tr>
              <tr>
                <th>Vendredi</th>
                <td>{{service.jourshoraires.vendrediMatin}}</td>
                <td>{{service.jourshoraires.vendrediApresMidi}}</td>
              </tr>
              <tr>
                <th>Samedi</th>
                <td>{{service.jourshoraires.samediMatin}}</td>
                <td>{{service.jourshoraires.samediApresMidi}}</td>
              </tr>
              <tr>
                <th>Dimanche</th>
                <td>{{service.jourshoraires.dimancheMatin}}</td>
                <td>{{service.jourshoraires.dimancheApresMidi}}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
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
  },

  mounted() {
    if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
}
}
</script>

<style>
.page {
  display:flex;
  flex-direction:row;
  justify-content:space-around;
}
.column {
  width:50%;
  display:flex;
  flex-direction:column;
  align-items:center;
}

.column h3 {
  padding-bottom:10px;
}
h2 {
  margin-bottom:10px;
}
p {
  padding:10px 0px;
}

</style>
