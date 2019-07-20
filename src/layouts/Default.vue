<template>
  <div class="layout">
    <NavBar />
    <slot />
    <Footer />
  </div>
</template>

<script>
import '../assets/styles/default.scss';
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style lang="scss">
body,
html {
  height: 100%;
}

body {
  font-family: 'Nunito', sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
