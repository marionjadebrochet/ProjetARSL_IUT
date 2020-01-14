<template>
  <div>
    <form @submit.stop.prevent="handleSubmit">
      <fieldset>
        <legend>Connectez-vous avec vos identifiants</legend>
        <div class="row">
          <label for="username">Identifiant</label>
          <input v-model="username" type="text">
        </div>
        <div class="row">
          <label for="motdepasse">Mot de passe</label>
          <input v-model="password" type="password">
        </div>
        <button class="plusinfo" :disabled="loading" type="submit">Se connecter</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import strapi from '~/utils/Strapi'

export default {
  data() {
    return {
      username: '',
      password: '',
      loading: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true
        const response = await strapi.login(
          this.username,
          this.password
        )
        this.loading = false
        this.setUser(response.user)
        this.$router.push('/intra')
      } catch (err) {
        this.loading = false
        alert('Mauvais identifiant ou mot de passe')
      }
    },
    ...mapMutations({
      setUser: 'auth/setUser'
    })
  }
}
</script>

<style>
fieldset {
  width:30%;
  display:flex;
  flex-direction:column;
  text-align:center;
  align-items:center;
}
form {
  display:flex;
  justify-content:center;
}

fieldset > legend {
  font-size:30px;
  font-weight:500;
}
fieldset > button {
  width:50%;
  font-size: 26px;
}

</style>
