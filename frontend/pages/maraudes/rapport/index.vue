<template>
  <div>
    <h2>Séléctionner un ancien rapport :</h2>
    
    <form @submit.stop.prevent="selectionnerRapport" class="telechargement">
        <select v-model="maraude">
          <option v-for="maraude in filteredList" :key="maraude.id" :value="maraude">{{maraude.nom}}</option>
        </select>
        <button class="orangeButton" type="submit">Choisir</button>
    </form>

    <h2>Ajout d'une ligne de rapport :</h2>
    <form @submit.stop.prevent="ajouterLigneRapport">
      <fieldset class="rapportMaraude">
        <div class="row">
          <label for="pseudo">Nom ou pseudo :</label>
          <input type="text" v-model="pseudo">
        </div>

        <div class="row">
          <label for="lieuRencontre">Lieu de rencontre :</label>
          <input type="text" v-model="lieuRencontre">
        </div>
 
        <div class="row">
          <label for="situation">Situation familiale :</label>
          <select id="situation" v-model="situation" required>
            <option value="Homme isolé" selected>Homme isolé</option>
            <option value="Homme avec enfants(s)">Homme avec enfants(s</option>
            <option value="Femme isolée">Femme isolée</option>
            <option value="Femme avec enfant(s)">Femme avec enfant(s)</option>
            <option value="Couple seul">Couple seul</option>
            <option value="Couple avec enfant(s)">Couple avec enfant(s)</option>
            <option value="Mineur(e) isolé(e)">Mineur(e) isolé(e)</option>
          </select>
        </div>

        <div class="row">
          <label for="age">Age :</label>
          <input type="number" id="age" name="age" v-model="age" required />
        </div>

        <div class="row">
          <label for="nombreHomme">Nombre d'homme :</label>
          <input type="number" id="nombreHomme" v-model="nombreHomme" required />
        </div>

        <div class="row">
          <label for="nombreFemme">Nombre de femme :</label>
          <input type="number" id="nombreFemme" v-model="nombreFemme" required />
        </div>

        <div class="row">
          <label for="nombreEnfant">Nombre d'enfant :</label>
          <input type="number" id="nombreEnfant" v-model="nombreEnfant" required />
        </div>

        <div class="row">
          <label for="enceinte">Femme enceinte ?</label>
          <input type="checkbox" id="enceinte" v-model="enceinte" />
        </div>

        <div class="row">
          <label for="animaux">Présence d'animaux</label>
          <input type="checkbox" id="animaux" v-model="animaux" v-on:click="check('commentaire')" />
        </div>

        <div class="row display-none" id="commentaire">
          <label for="comAnimaux">Commentaires sur les animaux</label>
          <input type="text" id="comAnimaux" v-model="comAnimaux" />
        </div>

        <div class="row">
          <label for="pbSante">Problème de santé :</label>
          <input type="checkbox" id="pbSante" v-model="pbSante" v-on:click="check('probleme')" />
        </div>

        <div class="row display-none" id="probleme">
          <label for="secours">Intervention des secours :</label>
          <input type="checkbox" id="secours" v-model="secours" />
        </div>

        <div class="row">
          <label for="logementactuel">Logement actuel</label>
          <select id="logementactuel" v-model="logementactuel" required>
            <option value="rue" selected>Rue</option>
            <option value="squat">Squat</option>
            <option value="lieu de culte">Lieu de culte</option>
            <option value="tiers">Tiers</option>
            <option value="logement">Logement</option>
            <option value="voiture">Voiture</option>
            <option value="Structure d'hébergement">Structure d'hébergement</option>
          </select>
        </div>

        <div class="row">
          <label for="demandeHebergement">Veut-elle faire une demande d'hébergement ?</label>
          <input
            type="checkbox"
            id="demandeHebergement"
            v-model="demandeHebergement"
            v-on:click="check('115')"
          />
        </div>

        <div class="row display-none" id="115">
          <label for="appel">115 appelé ?</label>
          <input type="checkbox" id="appel" v-model="appel" />
        </div>

        <input type="submit" value="Ajouter" class="orangeButton" />
      </fieldset>
    </form>

    <div style="margin: 100px 0px;">
      <Rapport />
      <div class="center">
        <button @click="ajouterRapport" class="orangeButton">Terminer la maraude</button>
      </div>
    </div>
  </div>
</template>

<script>
import maraudesQuery from "~/apollo/queries/maraude/maraudes";
import strapi from "~/utils/Strapi";
import Rapport from "~/components/Rapport.vue";

export default {
  data() {
    return {
      lignerapport: Object,
      enceinte: false,
      enceinteTexte: "Non",
      pbSante: false,
      pbSanteTexte: "Non",
      demandeHebergement: false,
      demandeHebergementTexte: "Non",
      secours: false,
      secoursTexte: "Non",
      appel: false,
      appelTexte: "Non",
      animaux: false,
      animauxTexte: "Non",
      lignerapports: this.$store.getters["rapport/lignerapports"],
      idMaraude: this.$store.getters["rapport/idMaraude"],
      maraude: Object,
      maraudes: [],
      query: '',
      pseudo: '',
      lieuRencontre: ''
    };
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

  components: {
    Rapport
  },

  methods: {
    async selectionnerRapport() {
      try {
        if (this.maraude.lignerapports != null) {
          //on initialise le nouveau cookie et on reload la page
          this.$store.commit("rapport/setRapport", this.maraude.lignerapports);
          window.location.reload(false);
        }
        else {
          alert("Vous devez d'abord selectionner un rapport");
        }

      } catch (error) {
        alert(error);
      }
    },

    check: function(id) {
      var element = document.getElementById(id);
      element.style.display = "flex";
    },

    async ajouterRapport() {
      console.log(this.lignerapports);
      try {
        //on ajoute le rapport a la maraude
        await strapi.updateEntry("maraudes", this.idMaraude, {
          lignerapportsInfos: this.lignerapports
        });
        //et l'on remet a zero les cookies
        this.$store.commit("rapport/resetRapport");
        this.$store.commit("rapport/resetMaraude");

        //on redirige vers la page d'accueil
        alert("Rapport de maraude enregistré et maraude terminé");
        this.$router.push("/");
      } catch (error) {
        alert(error);
      }
    },

    async ajouterLigneRapport() {
      try {
        //gestion des booleens
        if (this.animaux == true) {
          this.animauxTexte = "Oui";
        }
        if (this.enceinte == true) {
          this.enceinteTexte = "Oui";
        }
        if (this.pbSante == true) {
          this.pbSanteTexte = "Oui";
        }
        if (this.demandeHebergement == true) {
          this.demandeHebergementTexte = "Oui";
        }
        if (this.secours == true) {
          this.secoursTexte = "Oui";
        }
        if (this.appel == true) {
          this.appelTexte = "Oui";
        }

        this.lignerapport = await strapi.createEntry("lignerapports", {
          situation: this.situation,
          age: this.age,
          nombreHomme: this.nombreHomme,
          nombreFemme: this.nombreFemme,
          nombreEnfant: this.nombreEnfant,
          comAnimaux: this.comAnimaux,
          enceinte: this.enceinteTexte,
          pbSante: this.pbSanteTexte,
          secours: this.secoursTexte,
          demandeHebergement: this.demandeHebergementTexte,
          logementactuel: this.logementactuel,
          appel: this.appelTexte,
          animaux: this.animauxTexte,
          pseudo: this.pseudo,
          lieuRencontre: this.lieuRencontre
        });

        //ajout de la ligne ajouté dans notre cookie, pour pouvoir l'afficher ensuite dans le tableau
        console.log(this.lignerapport);
        this.$store.commit("rapport/ajouterLigne", this.lignerapport);

        //on refresh la page
        this.$router.push("/maraudes/rapport");
        location.reload();
      } catch (error) {
        alert(error);
      }
    }
  }
};
</script>
