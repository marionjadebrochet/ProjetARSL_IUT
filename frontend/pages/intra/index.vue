<template>
  <div>
    <h3> Bienvenue sur l'intra de l'ARSL, choisissez dans le menu ci-dessus ce que vous voulez </h3>

    <div class="association" v-for="association in filteredList" v-bind:key="association">
       <img :src="'http://localhost:1337/' + association.logo.url">
       <div class="infoAssociation">
          <h4>{{association.nom}}</h4>
          <section>{{association.description}}</section>
       </div>
    </div>
  </div>
</template>
