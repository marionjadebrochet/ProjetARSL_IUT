<template>
  <div>
    <client-only>

      <h3 style="padding-top:20px;"> Supprimer un lieu </h3>
      <div class="mesCentres cadre">
          <div class="cart">
            <form @submit.stop.prevent="supprimerLieu">
              <fieldset>
                <div class="row">
                  <label>Séléctionner le lieu à supprimer :</label>
                  <select required v-model="lieu">
                    <option v-for="lieu in listeLieus" :key="lieu.id" :value="lieu.id">{{lieu.libelle}} : {{lieu.adresse}}</option>
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
import lieusQuery from '~/apollo/queries/lieu/lieus'

export default {
  data() {
    return {
      lieus: [],
      lieu: Object,
      query: '',
    }
  },
  apollo: {
    lieus: {
      prefetch: true,
      query: lieusQuery
    }
  },
  computed: {
    // Search system
    listeLieus() {
      return this.lieus.filter(lieu => {
        return lieu.libelle.toLowerCase().includes(this.query.toLowerCase())
      })
    },
  },
  methods: {
    async supprimerLieu() {
      this.loading = true;
      try {

        await strapi.deleteEntry("lieus", this.lieu);

        alert("Le lieu a bien été supprimé.");
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
