<template>
  <div>
    <div class="justify-center" style="margin-bottom: 50px;">
      <img class="rond" src="~/assets/image/iconsIntra/alarme.svg" style="margin-right: 20px; " />
      <h3>Déclencher/Désactiver une alerte</h3>
    </div>
    <div class="mesAlertes text-center">
      <button class="orangeButton" @click="changerEtatCanicule">Alerte Canicule</button>
      <button class="orangeButton" @click="changerEtatGrandFroid">Alerte Grand Froid</button>
      <button class="orangeButton" @click="changerEtatEpidemie">Alerte Epidémie</button>
    </div>
  </div>
</template>

<script>
import strapi from "~/utils/Strapi";
import alertesQuery from "~/apollo/queries/alerte/alertes";

export default {
  data() {
    return {
      alerteglobales: [],
      query: "",
      etatAlerteGrandFroid: false,
      etatAlerteCanicule: false,
      etatAlerteEpidemie: false
    };
  },

  apollo: {
    alerteglobales: {
      prefetch: true,
      query: alertesQuery
    }
  },

  computed: {
    // Search system
    filteredList() {
      return this.alerteglobales.filter(alerte => {
        return alerte.nom.toLowerCase().includes(this.query.toLowerCase());
      });
    }
  },

  methods: {
    
    async changerEtatGrandFroid() {
      try {
        //etablissement de l'etat
        this.etatActuel();

        await strapi.updateEntry("alerteglobales", 1, {
          actif: !this.etatAlerteGrandFroid
        });
        //selon le changement que l'on vient de faire, on prévient l'utilisateur sur son action
        if (!this.etatAlerteGrandFroid) {
          alert("Vous venez d'activer l'alerte grand froid");
        } else {
          alert("Vous venez de désactiver l'alerte grand froid");
        }
        window.location.reload(false);
      } catch (error) {
        alert(error);
      }
    },
    
    async changerEtatCanicule() {
      try {
        //etablissement de l'etat
        this.etatActuel();

        await strapi.updateEntry("alerteglobales", 2, {
          actif: !this.etatAlerteCanicule
        });
        //selon le changement que l'on vient de faire, on prévient l'utilisateur sur son action
        if (!this.etatAlerteCanicule) {
          alert("Vous venez d'activer l'alerte canicule");
        } else {
          alert("Vous venez de désactiver l'alerte canicule");
        }
        window.location.reload(false);
      } catch (error) {
        alert(error);
      }
    },

    async changerEtatEpidemie() {
      try {
        //etablissement de l'etat
        this.etatActuel();

        await strapi.updateEntry("alerteglobales", 3, {
          actif: !this.etatAlerteEpidemie
        });
        //selon le changement que l'on vient de faire, on prévient l'utilisateur sur son action
        if (!this.etatAlerteEpidemie) {
          alert("Vous venez d'activer l'alerte epidemie");
        } else {
          alert("Vous venez de désactiver l'alerte epidemie");
        }
        window.location.reload(false);
      } catch (error) {
        alert(error);
      }
    },

    async etatActuel() {
      try {
        this.filteredList.forEach(alerte => {
          if (alerte.nom == "Alerte Grand Froid") {
            this.etatAlerteGrandFroid = alerte.actif;
          }
          if (alerte.nom == "Alerte Canicule") {
            this.etatAlerteCanicule = alerte.actif;
          }
          if (alerte.nom == "Alerte Épidémie") {
            this.etatAlerteEpidemie = alerte.actif;
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
img {
  width: 50px;
  height: 50px;
}
</style>
