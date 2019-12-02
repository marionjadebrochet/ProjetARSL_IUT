<template>
  <div>
    <header>
      <router-link tag="a" to="/" exact><h1>SIAO 115 <br> Haute-Vienne</h1></router-link>
        <div class="choixLangue">
          <div>
            <label for="langue">Langue</label>
            <div id="google_translate_element"></div>
          </div>
        <button>Connexion</button>
        </div>
    </header>
    <nav>
      <ul>
        <li><router-link tag="a" to="/centre" exact>Accueil de jour</router-link></li>
        <li><router-link tag="a" to="/association" exact>Associations</router-link></li>
      </ul>
    </nav>
    <h2> Signaler quelque chose ?  </h2>
    <button class="call">  115  </button>
  </div>
</template>
<script>
export default {
    mounted: function()
    {
        this.$nextTick(() => {
            this.googleTranslateInit();
        });

    },

    methods: {

        googleTranslateInit: function() {

            let checkIfGoogleLoaded = setInterval(() => {

                if (google.translate.TranslateElement != null) {
                    clearInterval(checkIfGoogleLoaded);

                    this.googleTranslateElement('google_translate_element');
                }

            }, 100);

        },

        googleTranslateElement: function(id) {
            new google.translate.TranslateElement({pageLanguage: 'fr',includedLanguages: 'fr,en,ru,ar'}, id);
        }

    },
};
</script>

<style>

</style>
