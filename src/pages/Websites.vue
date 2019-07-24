<template>
  <Layout>
    <FullScreenHero>
      <template v-slot:background>
        <g-image src="~/assets/images/hero-bg.png" alt="" immediate />
      </template>
      <template v-slot:body>
        <h1>Websites</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention
          to featured content or information.
        </p>
        <b-button @click="openCalendlyWidget" pill variant="primary">Schedule Meeting</b-button>
      </template>
    </FullScreenHero>

    <WebsitesLong />
    <JoinTheClub />
  </Layout>
</template>

<script>
import FullScreenHero from '../components/FullScreenHero.vue';
import WebsitesLong from '../components/WebsitesLong.vue';
import JoinTheClub from '../components/JoinTheClub.vue';

export default {
  components: {
    FullScreenHero,
    WebsitesLong,
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
