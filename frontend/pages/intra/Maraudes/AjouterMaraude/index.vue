<template>
    <div>
      <h3>Commencer une maraude</h3>
      <div class="center">
          <form @submit.stop.prevent="ajouterMaraude">
            <fieldset>
              <div class="row">
                <label for="heureDepart">Début de la maraude :</label>
                <input type="text" v-model="heureDepart">
              </div>
              <div class="row">
                <label for="lieuDepart">Lieu de départ :</label>
                <input type="text" v-model="lieuDepart">
              </div>
              <div class="row">
                <label for="lieuArrive">Lieu d'arrivée :</label>
                <input type="text" v-model="lieuArrive">
              </div>
              <div class="center">
                <button class="plusinfo" type="submit">Commencer</button>
              </div>
            </fieldset>
          </form>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        ajouterMaraude() {

        }
    }
}
</script>
