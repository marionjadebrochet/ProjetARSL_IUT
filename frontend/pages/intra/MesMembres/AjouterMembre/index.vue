<template>
    <div>
        <h1>Ajouter un membre à votre association</h1>
        <form @submit.stop.prevent="ajouterMembre">
            <label>Nom :</label>
						<input id="name" name="name" type="text" size="30" placeholder="Tapez votre nom" required><br /><br />
            <label>Prénom :</label>
					  <input id="name" name="name" type="text" size="30" placeholder="Tapez votre prenom" required><br /><br />
            <label>Pseudo :</label>
            <input id="name" name="name" type="text" size="30" placeholder="Tapez votre pseudo" required><br /><br />
            <label>Votre mot de passe :</label>
            <input type="password" name="pass" id="pass" placeholder="Tapez votre mot de passe" required/><br /><br />
            <label>Email :</label>
						<input type="email" name="email" size="30" placeholder="Tapez votre email" required><br /><br />
            <label>Téléphone :</label>
						<input type="tel" name="numéro de telephone" placeholder="Tapez votre numéro de téléphone" required pattern = '[0-9]{10}'><br /><br />
            <label>Rôle au sein de l'association :</label>
            <input id="name" name="name" type="text" size="30" placeholder="Tapez votre rôle" required><br /><br />
          <button type="submit">Ajouter</button>
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
