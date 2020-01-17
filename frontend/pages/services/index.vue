<template>
  <div>
    <h3> Les services </h3>
    <div class="page">
      <div class="row space-around">
        <div class="cadre">
          <img class="icon" src="~/assets/icon/dining-room.png">
          <div class="center">
            <router-link class="whiteButton" tag="a" to="/services/manger" exact>Où manger ?</router-link>
            <p class="justify"> Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla </p>
          </div>
          <div>
            <img class="service-manger" src="~/assets/image/Ou_manger.jpg">
          </div>
        </div>
        <div class="cadre">
          <img class="icon" src="~/assets/icon/douche.png">
          <div class="center">
            <router-link class="whiteButton" tag="a" to="/services/laver" exact>Où se laver ?</router-link>
            <p class="justify"> Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Blanvh jbvehir nvhfebnv hezbrvhj dnvjkre bnvzvhrz  fzeh hzhg hf ipap fp ap pih aeiph pih fhd phiefa hfa ha pa h </p>
          </div>
          <div>
            <img class="service-laver" src="~/assets/image/Ou_se_laver.jpg">
          </div>
        </div>
   	  </div>
      <div class="row space-around">
        <div class="cadre">
          <img class="icon" src="~/assets/icon/dormir.png">
          <div class="center">
            <router-link class="whiteButton" tag="a" to="/services/dormir" exact>Où dormir ?</router-link>
            <p class="justify"> Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla </p>
          </div>
          <div>
            <img class="service-dormir" src="~/assets/image/Ou_dormir.jpg">
          </div>
        </div>
        <div class="cadre">
          <img class="icon" src="~/assets/icon/vetements.png">
          <div class="center">
            <router-link class="whiteButton" tag="a" to="/services/vestiaire" exact>Où se changer ?</router-link>
            <!-- :to="{ name: '/services/vestiaire', params: { nom: services.nom }}" -->
            <p class="justify"> Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla </p>
          </div>
          <div>
            <img class="service-vestiaire" src="~/assets/image/Se_changer.jpg">
          </div>
        </div>
   	  </div>
    </div>
  </div>
</template>


<script>
import servicesQuery from '~/apollo/queries/service/services'

export default {
  data() {
    return {
      services: [],
      query: ''
    }
  },
  apollo: {
    services: {
      prefetch: true,
      query: servicesQuery
    }
  },
  computed: {
    // Search system
    filteredList() {
      return this.services.filter(services => {
        return services.nom.toLowerCase().includes(this.query.toLowerCase())
      })
    },
  }
}
</script>
