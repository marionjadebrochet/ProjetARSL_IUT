<template>
  <div>
    <div v-for="alerteglobale in filteredList" v-bind:key="alerteglobale.id">
      <div v-if="alerteglobale.actif == true">
        <div class="contour">
          <div class="image">
            <img :src="'http://localhost:1337/' + alerteglobale.image.url" />
          </div>
          <h4>{{alerteglobale.nom}}</h4>
          <p>{{alerteglobale.description}}</p>
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