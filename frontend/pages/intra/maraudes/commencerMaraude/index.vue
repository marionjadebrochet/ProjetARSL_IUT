<template>
  <div>
    <h3>Commencer une maraude</h3>
    <div class="center">
      <form @submit.stop.prevent="ajouterMaraude">
        <fieldset>
          <div class="row">
            <label for="nom">Veuillez donner un nom à la maraude :</label>
            <input type="text" v-model="nom" />
          </div>
          <div class="row">
            <label for="heureDepart">Heure de départ de la maraude :</label>
            <input type="text" v-model="heureDepart" />
          </div>
          <div class="row">
            <label for="heureRdv">Heure du rendez-vous de la maraude :</label>
            <input type="text" v-model="heureRdv" />
          </div>
          <div class="row">
            <label for="lieuDepart">Lieu de Départ de la maraude :</label>
            <select name="lieuDepart" v-model="idLieuDepart">
              <option v-for="lieu in listeLieux" :key="lieu.id" :value="lieu.id">{{lieu.libelle}}</option>
            </select>
          </div>
          <div class="row">
            <label for="lieuRdv">Lieu de rendez-vous :</label>
            <select name="lieuRdv" v-model="idLieuRdv">
              <option v-for="lieu in listeLieux" :key="lieu.id" :value="lieu.id">{{lieu.libelle}}</option>
            </select>
          </div>
          <div class="row">
            <label for="lieuArrive">Lieu d'arrivée :</label>
            <select name="lieuDepart" v-model="idLieuArrive">
              <option v-for="lieu in listeLieux" :key="lieu.id" :value="lieu.id">{{lieu.libelle}}</option>
            </select>
          </div>
          <div class="center">
            <button class="orangeButton" :disabled="loading" type="submit">Commencer</button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import lieuxQuery from "~/apollo/queries/lieu/lieus";
import lieuQuery from "~/apollo/queries/lieu/lieu";
import strapi from "~/utils/Strapi";

export default {
  data() {
    return {
      lieus: [],
      queryLieus: "",
      queryLieu: "",
      loading: false,
      nom: "",
      heureDepart: "",
      heureRdv: "",
      idLieuDepart: '',
      idLieuRdv: '',
      idLieuArrive: '',
      lieuDepart: Object,
      lieuRdv: Object,
      lieuArrive: Object,
      dateDepart: null
    };
  },

  apollo: {
    lieus: {
      prefetch: true,
      queryLieus: lieuxQuery
    },

    lieuDepart: {
      prefetch: true,
      queryLieu: lieuQuery,
      variables() {
        return { id: this.idLieuDepart }
      }
    },

    lieuArrive: {
      prefetch: true,
      queryLieu: lieuQuery,
      variables() {
        return { id: this.idLieuArrive }
      }
    },

    lieuRdv: {
      prefetch: true,
      queryLieu: lieuQuery,
      variables() {
        return { id: this.idLieuRdv }
      }
    }

  },

  computed: {
    //récupère les lieux pour qu'ils puissent être choisi pour la création de la maraude
    listeLieux() {
      return this.lieus.filter(lieu => {
        return lieu.libelle.toLowerCase().includes(this.query.toLowerCase());
      });
    },
  },

  methods: {
    //ajoute une maraude qui démarre immédiatement
    async ajouterMaraude() {
      this.loading = true;
      try {
        await strapi.createEntry("maraudes", {
          heureDepart: this.heureDepart,
          enPrevisions: false,
          dateDepart: new Date(),
          fini: false,
          nom: this.nom,
          heureRdv: this.heureRdv,
          lieuDepart: this.lieuDepart,
          lieuRdv: this.lieuRdv,
          lieuArrive: this.lieuArrive
        });
        alert(
          "Vous avez bien enregistré votre maraude, veuillez désormais compléter son rapport pendant votre maraude"
        );
        this.$router.push("/intra/Rapport/completerRapport");
      } catch (error) {
        alert(error);
      }
      this.loading = false;
    }
  }
};
</script>
