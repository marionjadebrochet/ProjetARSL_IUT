<template>
  <div>
    <h3 style="padding-top:20px;"> Mes partenaires </h3><br>
    <div class="allpartenaires">
        <form @submit.stop.prevent="supprimerPartenaire">
          <fieldset>
            <div class="row">
              <label>Séléctionner le partenaire à supprimer :</label>
              <select required v-model="partenaire">
                <option v-for="partenaire in association.partenaires" :key="partenaire.id" :value="partenaire.id">{{partenaire.nom}}</option>
              </select>
            </div>
            <div class="center">
              <button class="orangeButton" type="submit">Supprimer</button>
            </div>
          </fieldset>
        </form>
    </div>
  </div>
</template>

<script>
import strapi from "~/utils/Strapi";
import associationQuery from '~/apollo/queries/association/associationPartenaires';

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
    async supprimerPartenaire() {
      this.loading = true;
      try {

        await strapi.deleteEntry("partenaires", this.partenaire);

        alert("L'utilisateur a bien été supprimé.");
        this.$router.push("/");
      } catch (err) {
        this.loading = false;
        this.$router.push("/");
        //alert(err);
      }
    }
  },
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
