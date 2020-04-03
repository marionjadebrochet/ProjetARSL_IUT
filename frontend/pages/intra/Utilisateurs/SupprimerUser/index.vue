<template>
  <div>
    <client-only>
      <h3 style="padding-top:20px;"> Mes Utilisateurs </h3><br>
      <div class="center">
          <div class="cadre" style="margin-top: 30px">
            <form @submit.stop.prevent="supprimerUser">
              <fieldset>
                <div class="row">
                  <label>Séléctionner l'utilisateur à supprimer :</label>
                  <select required v-model="user">
                    <option v-for="user in users" :key="user.id" :value="user.id">{{user.username}} : {{user.Prenom}} {{user.Nom}}</option>
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
import userQuery from '~/apollo/queries/user/users';

export default {
  data() {
    return {
      users: [],
      user: '',
      query: '',
    }
  },
  apollo: {
    users: {
      prefetch: true,
      query: userQuery,
    }
  },
  methods:{
    async supprimerUser() {
      this.loading = true;
      try {
        await strapi.deleteEntry("users", this.user);

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
