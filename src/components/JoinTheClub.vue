<template>
  <section>
    <FullScreenHero>
      <template v-slot:background>
        <g-image src="~/assets/images/bg-4.png" alt="" />
      </template>
      <template v-slot:body>
        <h1 class="my-2">Are You Ready To Join The Club?</h1>
        <hr class="my-4" />
        <p class="mb-4">
          Get a free quote from one of our consultants to discuss which option would work best for
          your needs
        </p>
        <b-button @click="openCalendlyWidget" pill variant="primary">Schedule Meeting</b-button>
      </template>
    </FullScreenHero>
  </section>
</template>

<script>
import FullScreenHero from './FullScreenHero.vue';

export default {
  components: {
    FullScreenHero,
  },
  methods: {
    openCalendlyWidget() {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/chpmnrssll' });
    },
  },
};
</script>
