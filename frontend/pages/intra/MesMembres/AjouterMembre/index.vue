<template>
    <div>
        <h3>Ajouter un membre à votre association</h3>
          <form @submit.stop.prevent="ajouterMembre">
            <fieldset>
              <div class="row">
                <label>Nom :</label>
    						<input id="name" name="name" type="text" size="30" placeholder="Tapez votre nom" required>
              </div>
              <div class="row">
                <label>Prénom :</label>
  					    <input id="name" name="name" type="text" size="30" placeholder="Tapez votre prenom" required>
              </div>
              <div class="row">
                <label>Pseudo :</label>
                <input id="name" name="name" type="text" size="30" placeholder="Tapez votre pseudo" required>
              </div>
              <div class="row">
                <label>Votre mot de passe :</label>
                <input type="password" name="pass" id="pass" placeholder="Tapez votre mot de passe" required/>
              </div>
              <div class="row">
                <label>Email :</label>
  						  <input type="email" name="email" size="30" placeholder="Tapez votre email" required>
              </div>
              <div class="row">
                <label>Téléphone :</label>
  						  <input type="tel" name="numéro de telephone" placeholder="Tapez votre numéro de téléphone" required pattern = '[0-9]{10}'>
              </div>
              <div class="row">
                <label>Rôle au sein de l'association :</label>
                <input id="name" name="name" type="text" size="30" placeholder="Tapez votre rôle" required>
              </div>
              <div class="center">
                <button class="bouton" type="submit">Ajouter</button>
              </div>
            </fieldset>
          </form>
    </div>
</template>

<script>
export default {
    methods: {
        ajouterMembre() {

        }
    }
}
</script>
