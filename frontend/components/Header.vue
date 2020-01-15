<template>
  <div>
    <header>
        <img class="logo" src="~/assets/image/logo.png">
        <router-link tag="a" to="/" exact>
        <h1>
          SIAO 115
          <br />Haute-Vienne
        </h1>
      </router-link>
      <div class="choixLangue">
          <div v-show="!username">
            <h2 style="padding-right:10px;">Langue</h2>
            <div id="google_translate_element"></div>
          </div>
          <div v-if="username" class="deco">
            <style>
            .choixLangue {
              justify-content:flex-end;
            }
            </style>
            <p>{{ username }}</p>
            <a class="connexion" href="/" @click="logout">Déconnexion</a>
          </div>
        <div v-else>
          <router-link class="connexion" tag="a" to="/connexion" exact>Connexion</router-link>
        </div>
      </div>
    </header>
    <div v-if="username">
      <nav>
        <ul id="menu-deroulant">
          <li class="deroulant">
            <router-link tag="a" to="/intra/MonAssociation" exact>Mon Association</router-link>
          </li>
          <li class="deroulant">
            <router-link tag="a" to="/intra/MesCentres" exact>Mes Centres</router-link>
            <ul class="sous">
              <li class="sousligne"><router-link tag="a" to="/intra/MesCentres/AjouterCentre" exact>Ajouter Centre</router-link></li>
              <li class="sousligne"><router-link tag="a" to="/intra/MesCentres/SupprimerCentre" exact>Supprimer Centre</router-link></li>
            </ul>
          </li>
          <li class="deroulant">
            <router-link tag="a" to="/intra/MesServices" exact>Mes Services</router-link>
            <ul class="sous">
              <li class="sousligne"><router-link tag="a" to="/intra/MesServices/AjouterService" exact>Ajouter Service</router-link></li>
              <li class="sousligne"><router-link tag="a" to="/intra/MesServices/SupprimerService" exact>Supprimer Service</router-link></li>
            </ul>
          </li>
          <li class="deroulant">
            <router-link tag="a" to="/maraudes" exact>Maraudes</router-link>
            <ul class="sous">
              <li class="sousligne"><router-link tag="a" to="/intra/Maraudes/AjouterMaraude" exact>Commencer une Maraude</router-link></li>
              <li class="sousligne"><router-link tag="a" to="/intra/Maraudes/SupprimerMaraude" exact>Supprimer une Maraude</router-link></li>
              <li class="sousligne"><router-link tag="a" to="/intra/Maraudes/Rapport" exact>Faire vos rapports</router-link></li>
            </ul>
          </li>
          <li class="deroulant">
            <router-link tag="a" to="/intra/MesMembres" exact>Mes membres</router-link>
            <ul class="sous">
              <li class="sousligne"><router-link tag="a" to="/intra/MesMembres/AjouterMembre" exact>Ajouter Membre</router-link></li>
              <li class="sousligne"><router-link tag="a" to="/intra/MesMembres/SupprimerMembre" exact>Supprimer Membre</router-link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <div v-else>
      <nav>
        <ul>
          <li>
            <router-link tag="a" to="/association" exact>Associations</router-link>
          </li>
          <li>
              <router-link tag="a" to="/maraudes" exact>Maraudes</router-link>
          </li>
        </ul>
      </nav>
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
