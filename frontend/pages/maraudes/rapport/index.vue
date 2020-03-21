<template>
  <div>
    <h2>Ajout d'une ligne de rapport : </h2>
    <form @submit.stop.prevent="ajouterLigneRapport">
      <fieldset class="rapportMaraude">
        <div class="row">
          <label for="situation">Situation familiale : </label>
          <select name="situation" id="situation" v-model="situation" required>
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
          <label for="age">Age : </label>
          <input type="number" id="age" name="age" v-model="age" required>
        </div>

        <div class="row">
          <label for="nombreHomme ">Nombre d'homme : </label>
          <input type="number" id="nombreHomme " name="nombreHomme"  v-model="nombreHomme" required>
        </div>

        <div class="row">
          <label for="nombreFemme">Nombre de femme : </label>
          <input type="number" id="nombreFemme" name="nombreFemme" v-model="nombreFemme" required>
        </div>

        <div class="row">
          <label for="nombreEnfant">Nombre d'enfant : </label>
          <input type="number" id="nombreEnfant" name="nombreEnfant" v-model="nombreEnfant" required>
        </div>

        <div class="row">
          <label for="enceinte">Femme enceinte ?</label>
          <input type="checkbox" id="enceinte" name="enceinte" v-model="enceinte">
        </div>

        <div class="row">
          <label for="animaux">Présence d'animaux</label>
          <input type="checkbox" id="animaux" name="animaux" v-model="animaux">
        </div>

        <div class="row">
          <label for="comAnimaux">Commentaires sur les animaux </label>
          <input type="text" id="comAnimaux" name="comAnimaux" v-model="comAnimaux">
        </div>

        <div class="row">
          <label for="pbSante">Problème de santé : </label>
          <input type="checkbox" name="pbSante" id="pbSante" v-model="pbSante">
        </div>

        <div class="row">
          <label for="secours">Intervention des secours : </label>
          <input type="checkbox" name="secours" id="secours" v-model="secours">
        </div>

        <div class="row">
          <label for="logementactuel">Logement actuel</label>
          <select name="logementactuel" id="logementactuel" v-model="logementactuel" required>
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
          <label for="demandeHebergement">Veut-elle faire une demande d'hébergement ? </label>
          <input type="checkbox" name="demandeHebergement" id="demandeHebergement" v-model="demandeHebergement">
        </div>

        <div class="row">
          <label for="appel">115 appelé ?</label>
          <input type="checkbox" name="appel" id="appel" v-model="appel">
        </div>

        <input type="submit" value="Ajouter" class="orangeButton">
      </fieldset>
    </form>

    <!--Clement je met le composant Rapport dans une div pour que tu puisse modifier plus facilement la page
    avec ton css-->
    <div style="margin: 100px 0px;">
      <Rapport/>
    </div>

  </div>

</template>

<script>
  import strapi from '~/utils/Strapi'
  import Rapport from "~/components/Rapport.vue"

  export default {
    data() {
      return {
        lignerapport: Object,
        enceinte: false,
        pbSante: false,
        demandeHebergement: false,
        secours: false,
        appel:false,
        animaux:false,
        nombreHomme: '',
        nombreFemme: '',
        nombreEnfant:'',
        age:'',
        comAnimaux: '',
        logementactuel: '',
        situation: '',
      }
    },

    components: {
      Rapport
    },

    methods: {
      async ajouterLigneRapport() {
        try {
          this.lignerapport = await strapi.createEntry("lignerapports", {
            situation: this.situation,
            age: this.age,
            nombreHomme: this.nombreHomme,
            nombreFemme: this.nombreFemme,
            nombreEnfant: this.nombreEnfant,
            animaux: this.animaux,
            comAnimaux: this.comAnimaux,
            enceinte: this.enceinte,
            pbSante: this.pbSante,
            secours: this.secours,
            demandeHebergement: this.demandeHebergement,
            logementactuel: this.logementactuel,
            appel: this.appel
          });
          console.log(this.lignerapport);
          this.$store.commit('rapport/ajouterLigne', this.lignerapport);
          this.$router.push('/maraudes/rapport');
        } catch (error) {
          alert(error)
        }
      }
    }
  }
</script>
