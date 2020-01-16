<template>
  <div>
    <h3 style="padding-top:20px;"> Mes partenaires </h3><br>
    <div class="allpartenaires">
      <div class="partenaires" v-for="partenaire in association.partenaires" :key="association.partenaires.id">
        <img :src="'http://localhost:1337/' + partenaire.logo.url">
        <div class="infoPartenaire">
          <h2>{{partenaire.nom}}</h2>
          <p> Téléphone du partenaire : <b>{{partenaire.telephone}}</b></p>
          <p> Email du partenaire : <b>{{partenaire.email}}</b> </p>
        </div>
        <button class="plusinfo greybutton" @onclique="SupprimerPartenaire">Supprimer</button>
      </div>
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
  },
  methods : {
    SupprimerPartenaire() {
      //contenu....
    }
  },
    mounted() {
      if (localStorage.getItem('reloaded')) {
          // The page was just reloaded. Clear the value from local storage
          // so that it will reload the next time this page is visited.
          localStorage.removeItem('reloaded');
      } else {
          // Set a flag so that we know not to reload the page twice.
          localStorage.setItem('reloaded', '1');
          location.reload();
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
