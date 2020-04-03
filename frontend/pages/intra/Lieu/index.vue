<template>
  <div>
    <client-only>

      <h3 style="padding-top:20px;"> lieux </h3>
      <div class="cadre" v-for="lieu in listeLieus" v-bind:key="lieu.id">
            <h3>{{lieu.libelle}}</h3>
            <div class="center">
              <p>{{lieu.adresse}}</p>
            </div>
            <div class="trait"></div>
      </div>
    </client-only>
  </div>

</template>

<script>
import strapi from "~/utils/Strapi";
import lieusQuery from '~/apollo/queries/lieu/lieus'

export default {
  data() {
    return {
      lieus: [],
      lieu: Object,
      query: '',
    }
  },
  apollo: {
    lieus: {
      prefetch: true,
      query: lieusQuery
    }
  },
  computed: {
    // Search system
    listeLieus() {
      return this.lieus.filter(lieu => {
        return lieu.libelle.toLowerCase().includes(this.query.toLowerCase())
      })
    },
  },
}
</script>

<style>


</style>
