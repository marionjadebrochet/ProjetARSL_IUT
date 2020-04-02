<template>
  <div>
    <h1>Rapport</h1>
    <div class="overflow-scroll" style="margin: 50px 0px;">
      <table id="datatable">
        <thead>
          <tr>
            <th>Situation</th>
            <th>Age</th>
            <th>Nombre d'homme</th>
            <th>Nombre de femme</th>
            <th>Nombre d'enfant</th>
            <th>Logement actuel</th>
            <th>Animaux ?</th>
            <th>Commentaires animaux</th>
            <th>Enceinte</th>
            <th>Problème de santé</th>
            <th>Secours contacté</th>
            <th>Demande d'hebergement</th>
            <th>115 appelé ?</th>
            <th>Supprimer/Modifier une ligne</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="lignerapport in lignerapports" v-bind:key="lignerapport.id">
            <td>{{lignerapport.situation}}</td>
            <td>{{lignerapport.age}}</td>
            <td>{{lignerapport.nombreHomme}}</td>
            <td>{{lignerapport.nombreFemme}}</td>
            <td>{{lignerapport.nombreEnfant}}</td>
            <td>{{lignerapport.logementactuel}}</td>
            <td v-if="lignerapport.animaux == 'Oui'">Oui</td>
            <td v-else>Non</td>
            <td>{{lignerapport.comAnimaux}}</td>

            <td v-if="lignerapport.enceinte == 'Oui'">Oui</td>
            <td v-else>Non</td>

            <td v-if="lignerapport.pbSante == 'Oui'">Oui</td>
            <td v-else>Non</td>

            <td v-if="lignerapport.secours == 'Oui'">Oui</td>
            <td v-else>Non</td>

            <td v-if="lignerapport.demandeHebergement == 'Oui'">Oui</td>
            <td v-else>Non</td>

            <td v-if="lignerapport.appel == 'Oui'">Oui</td>
            <td v-else>Non</td>

            <td>
              <button @click="supprimerLigne(lignerapport)">Supprimer</button>
              <button @click="modifierLigne(lignerapport)">Modifier</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import strapi from "~/utils/Strapi";

export default {
  data() {
    return {
      lignerapports: this.$store.getters["rapport/lignerapports"],
      idMaraude: this.$store.getters["rapport/idMaraude"]
    };
  },

  methods: {
    async supprimerLigne(lignerapport) {
      try {
        this.$store.commit("rapport/supprimerLigne", lignerapport);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
