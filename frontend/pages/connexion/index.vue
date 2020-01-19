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
        <button class="orangeButton" :disabled="loading" type="submit">Se connecter</button>
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
        this.$router.push('/')
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
