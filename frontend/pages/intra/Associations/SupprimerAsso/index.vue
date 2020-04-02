<template>
  <div>
    <client-only>

      <h3 style="padding-top:20px;"> Les associations </h3>
      <div class="mesCentres cadre">
          <div class="cart">
            <form @submit.stop.prevent="supprimerAsso">
              <fieldset>
                <div class="row">
                  <label>Séléctionner l'association à supprimer :</label>
                  <select required v-model="association">
                    <option v-for="association in listeAsso" :key="association.id" :value="association.id">{{association.nom}}</option>
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
import associationsQuery from '~/apollo/queries/association/associations'

export default {
  data() {
    return {
      associations: [],
      association: Object,
      query: '',
    }
  },
  apollo: {
    associations: {
      prefetch: true,
      query: associationsQuery
    }
  },
  computed: {
    // Search system
    listeAsso() {
      return this.associations.filter(association => {
        return association.nom.toLowerCase().includes(this.query.toLowerCase())
      })
    },
  },
  methods: {
    async supprimerAsso() {
      this.loading = true;
      try {
      
        await strapi.deleteEntry("associations", this.association);

        alert("L'association a bien été supprimé.");
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
