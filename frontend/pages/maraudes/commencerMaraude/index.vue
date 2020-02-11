<template>
  <div>
    <h1>Commencer une maraude</h1>

    <form @submit.stop.prevent="ajouterUneMaraude">
      <label for="nom">Nom de la maraude</label>
      <input type="text" v-model="nom">

      <label for="heureDepart">Heure de Départ :</label>
      <input type="text" v-model="heureDepart">

      <label for="heureRdv">Heure du rendez-vous au cours de la maraude</label>
      <input type="text" v-model="heureRdv">

      <label for="heureArrive">Heure d'arrivée prévue : </label>
      <input type="text" v-model="heureArrive">

      <label for="idLieuDepart">Lieu de départ : </label>
      <select v-model="idLieuDepart">
        <option v-for="lieu in listeLieus" :key="lieu.id" :value="lieu.id">{{lieu.libelle}}</option>
      </select>

      <label for="idLieuRdv">Lieu de rendez-vous au cours de la maraude : </label>
      <select v-model="idLieuRdv">
        <option v-for="lieu in listeLieus" :key="lieu.id" :value="lieu.id">{{lieu.libelle}}</option>
      </select>

      <label for="idLieuArrive">Lieu d'arrivé : </label>
      <select v-model="idLieuArrive">
        <option v-for="lieu in listeLieus" :key="lieu.id" :value="lieu.id">{{lieu.libelle}}</option>
      </select>

      <button type="submit">Commencer</button>
    </form>
  </div>
</template>

<script>
import lieusQuery from '~/apollo/queries/lieu/lieus'
import strapi from '~/utils/Strapi'

export default {
  data () {
    return {
      lieus: [],
      query: '',
      heureDepart: '',
      heureRdv: '',
      heureArrive: '',
      nom: '',
      idLieuDepart: 0,
      idLieuRdv: 0,
      idLieuArrive: 0 
    }
  },

  apollo: {
    lieus: {
      prefetch: true,
      query: lieusQuery
    }
  },

  computed: {
    listeLieus() {
      return this.lieus.filter(lieu => {
        return lieu.libelle.toLowerCase().includes(this.query.toLowerCase())
      })
    }
  },

  methods: {
    ajouterUneMaraude() {
      console.log(this.idLieuDepart, this.idLieuRdv, this.idLieuArrive)
    }
  }
}
</script>