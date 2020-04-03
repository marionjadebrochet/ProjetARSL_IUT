<template>
  <div>
    <client-only>
      <h3 style="padding-top:20px;"> Suppression de services existants </h3>
      <div class="cadre center">
        <h2>{{association.nom}}</h2>
        <img :src="'http://localhost:1337' + associationUser.logo.url">
      </div>
      <div v-for="centre in association.centres" v-bind:key="centre.id">
        <h4>{{centre.libelle}}</h4>
        <h4>{{centre.lieu.adresse}}</h4>
        <div class="services">
          <form @submit.stop.prevent="supprimerService">
            <fieldset>
              <div class="row">
                <label>Séléctionner le service à supprimer :</label>
                <select required v-model="service">
                  <option v-for="service in centre.services" :key="service.id" :value="service.id">{{service.nom}} : {{service.description}}</option>
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
        service: '',
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
        variables() {
          return {id: this.associationUser.id}
        }
      }
    },
    methods: {
      async supprimerService() {
        this.loading = true;
        try {

          await strapi.deleteEntry("services", this.service);

          alert("Le service a bien été supprimé.");
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
