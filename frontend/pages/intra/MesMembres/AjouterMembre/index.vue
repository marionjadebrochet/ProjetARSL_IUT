<template>
    <div>
        <h3>Ajouter un membre à votre association</h3>
          <form @submit.stop.prevent="ajouterMembre">
            <fieldset>
              <div class="row">
                <label>Nom :</label>
    						<input id="name" v-model="nom" type="text" size="30" placeholder="Tapez votre nom" required>
              </div>
              <div class="row">
                <label>Prénom :</label>
  					    <input id="name" v-model="prenom" type="text" size="30" placeholder="Tapez votre prenom" required>
              </div>
              <div class="row">
                <label>Pseudo :</label>
                <input id="name" v-model="pseudo" type="text" size="30" placeholder="Tapez votre pseudo" required>
              </div>
              <div class="row">
                <label>Votre mot de passe :</label>
                <input type="password"  v-model="motdepasse" id="pass" placeholder="Tapez votre mot de passe" required/>
              </div>
              <div class="row">
                <label>Email :</label>
  						  <input type="email" v-model="email" size="30" placeholder="Tapez votre email" required>
              </div>
              <div class="row">
                <label>Téléphone :</label>
  						  <input type="tel" v-model="telephone" placeholder="Tapez votre numéro de téléphone" required pattern = '[0-9]{10}'>
              </div>
              <div class="row">
                <label>Rôle au sein de l'association :</label>
                <select required v-model="role">
                  <option v-for="role in listeRole" :key="role.id" :value="role.id">{{role.nom}}</option>
                </select>
              </div>
              <div class="center">
                <button class="orangeButton" type="submit">Ajouter</button>
              </div>
            </fieldset>
          </form>
    </div>
</template>

<script>
  import strapi from "~/utils/Strapi";
  import roleQuery from '~/apollo/queries/role/roles';

  export default {
    data() {
      return {
        roles:[],
        association: Object,
        nom: '',
        prenom: '',
        password: '',
        username: '',
        email: '',
        telephone: '',
        role: Object,
        query: '',
        queryRole: '',
        loading: false
      };
    },

    apollo: {
      association: {
        prefetch: true,
        query: associationQuery,
        variables () {
          return { id: this.associationUser.id }
        }
      },
      roles: {
        prefetch: true,
        queryRole: roleQuery,
      }
    },
    computed: {
        listeRole() {
          return this.roles.filter(role => {
            return role.nom.toLowerCase().includes(this.query.toLowerCase());
          });
        }
      },

    methods: {
      async ajouterMembre() {
        this.loading = true;
        try {

          //on ajoute le service dans la db
          this.user = await strapi.createEntry("users", {
            association: this.association,
            nom: this.nom,
            prenom: this.prenom,
            password: this.motdepasse,
            username: this.pseudo,
            email: this.email,
            telephone: this.telephone,
            role: this.role
          });

          alert("L'utilisateur a bien été enregistré.");
          this.$router.push("/");
        } catch (err) {
          this.loading = false;
          this.$router.push("/");
          //alert(err);
        }
      }
    }
  };
</script>
