<template>
  <div>
    <h3 style="padding-top:20px;"> Mon association </h3><br>

    <div class="association" v-bind:key="association">
      <img :src="'http://localhost:1337/' + association.logo.url">
      <div class="infoAssociation">
        <h4 >{{association.nom}}</h4>
        <section>{{association.description}}</section>
      </div>
    </div>

    <h3 style="padding-top:20px;"> Mes partenaires </h3><br>
    <div class="allpartenaires">
      <div class="partenaires" v-for="partenaire in association.partenaires" :key="association.partenaires.id">
        <img :src="'http://localhost:1337/' + partenaire.logo.url">
        <div class="infoPartenaire">
          <h2>{{partenaire.nom}}</h2>
          <p> Téléphone du partenaire : <b>{{partenaire.telephone}}</b></p>
          <p> Email du partenaire : <b>{{partenaire.email}}</b> </p>
        </div>
      </div>
    </div>
    <div>
      <router-link tag="a" to="/intra/MonAssociation/AjouterPartenaire" exact>Ajouter Partenaire</router-link>
      <router-link tag="a" to="/intra/MonAssociation/SupprimerPartenaire" exact>Supprimer Partenaire</router-link>
    </div>
  </div>
</template>

<script>
import associationQuery from '~/apollo/queries/association/associationPartenaires'

export default {
  data() {
    return {
      association: Object,
      partenaires: [],
      query: ''
    }
  },
  computed: {
    // Get your association thanks to your getter
    associationUser() {
      return this.$store.getters["auth/association"];
    }
  },
  apollo: {
    association: {
      prefetch: true,
      query: associationQuery,
      variables () {
        return { id: this.associationUser.id }
      }
    }
  }
}
</script>

<style>
.allpartenaires {
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  flex-wrap:wrap;
}
.partenaires {
  width:40%;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  margin-top: 20px;
  background-color:#EEEEEE;
  padding:20px 20px;
  border-radius:20px;
  box-shadow:5px 5px 10px #CCCCCC;
  margin-bottom:50px;
}
.partenaires > img {
  width:auto;
  height:300px;
}
.infoPartenaire > p {
  padding:10px;
  margin-top:10px;
}
</style>
