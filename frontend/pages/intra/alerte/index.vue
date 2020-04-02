<template>
  <div>
    <div class="justify-center" style="margin-bottom: 50px;">
      <img class="rond" src="~/assets/image/iconsIntra/alarme.svg" style="margin-right: 20px; ">
      <h3> Déclencher une alerte </h3>
    </div>
    <div class="mesAlertes text-center">
      <button class="orangeButton" @click="declencherCanicule" v-on:click="messagealerte('Alerte canicule déclenchée')">Alerte Canicule</button>
      <button class="orangeButton" @click="declencherGrandFroid" v-on:click="messagealerte('Alerte grand froid déclenchée')">Alerte Grand Froid</button>
      <button class="orangeButton" @click="declencherEpidemie" v-on:click="messagealerte('Alerte épidémie déclenchée')">Alerte Epidémie</button>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    data() {
      return {
        typeAlerte: ''
      }
    },
    methods: {
      messagealerte: function(text) {
        alert(text);
      },

      async declencherCanicule() {
        this.setType("canicule")
      },
      async declencherEpidemie() {
        this.setType("epidemie")
      },
      async declencherGrandFroid() {
        this.setType("grandFroid")
      },
      ...mapMutations({
        setType: 'typeAlerte/setType'
      })
    }
  }


</script>

<style>

  img {
    width: 50px;
    height: 50px;
  }

</style>
