<template>
  <div>
    <header>
        <router-link tag="a" to="/" exact><img class="logo" src="~/assets/image/logo.png"></router-link>
        <div v-show="!username">
          <div id="google_translate_element"></div>
        </div>
        <nav>
          <ul v-if="!username">
            <li>
              <router-link tag="a" to="/association" exact>Associations</router-link>
            </li>
            <li>
                <router-link tag="a" to="/maraudes" exact>Maraudes</router-link>
            </li>
            <li>
                <router-link tag="a" to="/services" exact>Services</router-link>
            </li>
          </ul>
          <div v-if="username" class="deco">
              <p>{{ username }}</p>
              <a class="orangeButton" href="/" @click="logout">Déconnexion</a>
          </div>
          <div v-else>
              <router-link class="orangeButton" tag="a" to="/connexion" exact>Connexion</router-link>
          </div>
        </nav>
    </header>
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
