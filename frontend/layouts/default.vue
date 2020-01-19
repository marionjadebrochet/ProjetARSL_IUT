<template>
  <div>
    <Header />
    <div class="page">
      <nuxt />
      <div v-if="!username">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>

import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  },
  computed: {
    // Set your username thanks to your getter
    username() {
      return this.$store.getters["auth/username"];
    }
  },
}

</script>
