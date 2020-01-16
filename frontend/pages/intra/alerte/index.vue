<template>
  <div>
      <div class="titre">
        <img src="~/assets/image/alerte/bell(1).svg"></img>
        <h3 style="padding-top:20px;"> Mes Alertes </h3>
      </div>
      <div class="mesAlertes">
        <router-link class="bouton" tag="a" to="/intra/alerte/DeclencherAlerte" exact><h3>Déclencher une alerte</h3><p>Cliquez ici pour déclencher une alerte</p><p>Grand Froid, Canicule ou Épidémie</p></router-link>
      </div>
  </div>
</template>

<script>

</script>

<style>

img {
	width: 50px;
	height: 50px;
}

</style>
