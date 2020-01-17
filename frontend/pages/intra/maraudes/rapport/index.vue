<template>
    <div>
        <h3>Maraudes dont le rapport n'est pas terminé</h3>
        <div class="center">
        <div v-for="maraude in this.maraudes" :key="maraude.id">
            <div style="margin-top:10px;" class="cart" v-show="!maraude.fini">
                <p>Date de départ : {{maraude.dateDepart}}</p>
                <p>Lieu de départ : {{maraude.lieuDepart.libelle}}</p>
                <p>Lieu d'arrivé : {{maraude.lieuArrive.libelle}}</p>
                <p>Heure de départ : {{maraude.heureDepart}}</p>
            </div>
        </div>
      </div>
        <h3>Maraudes terminées</h3>
        <div class="center">
          <div v-for="maraude in this.maraudes" :key="maraude.id">
              <div style="margin-top:10px;" class="cart" v-show="maraude.fini">
                <p>Date de départ : {{maraude.dateDepart}}</p>
                <p>Lieu de départ : {{maraude.lieuDepart.libelle}}</p>
                <p>Lieu d'arrivé : {{maraude.lieuArrive.libelle}}</p>
                <p>Heure de départ : {{maraude.heureDepart}}</p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>

export default {
    computed: {
    // Get your username thanks to your getter
    maraudes() {
      return this.$store.getters["auth/maraudes"];
    }
  },
}
</script>
