<template>
  <div>
    <client-only>

      <h3 style="padding-top:20px;"> Mes accueils de jour </h3>
      <div class="mesCentres cadre">
        <div>
          <h2>{{association.nom}}</h2>
          <img :src="'http://localhost:1337/' + associationUser.logo.url">
        </div>
          <div class="cart">
            <form @submit.stop.prevent="supprimerCentre">
              <fieldset>
                <div class="row">
                  <label>Séléctionner l'accueil de jour à supprimer :</label>
                  <select required v-model="centre">
                    <option v-for="centre in association.centres" :key="centre.id" :value="centre.id">{{centre.libelle}}</option>
                  </select>
                </div>
                <div class="center">
                  <button class="orangeButton" type="submit">Supprimer</button>
                </div>
              </fieldset>
            </form>
        </div>
      </div>
    </client-only>
  </div>

</template>

<script>
import strapi from "~/utils/Strapi";
import associationQuery from '~/apollo/queries/association/association'

export default {
  data() {
    return {
      association: Object,
      centres: [],
      centre: '',
      query: '',
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
  methods: {
    async supprimerCentre() {
      this.loading = true;
      try {
        console.log(this.centre);
        await strapi.deleteEntry("centres", this.centre);

        alert("Le centre a bien été supprimé.");
        this.$router.push("/");
      } catch (err) {
        this.loading = false;
        this.$router.push("/");
        //alert(err);
      }
    }
  }
}
</script>

<style>


</style>
