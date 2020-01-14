<template>
  <div>
    <h3> Mon association </h3>

    <div class="association" v-bind:key="association">
       <img :src="'http://localhost:1337/' + association.logo.url">
       <div class="infoAssociation">
          <h4>{{association.nom}}</h4>
          <section>{{association.description}}</section>
       </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      query: ''
    }
  },
  computed: {
    // Get your association thanks to your getter
    association() {
      return this.$store.getters["auth/association"];
    }
  },
}
</script>
