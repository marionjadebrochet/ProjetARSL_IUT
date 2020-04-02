<template>
  <div>
    <h1>Liste des rapports des différentes maraudes</h1>

    <form @submit.stop.prevent="selectionnerRapport" class="telechargement">
        <select v-model="maraude">
          <option v-for="maraude in filteredList" :key="maraude.id" :value="maraude">{{maraude.nom}}</option>
        </select>
        <button class="orangeButton" type="submit">Choisir</button>
    </form>

    <Rapport />
    <div class="center">
      <a download="rapport.csv" href="#" @click="telechargerRapport" class="orangeButton">Télécharger</a>
    </div>
  </div>
</template>

<script type="text/javascript">
import maraudesQuery from "~/apollo/queries/maraude/maraudes";
import Rapport from "~/components/Rapport.vue";
import XlsExport from '../../../node_modules/xlsexport/xls-export';

export default {
  data() {
    return {
      maraude: Object,
      maraudes: [],
      lignerapports: this.$store.getters["rapport/lignerapports"],
      query: "",
    };
  },

  components: {
    Rapport
  },

  apollo: {
    maraudes: {
      prefetch: true,
      query: maraudesQuery
    }
  },

  computed: {
    // Search system
    filteredList() {
      return this.maraudes.filter(maraude => {
        return maraude.nom.toLowerCase().includes(this.query.toLowerCase());
      });
    }
  },

  methods: {
    async selectionnerRapport() {
      try {
        if (this.maraude.lignerapports != null) {
          //on initialise le nouveau cookie et on reload la page
          this.$store.commit("rapport/initialiserRapport", this.maraude);
          window.location.reload(false);
        }
        else {
          alert("Vous devez d'abord selectionner un rapport");
        }

      } catch (error) {
        alert(error);
      }
    },

    async telechargerRapport() {
      try {
        //xlsexport module
        var xls = new XlsExport(this.lignerapports, "rapport.xls");
        xls.exportToXLS('rapport.xls');
      } catch (error) {
        alert(error);
      }

    }
  },

};
</script>
