<template>
  <div>
    <client-only>
      <h3 style="padding-top:20px;"> Mes Membres </h3><br>
      <div class="center">
          <div class="cadre" style="margin-top: 30px">
            <form @submit.stop.prevent="supprimerMembre">
              <fieldset>
                <div class="row">
                  <label>Séléctionner le membre à supprimer :</label>
                  <select required v-model="user">
                    <option v-for="user in association.users" :key="user.id" :value="user.id">{{user.username}} : {{user.Prenom}} {{user.Nom}}</option>
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
      users: [],
      user: '',
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
  methods:{
    async supprimerMembre() {
      this.loading = true;
      try {
        await strapi.deleteEntry("users", this.user);

        alert("Le mambre a bien été supprimé.");
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
