<template>
    <div>
        <h1>Rapport actuel</h1>
        <table>
            <thead>
                <tr>
                    <th>Pseudo</th>
                    <th>Nom</th>
                    <th>Lieu de rencontre</th>
                    <th>Nombre de personne de sa famille</th>
                    <th>Nombre d'animaux</th>
                    <th>Type d'animaux</th>
                    <th>Nationalité</th>
                    <th>Enceinte</th>
                    <th>Eventuels problèmes de santé</th>
                    <th>Description du/des problème(s)</th>
                    <th>Demande d'hébergement</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="lignerapport in lignerapports" v-bind:key="lignerapport.id">
                    <td>{{lignerapport.pseudo}}</td>
                    <td>{{lignerapport.nom}}</td>
                    <td>{{lignerapport.lieuRencontre}}</td>
                    <td>{{lignerapport.nombrePersonneFamille}}</td>
                    <td>{{lignerapport.nombreAnimaux}}</td>
                    <td>{{lignerapport.typeAnimaux}}</td>
                    <td>{{lignerapport.nationalite}}</td>

                    <td v-if="lignerapport.enceinte">Oui</td>
                    <td v-else>Non</td>

                    <td v-if="lignerapport.problemeSante">Oui</td>
                    <td v-else>Non</td>

                    <td>{{lignerapport.descriptionProblemeSante}}</td>

                    <td v-if="lignerapport.demandeHebergement">Oui</td>
                    <td v-else>Non</td>
                </tr>
            </tbody>
        </table>

        <button @click="ajouterRapport" class="orangeButton">Terminer la maraude</button>
    </div>
</template>

<script>
import strapi from '~/utils/Strapi'

export default {
    data () {
        return {
            lignerapports: this.$store.getters["rapport/lignerapports"],
            idMaraude: this.$store.getters["rapport/idMaraude"]
        }
    },

    methods: {
        async ajouterRapport() {
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
