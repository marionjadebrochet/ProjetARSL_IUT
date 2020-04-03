<template>
  <div>
    <h3 style="padding-top:20px;"> Mon organisme </h3><br>

    <div class="association cadre" v-bind:key="association">
      <img :src="'http://localhost:1337' + association.logo.url">
      <div class="infoAssociation">
        <h4 >{{association.nom}}</h4>
        <section>{{association.description}}</section>
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
