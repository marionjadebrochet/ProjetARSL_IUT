<template>
  <div>
    <h1>Rapport actuel</h1>
    <div class="overflow-scroll">
      <table>
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
          <td v-if="lignerapport.animaux">Oui</td>
          <td v-else>Non</td>
          <td>{{lignerapport.comAnimaux}}</td>

          <td v-if="lignerapport.enceinte">Oui</td>
          <td v-else>Non</td>

          <td v-if="lignerapport.pbSante">Oui</td>
          <td v-else>Non</td>

          <td v-if="lignerapport.secours">Oui</td>
          <td v-else>Non</td>

          <td v-if="lignerapport.demandeHebergement">Oui</td>
          <td v-else>Non</td>

          <td v-if="lignerapport.appel">Oui</td>
          <td v-else>Non</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="center">
      <button @click="ajouterRapport" class="orangeButton">Terminer la maraude</button>
    </div>
  </div>
</template>

<script>
  import strapi from '~/utils/Strapi'

  export default {
    data() {
      return {
        lignerapports: this.$store.getters["rapport/lignerapports"],
        idMaraude: this.$store.getters["rapport/idMaraude"]
      }
    },
    methods: {
      async ajouterRapport() {
        console.log(this.lignerapports);
        try {
          //on ajoute le rapport a la maraude
          await strapi.updateEntry('maraudes', this.idMaraude, {
            lignerapportsInfos: this.lignerapports
          });
          //et l'on remet a zero les cookies
          this.$store.commit('rapport/resetRapport');
          this.$store.commit('rapport/resetMaraude');
          alert('Rapport de maraude enregistré et maraude terminé')
          this.$router.push('/');
        } catch (error) {
          alert(error)
        }
      }
    },
  }
</script>
