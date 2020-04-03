<template>
<body>
  <!--PARTIE PUBLIC QUAND NON CONNECTE-->
  <div v-if="!username">

    <div class="row" style="margin-bottom:50px;">
      <div class="explication">
        <h1>Service d’Intégrité d’Accueil et d’Orientation de la Haute-Vienne</h1>
        <section>
          Notre objectif ? Faciliter la prise en charge des personnes sans-abris ou des personnes qui sont menacées de l’être en améliorant
          l’offre et la demande des hébergements sur le territoire.
        </section>
        <section>
          <a class="orangeButton" href="tel:+33115">
            Appelez le
            <b>115</b>
          </a>
        </section>
      </div>
      <div>
        <img class="imgAccueil" src="~/assets/image/image-accueil.jpg" />
      </div>
    </div>
    <Alerte />
    <div class="accueilServices" style="margin-bottom:100px">
      <h2>Les services</h2>

      <div class="space-around">
        <router-link tag="a" to="/services/manger" exact>
          <img src="~/assets/icon/dining-room.png" alt="Logo manger" class="rond" />
        </router-link>
        <router-link tag="a" to="/services/laver" exact>
          <img src="~/assets/icon/douche.png" alt="Logo douche" class="rond" />
        </router-link>
        <router-link tag="a" to="/services/dormir" exact>
          <img src="~/assets/icon/dormir.png" alt="Logo dormir" class="rond" />
        </router-link>
        <router-link tag="a" to="/services/vestiaire" exact>
          <img src="~/assets/icon/vetements.png" alt="Logo vetements" class="rond" />
        </router-link>
      </div>
    </div>

    <div class="accueilDeJour">
      <h2>Les accueils de jour sur Limoges</h2>

      <div class="listeCentre space-around">
        <div class="centreAccueil" v-for="centre in filteredList" v-bind:key="centre">
          <div style="width:100%">
            <div>
              <h4>{{centre.association.nom}}</h4>
              <div class="center">
                <img
                  :src="'http://localhost:1337/' + centre.association.logo.url"
                  class="logoAssociation"
                  style="margin: 10px"
                />
              </div>
              <div class="trait"></div>
              <p>{{centre.lieu.adresse}}</p>
              <div v-if="getDay == 1">
                <p>Aujourd'hui : {{centre.jourshoraires.lundiMatin}} {{centre.jourshoraires.lundiApresMidi}}</p>
              </div>
              <div v-if="getDay == 2">
                <p>Aujourd'hui : {{centre.jourshoraires.mardiMatin}} {{centre.jourshoraires.mardinApresMidi}}</p>
              </div>
              <div v-if="getDay == 3">
                <p>Aujourd'hui : {{centre.jourshoraires.mercrediMatin}} {{centre.jourshoraires.mercrediApresMidi}}</p>
              </div>
              <div v-if="getDay == 4">
                <p>Aujourd'hui : {{centre.jourshoraires.jeudiMatin}} {{centre.jourshoraires.jeudiApresMidi}}</p>
              </div>
              <div v-if="getDay == 5">
                <p>Aujourd'hui : {{centre.jourshoraires.vendrediMatin}} {{centre.jourshoraires.vendrediApresMidi}}</p>
              </div>
              <div v-if="getDay == 6">
                <p>Aujourd'hui : {{centre.jourshoraires.samediMatin}} {{centre.jourshoraires.samediApresMidi}}</p>
              </div>
              <div v-if="getDay == 0">
                <p>Aujourd'hui : {{centre.jourshoraires.dimancheMatin}} {{centre.jourshoraires.dimancheApresMidi}}</p>
              </div>
              <p v-if="centre.association.nom=='Le Secours Catholique'">Lignes de bus : 20/21/D10</p>
              <p v-if="centre.association.nom=='La Croix Rouge'">Lignes de bus : 8</p>
              <p v-if="centre.association.nom=='Les Restos Du Coeur'">Lignes de bus : 2/20/21/D10</p>
              <p v-if="centre.association.nom=='Le Secours Populaire'">Lignes de bus : 20</p>
            </div>
            <div class="center">
              <router-link
                class="orangeBorderButton"
                :to="{ name: 'centre-id', params: { id: centre.id }}"
                tag="a"
              >Plus d'informations</router-link>
            </div>
          </div>
        </div>
      </div>
      <h2>Trouvez les accueils de jour près de vous</h2>
      <div class="map">
        <div id="map-wrap" style="height: 600px; ">
          <l-map :zoom="12" :center="[45.835425,1.2644847]">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <div class="marker" v-for="centre in filteredList" v-bind:key="centre.id">
              <l-marker :lat-lng="[centre.lieu.latitude, centre.lieu.longitude]">
                <l-popup :content="centre.association.nom + ' | ' + centre.lieu.adresse" />
              </l-marker>
            </div>
          </l-map>
        </div>
      </div>
    </div>
  </div>



  <!--PARTIE GESTION POUR LES UTILISATEURS-->
  <div v-else>
    <h2>Bienvenue sur la partie gestion de votre application</h2>
    <div class="listeAction">
      <div class="gestion">
        <div class="align-center">
          <img class="rond" src="~/assets/image/iconsIntra/association.svg" />
          <h3>Association</h3>
        </div>
        <div>
          <router-link
            class="orangeBorderButton"
            tag="a"
            to="/intra/MonAssociation"
            exact
          >Visualiser</router-link>
        </div>
      </div>

      <div class="gestion">
        <div class="align-center">
          <img class="rond" src="~/assets/image/iconsIntra/partenaire.svg" />
          <h3>Partenaires</h3>
        </div>
        <div>
          <router-link class="orangeBorderButton" tag="a" to="/intra/Partenaires" exact>Visualiser</router-link>
          <router-link
            class="orangeBorderButton"
            tag="a"
            to="/intra/Partenaires/AjouterPartenaire"
            exact
          >Ajouter</router-link>
          <router-link
            class="orangeBorderButton"
            tag="a"
            to="/intra/Partenaires/SupprimerPartenaire"
            exact
          >Supprimer</router-link>
        </div>
      </div>

      <div class="gestion">
        <div class="align-center">
          <img class="rond" src="~/assets/image/iconsIntra/centres.svg" />
          <h3>Centres</h3>
        </div>
        <div>
          <router-link class="orangeBorderButton" tag="a" to="/intra/MesCentres" exact>Visualiser</router-link>
          <router-link
            class="orangeBorderButton"
            tag="a"
            to="/intra/MesCentres/AjouterCentre"
            exact
          >Ajouter</router-link>
          <router-link
            class="orangeBorderButton"
            tag="a"
            to="/intra/MesCentres/SupprimerCentre"
            exact
          >Supprimer</router-link>
        </div>
      </div>

      <div class="gestion">
        <div class="align-center">
          <img class="rond" src="~/assets/image/iconsIntra/services.svg" />
          <h3>Services</h3>
        </div>
        <div>
          <router-link class="orangeBorderButton" tag="a" to="/intra/MesServices" exact>Visualiser</router-link>
          <router-link
            class="orangeBorderButton"
            tag="a"
            to="/intra/MesServices/AjouterService"
            exact
          >Ajouter</router-link>
          <router-link
            class="orangeBorderButton"
            tag="a"
            to="/intra/MesServices/SupprimerService"
            exact
          >Supprimer</router-link>
        </div>
      </div>

      <div class="gestion">
        <div class="align-center">
          <img class="rond" src="~/assets/image/iconsIntra/maraudes.svg" />
          <h3>Maraudes</h3>
        </div>
        <div>
          <router-link class="orangeBorderButton" tag="a" to="/maraudes" exact>Visualiser</router-link>
          <router-link
            class="orangeBorderButton"
            tag="a"
            to="/maraudes/commencerMaraude"
            exact
          >Commencer une maraude</router-link>
          <router-link
            class="orangeBorderButton"
            tag="a"
            to="/maraudes/supprimerMaraude"
            exact
          >Supprimer</router-link>
          <router-link
            class="orangeBorderButton"
            tag="a"
            to="/maraudes/telechargerRapport"
            exact
          >Telecharger Rapport</router-link>
        </div>
      </div>

      <div class="gestion">
        <div class="align-center">
          <img class="rond" src="~/assets/image/iconsIntra/membres.svg" />
          <h3>Membres</h3>
        </div>
        <div>
          <router-link class="orangeBorderButton" tag="a" to="/intra/MesMembres" exact>Visualiser</router-link>
          <router-link
            class="orangeBorderButton"
            tag="a"
            to="/intra/MesMembres/AjouterMembre"
            exact
          >Ajouter</router-link>
          <router-link
            class="orangeBorderButton"
            tag="a"
            to="/intra/MesMembres/SupprimerMembre"
            exact
          >Supprimer</router-link>
        </div>
      </div>

      <div class="gestion">
        <div class="align-center">
          <img class="rond" src="~/assets/image/iconsIntra/alarme.svg" />
          <h3>Alertes</h3>
        </div>
        <div>
          <router-link class="orangeBorderButton" tag="a" to="/intra/alerte" exact>Déclencher</router-link>
        </div>
      </div>
    </div>
  </div>
</body>
</template>

<script>
import { mapMutations } from "vuex";
import centresQuery from "~/apollo/queries/centre/centres";
import Alerte from "~/components/Alerte.vue";

export default {
  data() {
    return {
      centres: [],
      query: ""
    };
  },

  apollo: {
    centres: {
      prefetch: true,
      query: centresQuery
    }
  },

  computed: {
    // Search system
    filteredList() {
      return this.centres.filter(centre => {
        return centre.id.toLowerCase().includes(this.query.toLowerCase());
      });
    },
    getDay() {
      var day = new Date();
      return day.getDay();
    },
    // Set your username thanks to your getter
    username() {
      return this.$store.getters["auth/username"];
    }
  },

  components: {
    Alerte
  },
};
</script>
