<template>
  <div>
      <img class="rond" src="~/assets/image/iconsIntra/alarme.svg"></img>
      <h3> Déclencher une alerte </h3>
      <div class="mesAlertes">
        <button class="bouton"onclick="declencherCanicule">Déclencher une Alerte Canicule</button>
        <button class="bouton" onclick="declencherGrandFroid">Déclencher une Alerte Grand Froid</button>
        <button class="bouton" onclick="declencherEpidemie">Déclencher une Alerte Epidémie</button>
        <p id="demo"></p>
      </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  data() {
    return  {
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
