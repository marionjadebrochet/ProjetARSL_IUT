<template>
  <div>
    <Header />

    <Nav />

    <nuxt />
  </div>
</template>

<script>
// Import Header component
import Header from '~/components/Header.vue'
export default {
  components: {
    Header
  }
}

</script>
