<template>
  <div style="margin-bottom: 100px">
    <div v-for="alerteglobale in filteredList" v-bind:key="alerteglobale.id" class="alertes">
      <div v-if="alerteglobale.actif == true" class="alerte">
        <div class="row">
          <img :src="'http://localhost:1337/' + alerteglobale.image.url"/>
          <div>
            <h4>{{alerteglobale.nom}}</h4>
            <p class="justify">{{alerteglobale.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import alertesQuery from "~/apollo/queries/alerte/alertes";

  export default {
    data() {
      return {
        alerteglobales: [],
        query: ""
      };
    },
    apollo: {
      alerteglobales: {
        prefetch: true,
        query: alertesQuery
      }
    },
    computed: {
      // Search system
      filteredList() {
        return this.alerteglobales.filter(alerteglobale => {
          return alerteglobale.nom.toLowerCase().includes(this.query.toLowerCase());
        });
      }
    }
  };
</script>
