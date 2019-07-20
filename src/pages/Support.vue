<template>
  <Layout>
    <FullScreenHero>
      <template v-slot:background>
        <g-image src="~/assets/images/hero-bg.png" alt="" immediate />
      </template>
      <template v-slot:body>
        <h1>Support</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention
          to featured content or information.
        </p>
        <b-button @click="openCalendlyWidget" pill variant="primary">Schedule Meeting</b-button>
      </template>
    </FullScreenHero>

    <SupportFeatures />

    <FullScreenHero :overlay="true">
      <template v-slot:background>
        <g-image src="~/assets/images/bg-5.jpg" alt="" />
      </template>
      <template v-slot:body>
        <h2>It's Simple, Let's Start</h2>
        <h1>How to get started?</h1>
        <hr class="my-4" />
        <p>
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
          auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
          nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
        </p>
        <b-button @click="openCalendlyWidget" pill variant="primary">Schedule Meeting</b-button>
      </template>
    </FullScreenHero>

    <FAQ />
    <JoinTheClub />
  </Layout>
</template>

<script>
import FullScreenHero from '../components/FullScreenHero.vue';
import SupportFeatures from '../components/SupportFeatures.vue';
import FAQ from '../components/FAQ.vue';
import JoinTheClub from '../components/JoinTheClub.vue';

export default {
  components: {
    FullScreenHero,
    SupportFeatures,
    FAQ,
    JoinTheClub,
  },
  metaInfo: {
    title: 'About',
  },
  methods: {
    openCalendlyWidget() {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/chpmnrssll' });
    },
  },
};
</script>

<style lang="scss">
:root {
  --primaryBlue: #0f4ea5;
  --primaryBlueA: #0f4ea588;
  --primaryGreen: #0fa597;
  --primaryGreenA: #0fa59788;
}
section {
  transition: 0.25s filter ease-in-out;
}
</style>
