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
    <div class="partenaires" v-for="partenaire in association.partenaires" :key="association.partenaires.id">
      <img :src="'http://localhost:1337/' + partenaire.logo.url">
      <div class="infoPartenaire">
        <h3> Nom du partenaire : </h3>
        <h2>{{partenaire.nom}}</h2>
        <h3> Téléphone du partenaire : </h3>
        <h2>{{partenaire.telephone}}</h2>
        <h3> Email du partenaire : </h3>
        <h2>{{partenaire.email}}</h2></br></br>
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
