<template>
    <div>
        <h3>Ajouter un membre à votre organisme</h3>
          <form @submit.stop.prevent="ajouterMembre">
            <fieldset>
              <div class="row">
                <label>Nom :</label>
    						<input  v-model="nom" type="text" size="30"  required>
              </div>
              <div class="row">
                <label>Prénom :</label>
  					    <input v-model="prenom" type="text" size="30" required>
              </div>
              <div class="row">
                <label>Pseudo :</label>
                <input v-model="pseudo" type="text" size="30" required>
              </div>
              <div class="row">
                <label>Votre mot de passe :</label>
                <input type="password"  v-model="motdepasse" id="pass" required/>
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
                <label>Rôle au sein de l'organisme :</label>
                <select required v-model="role">
                  <option v-for="role in roles" :key="role.id" :value="role.id" v-if="role.name != 'Admin' && role.name != 'admin structure' && role.name != 'adminDev' && role.name != 'Authenticated' && role.name != 'Public'" >{{role.name}}</option>
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
        role: '',
        query: '',
        loading: false
      };
    },
    apollo: {
      roles: {
        prefetch: true,
        query: roleQuery,
      }
    },
    computed: {
        associationUser() {
          return this.$store.getters["auth/association"];
        },
      },

    methods: {
      async ajouterMembre() {
        this.loading = true;
        try {
          console.log(this.role);
          this.user = await strapi.createEntry("users", {
            association: this.associationUser.id,
            Nom: this.nom,
            Prenom: this.prenom,
            password: this.motdepasse,
            username: this.pseudo,
            email: this.email,
            Telephone: this.telephone,
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
