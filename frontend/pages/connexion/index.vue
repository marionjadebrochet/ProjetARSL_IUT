<template>
  <div>
    <form @submit.stop.prevent="handleSubmit">
      <fieldset>
        <legend>Connectez-vous avec vos identifiants</legend>
        <label for="email">Email</label>
        <input v-model="email" type="email" value="jeandupont@arsl.com">
        <label for="motdepasse">Mot de passe</label>
        <input v-model="password" type="password" value="testuser">
        <button :disabled="loading" type="submit">Se connecter</button>
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
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true
        const response = await strapi.login(
          this.email,
          this.password
        )
        this.loading = false
        this.setUser(response.user)
        this.$router.go(-1)
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