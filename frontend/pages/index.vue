<template>
  <body>
    <div class="page">
      <div v-if="!username">
        <h2>Signaler quelque chose ?</h2>
        <button class="plusinfo call"><a href="tel:+33115">115</a></button>
        <h3> Centres ouverts </h3>

        <div class="accueilDeJour">
          <div class="listeCentre">
            <div class="cadre" v-for="centre in filteredList" v-bind:key="centre.id">
                <div>
                  <h4>{{centre.association.nom}}</h4>
                  <h5>Adresse : </h5>
                  <p>{{centre.lieu.libelle}}</p>
                  <h5>Horaire d'ouverture : </h5>
                  <div v-if="getDay == 1">
                    <p>{{centre.jourshoraires.lundiMatin}} {{centre.jourshoraires.lundiApresMidi}}</p>
                  </div>
                  <div v-if="getDay == 2">
                    <p>{{centre.jourshoraires.mardiMatin}} {{centre.jourshoraires.mardinApresMidi}}</p>
                  </div>
                  <div v-if="getDay == 3">
                    <p>{{centre.jourshoraires.mercrediMatin}} {{centre.jourshoraires.mercrediApresMidi}}</p>
                  </div>
                  <div v-if="getDay == 4">
                    <p>{{centre.jourshoraires.jeudiMatin}} {{centre.jourshoraires.jeudiApresMidi}}</p>
                  </div>
                  <div v-if="getDay == 5">
                    <p>{{centre.jourshoraires.vendrediMatin}} {{centre.jourshoraires.vendrediApresMidi}}</p>
                  </div>
                  <div v-if="getDay == 6">
                    <p>{{centre.jourshoraires.samediMatin}} {{centre.jourshoraires.samediApresMidi}}</p>
                  </div>
                  <div v-if="getDay == 0">
                    <p>{{centre.jourshoraires.dimancheMatin}} {{centre.jourshoraires.dimancheApresMidi}}</p>
                  </div>
                </div>
                <div class="center">
                  <router-link class="bouton" :to="{ name: 'centre-id', params: { id: centre.id }}" tag="a" > Plus d'informations </router-link>
                </div>
            </div>
          </div>

          <div class="map">
              <h4> Les Centres </h4>
              <div id="map-wrap" style="height: 600px; ">
                 <l-map :zoom=12 :center="[45.835425,1.2644847]">
                   <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"> </l-tile-layer>
                      <div class="marker" v-for="centre in filteredList" v-bind:key="centre.id">
                         <l-marker :lat-lng="[centre.lieu.latitude, centre.lieu.longitude]" >
                           <l-popup :content="centre.association.nom + ' | ' + centre.lieu.adresse"/> </l-marker>
                      </div>
                 </l-map>
              </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h2>Bienvenue sur la partie gestion de votre application</h2>
        <div class="row">
          <div class="gestion center">
            <div class="space-between align-center">
              <img class="rond" src="~/assets/image/iconsIntra/association.svg"></img>
              <h3> Association </h3>
            </div>
            <div>
              <router-link class="bouton" tag="a" to="/intra/MonAssociation" exact>Visualiser mon association</router-link>
            </div>
          </div>

          <div class="gestion center">
            <div class="space-between align-center">
              <img class="rond" src="~/assets/image/iconsIntra/partenaire.svg"></img>
              <h3> Partenaires </h3>
            </div>
            <div>
              <router-link class="bouton" tag="a" to="/intra/Partenaires" exact>Visualiser mes partenaires</router-link>
              <router-link class="bouton" tag="a" to="/intra/Partenaires/AjouterPartenaire" exact>Ajouter un partenaire</router-link>
              <router-link class="bouton" tag="a" to="/intra/Partenaires/SupprimerPartenaire" exact>Supprimer un partenaire</router-link>
            </div>
          </div>
        </div>

        <div class="row">
        <div class="gestion center">
          <div class="space-between align-center">
            <img class="rond" src="~/assets/image/iconsIntra/centres.svg"></img>
            <h3> Centres </h3>
          </div>
          <div>
            <router-link class="bouton" tag="a" to="/intra/MesCentres" exact>Visualiser mes centres</router-link>
            <router-link class="bouton" tag="a" to="/intra/MesCentres/AjouterCentre" exact>Ajouter un centre</router-link>
            <router-link class="bouton" tag="a" to="/intra/MesCentres/SupprimerCentre" exact>Supprimer un centre</router-link>
          </div>
        </div>

        <div class="gestion center">
          <div class="space-between align-center">
            <img class="rond" src="~/assets/image/iconsIntra/services.svg"></img>
            <h3> Services </h3>
          </div>
          <div>
            <router-link class="bouton" tag="a" to="/intra/MesServices" exact>Visualiser mes services</router-link>
            <router-link class="bouton" tag="a" to="/intra/MesServices/AjouterService" exact>Ajouter un service</router-link>
            <router-link class="bouton" tag="a" to="/intra/MesServices/SupprimerService" exact>Supprimer un service</router-link>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="gestion center">
          <div class="space-between align-center">
            <img class="rond" src="~/assets/image/iconsIntra/maraudes.svg"></img>
            <h3> Maraudes </h3>
          </div>
          <div>
            <router-link class="bouton" tag="a" to="/maraudes" exact>Visualiser les maraudes</router-link>
            <router-link class="bouton" tag="a" to="/intra/Maraudes/AjouterMaraude" exact>Ajouter une maraude</router-link>
            <router-link class="bouton" tag="a" to="/intra/Maraudes/SupprimerMaraude" exact>Supprimer une maraude</router-link>
          </div>
        </div>

        <div class="gestion center">
          <div class="space-between align-center">
            <img class="rond" src="~/assets/image/iconsIntra/membres.svg"></img>
            <h3> Membres </h3>
          </div>
          <div>
            <router-link class="bouton" tag="a" to="/intra/MesMembres" exact>Visualiser les membres de mon association</router-link>
            <router-link class="bouton" tag="a" to="/intra/MesMembres/AjouterMembre" exact>Ajouter un membre</router-link>
            <router-link class="bouton" tag="a" to="/intra/MesMembres/SupprimerMembre" exact>Supprimer un membre</router-link>
          </div>
        </div>
      </div>

      <div class="center">
        <div class="gestion center">
          <div class="space-between align-center">
            <img class="rond" src="~/assets/image/iconsIntra/alarme.svg"></img>
            <h3> Alertes </h3>
          </div>
          <div>
            <router-link class="bouton" tag="a" to="/intra/alerte" exact>Déclencher une alerte</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</template>

<script>
import { mapMutations } from 'vuex'
import centresQuery from '~/apollo/queries/centre/centres'

export default {
  data() {
    return {
      centres: [],
      query: "",
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
        return centre.id.toLowerCase().includes(this.query.toLowerCase())
      })
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
};
</script>

<style>

</style>
