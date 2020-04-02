<template>
  <div>
    <h3>Ajouter un utilisateur</h3>
    <form @submit.stop.prevent="ajouterUser">
      <fieldset>

        <div class="row">
          <label for="nom">Nom :</label>
          <input type="text" v-model="nom" />
        </div>

        <div class="row">
          <label for="prenom">Prénom :</label>
          <input type="text" v-model="prenom" />
        </div>

        <div class="row">
          <label for="pseudo">Pseudo :</label>
          <input type="text" v-model="pseudo"/>
        </div>

        <div class="row">
          <label for="motdepasse">Mot de passe :</label>
          <input type="password" v-model="motdepasse" />
        </div>

        <div class="row">
          <label>Choississez l'organisme associé à l'utilisateur</label>
          <select required v-model="association">
            <option v-for="association in associations" :key="association.id" :value="association.id">{{association.nom}}</option>
          </select>
        </div>

        <div class="row">
          <label>Choississez le rôle de l'utilisateur</label>
          <select required v-model="role">
            <option v-for="role in roles" :key="role.id" :value="role.id">{{role.name}}</option>
          </select>
        </div>

        <div class="row">
          <label for="telephone">Téléphone :</label>
          <input type="text" v-model="telephone" />
        </div>

        <div class="row">
          <label for="email">Adresse mail :</label>
          <input type="text" v-model="email" />
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
import roleQuery from '~/apollo/queries/role/assoRoles';

export default {
  data() {
    return {
      associations: [],
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
    associations: {
      prefetch: true,
      query: roleQuery
    },
    roles: {
      prefetch: true,
      query: roleQuery
    }
  },

  methods: {
    async ajouterUser() {
      this.loading = true;
      try {

        //on ajoute le service dans la db
        this.user = await strapi.createEntry("users", {
          association: this.association,
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
