<template>
  <div>
    <h3> Les services </h3>

    <div class="row" >
      <div class="cadre">
        <router-link tag="a" to="/services/manger" exact>	<button class="bouton"><h2> Où manger ? </h2></button></router-link>
        <p> Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla </p>
        <img class="service-manger" src="~/assets/image/Ou_manger.jpg">
      </div>
      <div class="cadre">
        <router-link tag="a" to="/services/laver" exact>	<button class="bouton"><h2> Où se laver ? </h2></button></router-link>
        <p> Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla </p>
        <img class="service-laver" src="~/assets/image/Ou_se_laver.jpg">
      </div>
 	  </div>
    <div class="row" >
      <div class="cadre">
        <router-link tag="a" to="/services/dormir" exact>	<button class="bouton"><h2> Où dormir ? </h2></button></router-link>
        <p> Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla </p>
        <img class="service-dormir" src="~/assets/image/Ou_dormir.jpg">
      </div>
      <div class="cadre">
        <router-link tag="a" to="/services/vestiaire" exact>	<button class="bouton"><h2> Où se changer ? </h2></button></router-link>
        <!-- :to="{ name: '/services/vestiaire', params: { nom: services.nom }}" -->
        <p> Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla </p>
        <img class="service-vestiaire" src="~/assets/image/Se_changer.jpg">
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
