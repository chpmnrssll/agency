<template>
  <Layout>
    <FullScreenHero>
      <template v-slot:background>
        <g-image src="~/assets/images/hero-bg.png" alt="" immediate />
      </template>
      <template v-slot:body>
        <g-image class="404-image" src="~/assets/images/404.svg" alt="404-image" />
        <h1 class="m-4">Sorry, we can't find that.</h1>
      </template>
    </FullScreenHero>
  </Layout>
</template>

<script>
import FullScreenHero from '../components/FullScreenHero.vue';

export default {
  components: {
    FullScreenHero,
  },
  metaInfo: {
    title: '404',
  },
};
</script>

<style lang="scss" scoped>
.404-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
}
img {
  width: 80%;
  margin: auto;

  @media (max-width: 500px) {
    width: 90%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
}
</style>
