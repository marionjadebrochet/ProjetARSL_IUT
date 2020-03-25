<template>
  <div>
    <h1>Commencer une maraude</h1>

    <form @submit.stop.prevent="ajouterUneMaraude">
      <fieldset>
        <div class="row">
          <label for="nom">Nom de la maraude</label>
          <input type="text" v-model="nom" required>
        </div>

        <div class="row">
          <label for="lieuDepart">Lieu de départ : </label>
          <select v-model="lieuDepart" required>
            <option v-for="lieu in listeLieus" :key="lieu.id" :value="lieu">{{lieu.libelle}}</option>
          </select>
        </div>
        <div class="row">
          <label for="heureDepart">Heure de départ :</label>
          <input type="time" v-model="heureDepart" required>
        </div>


        <!-- a remettre si besoin
        <label for="heureArrive">Heure d'arrivée prévue : </label>
        <input type="text" v-model="heureArrive">
        -->

        <div class="row">
          <label for="lieuRdv">Point de rendez-vous : </label>
          <select v-model="lieuRdv" required>
            <option v-for="lieu in listeLieus" :key="lieu.id" :value="lieu">{{lieu.libelle}}</option>
          </select>
        </div>
        <div class="row">
          <label for="heureRdv">Heure au rendez-vous : </label>
          <input type="time" v-model="heureRdv" required>
        </div>


        <div class="row">
          <label for="lieuArrive">Lieu d'arrivé : </label>
          <select v-model="lieuArrive" required>
            <option v-for="lieu in listeLieus" :key="lieu.id" :value="lieu">{{lieu.libelle}}</option>
          </select>
        </div>

        <button class="orangeButton" type="submit">Commencer</button>
      </fieldset>

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
