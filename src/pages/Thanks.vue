<template>
  <Layout>
    <FullScreenHero>
      <template v-slot:background>
        <g-image src="~/assets/images/hero-bg.png" alt="" immediate />
      </template>
      <template v-slot:body>
        <h1 class="mb-4">Thank You</h1>
        <g-image class="mail-image" src="~/assets/images/mail-sent.svg" alt="mail-image" />
        <p class="mt-5 text-center">
          Thanks for contacting us! We will be in touch with you shortly.
        </p>
        <b-button @click="openCalendlyWidget" pill variant="primary">Schedule Meeting</b-button>
      </template>
    </FullScreenHero>

    <JoinTheClub />
  </Layout>
</template>

<script>
import FullScreenHero from '../components/FullScreenHero.vue';
import JoinTheClub from '../components/JoinTheClub.vue';

export default {
  components: {
    FullScreenHero,
    JoinTheClub,
  },
  metaInfo: {
    title: 'Thanks',
  },
  methods: {
    openCalendlyWidget() {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/chpmnrssll' });
    },
  },
};
</script>

<style lang="scss" scoped>
.mail-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
}
</style>
