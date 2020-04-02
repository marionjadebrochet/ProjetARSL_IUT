<template>
  <div>
    <client-only>
      <h3 style="padding-top:20px;"> Utilisateurs </h3><br>
      <div class="center">
        <div style="width:50%;" v-for="user in users" v-bind:key="users.id">
          <div class="cadre" style="margin-top: 30px">
            <div class="row">
              <h3>Nom : </h3>
              <p>{{user.Nom}}</p>
            </div>
            <div class="row">
              <h3>Prenom : </h3>
              <p>{{user.Prenom}}</p>
            </div>
            <div class="row">
              <h3>Telephone : </h3>
              <p>{{user.Telephone}}</p>
            </div>
            <div class="row">
              <h3>Email : </h3>
              <p>{{user.email}}</p>
            </div>
            <div class="row">
              <h3>Role : </h3>
              <p>{{user.role.name}}</p>
            </div>
            <div class="row" v-if="user.association != null">
              <h3>Organisation : </h3>
              <p>{{user.association.nom}}</p>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import usersQuery from '~/apollo/queries/user/users'

export default {
  data() {
    return {
      users: [],
      query: '',
    }
  },
  apollo: {
    users: {
      prefetch: true,
      query: usersQuery,
    }
  }
}
</script>
