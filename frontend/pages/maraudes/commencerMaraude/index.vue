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

      <!-- a remettre si besoin
      <label for="heureArrive">Heure d'arrivée prévue : </label>
      <input type="text" v-model="heureArrive">
      -->

      <label for="lieuDepart">Lieu de départ : </label>
      <select v-model="lieuDepart">
        <option v-for="lieu in listeLieus" :key="lieu.id" :value="lieu">{{lieu.libelle}}</option>
      </select>

      <label for="lieuRdv">Lieu de rendez-vous au cours de la maraude : </label>
      <select v-model="lieuRdv">
        <option v-for="lieu in listeLieus" :key="lieu.id" :value="lieu">{{lieu.libelle}}</option>
      </select>

      <label for="lieuArrive">Lieu d'arrivé : </label>
      <select v-model="lieuArrive">
        <option v-for="lieu in listeLieus" :key="lieu.id" :value="lieu">{{lieu.libelle}}</option>
      </select>

      <button type="submit">Commencer</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import lieusQuery from '~/apollo/queries/lieu/lieus'
import strapi from '~/utils/Strapi'

export default {
  data () {
    return {
      maraude: Object,
      lieus: [],
      query: '',
      heureDepart: '',
      heureRdv: '',
      //heureArrive: '',
      nom: '',
      lieuDepart: Object,
      lieuRdv: Object,
      lieuArrive: Object
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
    },
  },

  methods: {
    async ajouterUneMaraude() {
      try {

        //creation de la maraude
        var day = new Date();
        this.maraude = await strapi.createEntry("maraudes", {
          nom: this.nom,
          heureDepart: this.heureDepart,
          heureRdv: this.heureRdv,
          //heureArrive: this.heureArrive,
          lieuDepart: this.lieuDepart,
          lieuArrive: this.lieuArrive,
          lieuRdv: this.lieuRdv,
          enPrevisions: false,
          fini: false,
          dateDepart: day
        });
        
        //on commence a initialiser le rapport avec une maraude
        this.$store.commit('rapport/initialiserRapport', this.maraude);

        //redirection vers une autre page pour compléter le rapport ligne par ligne
        //au cours de la maraude
        alert("Veuillez maintenant completer le rapport sur la prochaine page pendant votre maraude");
        this.$router.push("/maraudes/rapport");
      } catch (error) {
        alert(error)
      }
    }
  }
}
</script>