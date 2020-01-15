<template>
  <div>
    <client-only>
      <h3 style="padding-top:20px;"> Mes Utilisateurs </h3><br>
      <div class="mesUtilisateurs">
        <div v-for="user in association.users" v-bind:key="association.users.id">
          <h3>Nom : </h3>
          <p>{{user.Nom}}</p>
          <h3>Pseudo : </h3>
          <p>{{user.usernames}}</p>
          <h3>Prenom : </h3>
          <p>{{user.Prenom}}</p>
          <h3>Telephone : </h3>
          <p>{{user.Telephone}}</p>
          <h3>Email : </h3>
          <p>{{user.email}}</p>
          <h3>Role : </h3>
          <p>{{user.role.name}}</p>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import associationQuery from '~/apollo/queries/association/association'

export default {
  data() {
    return {
      association: Object,
      users: [],
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
  }
}
</script>
