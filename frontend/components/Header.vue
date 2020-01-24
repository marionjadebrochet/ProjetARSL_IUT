<template>
  <div>
    <header>
        <router-link tag="a" to="/" exact><img class="logo" src="~/assets/image/logo.png"></router-link>
        <router-link tag="a" to="/" exact><h1>SIAO 115 Haute-Vienne</h1></router-link>
        <nav>
          <label>
            <input type="checkbox" id="check">
            <span class="menu">
              <span class="hamburger"></span>
            </span>
            <ul>
              <li v-if="!username">Langue</li>
              <li><div v-if="!username" id="google_translate_element"></div></li>
              <li v-on:click="uncheck"><router-link tag="a" to="/" exact>Accueil</router-link></li>
              <li v-if="!username" v-on:click="uncheck"><router-link tag="a" to="/association" exact>Associations</router-link></li>
              <li v-if="!username" v-on:click="uncheck"><router-link tag="a" to="/maraudes" exact>Maraudes</router-link></li>
              <li v-if="!username" v-on:click="uncheck"><router-link tag="a" to="/services" exact>Services</router-link></li>
              <div v-if="username" class="deco">
                  <p>{{ username }}</p>
                  <a v-on:click="uncheck" class="orangeButton" href="/" @click="logout">Déconnexion</a>
              </div>
              <div v-else>
                  <a v-on:click="uncheck" class="orangeButton" href="/connexion" exact>Connexion</a>
              </div>
            </ul>
          </label>
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
        { pageLanguage: "fr", includedLanguages: "fr,en,ru,ar",layout: google.translate.TranslateElement.InlineLayout.SIMPLE},
        id
      );
    },
    uncheck: function() {
        var item = document.getElementById('check');
        item.checked = false;
    },

    // Define your needed mutations, here: auth/logout
    ...mapMutations({
      logout: "auth/logout"
    })
  }
};
</script>

<style>
label .menu {
  position: absolute;
  right:-100px;
  top:-100px;
  z-index: 100;
  width: 200px;
  height: 200px;
  background-color: #E95133;
  border-radius: 50%;
  box-shadow: 0 0 0 0 white, 0 0 0 0 white;
  cursor:pointer;
  transition: 0.5s ease-in-out;
}

label .hamburger {
  position: absolute;
  left: 50px;
  top:135px;
  width:30px;
  height: 2px;
  background-color: white;
  display: block;
  transform-origin: center;
  transition:0.5s;
}

label .hamburger:after, label .hamburger:before {
  content:"";
  position: absolute;
  display: block;
  width: 100%;
  height: 100% ;
  background-color:white;
}

label .hamburger:before {
  top: -10px;
}
label .hamburger:after {
  bottom: -10px;
}
label input {
  display: none;
}

label input:checked + .menu {
  box-shadow: 0 0 0 120vw white, 0 0 0 100vh white;
  border-radius: 30px;
}
label input:checked + .menu .hamburger {
  transform:rotate(45deg);
}

label input:checked + .menu .hamburger:after {
  transform:rotate(90deg);
  bottom:0;
}

label input:checked + .menu .hamburger:before {
  transform:rotate(90deg);
  top:0;
}

label input:checked + .menu + ul {
  visibility:visible;
  opacity:1;
}

label ul {
  text-align:center;
  visibility:hidden;
  opacity:0;
  z-index: 100;
  position: absolute;
  right:50%;
  transform: translate(50%, 20%);
  transition: 0.4s 0s ease-in-out;
}

label li {
  width:400px;
  margin-bottom:10px;
  font-size:18px;
  display: block;
  color:#000;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  padding:24px 48px;
  transition: 0.1s ease-in;
  letter-spacing:2px;
}
label li:hover {
  font-size:24px;
}
label .orangeButton {
  margin:auto;
}
li #google_translate_element {
  letter-spacing:0px;
}


</style>
