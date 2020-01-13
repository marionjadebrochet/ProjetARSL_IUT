<template>
  <div>
    <header>
      <div v-if="username">
        <router-link tag="a" to="/intra" exact>
        <h1>
          SIAO 115
          <br />Haute-Vienne
        </h1>
      </router-link>
      </div>
      <div v-else>
        <router-link tag="a" to="/" exact>
        <h1>
          SIAO 115
          <br />Haute-Vienne
        </h1>
      </router-link>
      </div>
      <div class="choixLangue">
        <div>
          <label for="langue">Langue</label>
          <div id="google_translate_element"></div>
        </div>
        <div v-if="username">
          <p>Vous êtes connecté en tant que {{ username }}</p>
          <a href="/" @click="logout">Déconnexion</a>
        </div>
        <div v-else>
          <router-link tag="a" to="/connexion" exact>Connexion</router-link>
        </div>
      </div>
    </header>
    <div v-if="username">
      <nav>
        <ul>
          <li class="deroulant">
            <router-link tag="a" to="/intra/MonAssociation" exact>Mon Association</router-link>
          </li>
          <li class="deroulant">
            <router-link tag="a" to="/intra/MesCentres" exact>Mes Centres</router-link>
            <ul class="sous">
              <li class="sousligne"><router-link tag="a" to="/intra/MesCentres/AjouterCentre" exact>Ajouter Centre</router-link></li>
              <li class="sousligne"><router-link tag="a" to="/intra/MesCentres/ModifierCentre" exact>Modifier Centre</router-link></li>
              <li class="sousligne"><router-link tag="a" to="/intra/MesCentres/SupprimerCentre" exact>Supprimer Centre</router-link></li>
            </ul>
          </li>
          <li class="deroulant">
            <router-link tag="a" to="/intra/MesServices" exact>Mes Services</router-link>
            <ul class="sous">
              <li class="sousligne"><router-link tag="a" to="/intra/MesCentres/AjouterService" exact>Ajouter Service</router-link></li>
              <li class="sousligne"><router-link tag="a" to="/intra/MesCentres/ModifierService" exact>Modifier Service</router-link></li>
              <li class="sousligne"><router-link tag="a" to="/intra/MesCentres/SupprimerService" exact>Supprimer Service</router-link></li>
            </ul>
          </li>
          <li class="deroulant">
            <router-link tag="a" to="/intra/Maraudes" exact>Maraudes</router-link>
            <ul class="sous">
              <li class="sousligne"><router-link tag="a" to="/intra/MesCentres/AjouterMaraude" exact>Ajouter Maraude</router-link></li>
              <li class="sousligne"><router-link tag="a" to="/intra/MesCentres/ModifierMaraude" exact>Modifier Maraude</router-link></li>
              <li class="sousligne"><router-link tag="a" to="/intra/MesCentres/SupprimerMaraude" exact>Supprimer Maraude</router-link></li>
              <li class="sousligne"><router-link tag="a" to="/intra/MesCentres/Rapport" exact>Rapport</router-link></li>
            </ul>
          </li>
          <li class="deroulant">
            <router-link tag="a" to="/intra/MesMembres" exact>Mes membres</router-link>
            <ul class="sous">
              <li class="sousligne"><router-link tag="a" to="/intra/MesCentres/AjouterMembre" exact>Ajouter Membre</router-link></li>
              <li class="sousligne"><router-link tag="a" to="/intra/MesCentres/ModifierMembre" exact>Modifier Membre</router-link></li>
              <li class="sousligne"><router-link tag="a" to="/intra/MesCentres/SupprimerMembre" exact>Supprimer Membre</router-link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <div v-else>
      <nav>
        <ul>
          <li>
            <router-link tag="a" to="/centre" exact>Accueil de jour</router-link>
          </li>
          <li>
            <router-link tag="a" to="/association" exact>Associations</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div v-if="username">
    </div>
    <div v-else>
      <h2>Signaler quelque chose ?</h2>
      <button class="call">115</button>
    </div>

  </div>
</template>


<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    // Set your username thanks to your getter
    username() {
      return this.$store.getters["auth/username"];
    }
  },

  mounted: function() {
    this.$nextTick(() => {
      this.googleTranslateInit();
    });
  },

  methods: {
    googleTranslateInit: function() {
      let checkIfGoogleLoaded = setInterval(() => {
        if (google.translate.TranslateElement != null) {
          clearInterval(checkIfGoogleLoaded);

          this.googleTranslateElement("google_translate_element");
        }
      }, 100);
    },

    googleTranslateElement: function(id) {
      new google.translate.TranslateElement(
        { pageLanguage: "fr", includedLanguages: "fr,en,ru,ar" },
        id
      );
    },

    // Define your needed mutations, here: auth/logout
    ...mapMutations({
      logout: "auth/logout"
    })
  }
};
</script>

<style>
</style>
