<template>
  <div>
    <div class="justify-center" style="margin-bottom: 50px;">
      <img class="rond" src="~/assets/image/iconsIntra/alarme.svg" style="margin-right: 20px; ">
      <h3> Déclencher une alerte </h3>
    </div>
    <div class="mesAlertes text-center">
      <button class="orangeButton" onclick="declencherCanicule">Alerte Canicule</button>
      <button class="orangeButton" onclick="declencherGrandFroid">Alerte Grand Froid</button>
      <button class="orangeButton" onclick="declencherEpidemie">Alerte Epidémie</button>
      <p id="demo"></p>
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

  function declencherCanicule() {
    document.getElementById("demo").innerHTML = "Alerte Canicule";
  }

  function declencherGrandFroid() {
    document.getElementById("demo").innerHTML = "Alerte Grand Froid";
  }

  function declencherEpidemie() {
    document.getElementById("demo").innerHTML = "Alerte Epidemie";
  }
</script>

<style>

  img {
    width: 50px;
    height: 50px;
  }

</style>
