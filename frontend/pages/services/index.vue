<template>
  <div>
    <h2> Les services </h2>
      <div class="row space-around">
        <div class="cadre">
          <div>
            <div style="width:100%" class="space-around align-center">
              <img class="icon" src="~/assets/icon/dining-room.png">
              <router-link class="orangeBorderButton" tag="a" to="/services/manger" exact>Où manger ?</router-link>
            </div>
            <p class="justify"> Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla </p>
          </div>
          <div>
            <img class="service-manger" src="~/assets/image/Ou_manger.jpg">
          </div>
        </div>
        <div class="cadre">
          <div>
            <div style="width:100%" class="space-around align-center">
              <img class="icon" src="~/assets/icon/douche.png">
              <router-link class="orangeBorderButton" tag="a" to="/services/laver" exact>Où se laver ?</router-link>
            </div>
            <p class="justify"> Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Blanvh jbvehir nvhfebnv hezbrvhj dnvjkre bnvzvhrz  fzeh hzhg hf ipap fp ap pih aeiph pih fhd phiefa hfa ha pa h </p>
          </div>
          <div>
            <img class="service-laver" src="~/assets/image/Ou_se_laver.jpg">
          </div>
        </div>
   	  </div>
      <div class="row space-around">
        <div class="cadre">
          <div>
            <div style="width:100%" class="space-around align-center">
              <img class="icon" src="~/assets/icon/dormir.png">
              <router-link class="orangeBorderButton" tag="a" to="/services/dormir" exact>Où dormir ?</router-link>
            </div>
            <p class="justify"> Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla </p>
          </div>
          <div>
            <img class="service-dormir" src="~/assets/image/Ou_dormir.jpg">
          </div>
        </div>
        <div class="cadre">
          <div>
            <div style="width:100%" class="space-around align-center">
              <img class="icon" src="~/assets/icon/vetements.png">
              <router-link class="orangeBorderButton" tag="a" to="/services/vestiaire" exact>Où se changer ?</router-link>
            </div>
            <p class="justify"> Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla </p>
          </div>
          <div>
            <img class="service-vestiaire" src="~/assets/image/Se_changer.jpg">
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
