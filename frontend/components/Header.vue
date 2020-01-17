<template>
  <div>
    <header>
          <div class="space-between">
            <div class="choixLangue">
              <div v-show="!username">
                <h2 style="padding-right:10px;">Langue</h2>
                <div id="google_translate_element"></div>
              </div>
            </div>
            <div v-if="username" class="deco">
                <style>
                .choixLangue {
                  justify-content:flex-end;
                }
                </style>
                <p>{{ username }}</p>
                <a class="blackButton" href="/" @click="logout">Déconnexion</a>
            </div>
            <div v-else>
                <router-link class="blackButton" tag="a" to="/connexion" exact>Connexion</router-link>
            </div>
        </div>
        <div class="center">
          <div class="mid">
              <img style="width:30%;height:auto;" class="logo" src="~/assets/image/logo.png">
              <router-link tag="a" to="/" exact><h1>SIAO 115 <br> Haute-Vienne</h1></router-link>
          </div>
        </div>
    </header>
    <div v-if="!username">
      <nav>
        <ul>
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
