<template>
  <div>
    <client-only>
      <h3 style="padding-top:20px;"> Mes Utilisateurs </h3><br>
      <div class="center">
        <div style="width:50%" v-for="user in association.users" v-bind:key="association.users.id">
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
            <div class="center">
              <button class="orangeButton" @onclique="SupprimerCentre">Supprimer</button>
            </div>
          </div>
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
  },
  methods:{
    supprimerMembre() {
      //return ....
    }
  }
}
</script>
