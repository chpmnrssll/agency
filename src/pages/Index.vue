<template>
  <Layout>
    <FullScreenHero>
      <template v-slot:background>
        <g-image src="~/assets/images/hero-bg.png" alt="" immediate />
      </template>
      <template v-slot:body>
        <h1>{{ homeData.header }}</h1>
        <p>{{ homeData.subHeader }}</p>
        <b-button @click="openCalendlyWidget" pill variant="primary">
          {{ homeData.buttonText }}
        </b-button>
      </template>
    </FullScreenHero>

    <Values />

    <FullScreenHero :overlay="true">
      <template v-slot:background>
        <g-image src="~/assets/images/bg-2.jpg" alt="" />
      </template>
      <template v-slot:body>
        <h2 class="font-weight-bold m-4">gravida nibh vel 5</h2>
        <h1>Bring Your Business to Life Instantly</h1>
        <hr class="my-4" />
        <p>
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
          auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
          nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
        </p>
        <b-button @click="openCalendlyWidget" pill variant="primary">
          {{ homeData.buttonText }}
        </b-button>
      </template>
    </FullScreenHero>

    <WebsitesShort />

    <FullScreenHero :overlay="true">
      <template v-slot:background>
        <g-image src="~/assets/images/bg-3.jpg" alt="" />
      </template>
      <template v-slot:body>
        <h2 class="font-weight-bold m-4">Proin gravida nibh vel velit auctor aliquet</h2>
        <h1>Spend More Time Doing What You Love</h1>
        <hr class="my-4" />
        <p>
          Make changes to your site easier than ever before with the latest revolutionary drag and
          drop editing software used by over 275,000 other website owners. No coding, no confusion,
          no frustration, just easy! Add in a whole new pre-designed section with just one click.
          Build an entirely new page in three clicks. See it change before your eyes.
        </p>
        <b-button @click="openCalendlyWidget" pill variant="primary">
          {{ homeData.buttonText }}
        </b-button>
      </template>
    </FullScreenHero>

    <Features>
      <template v-slot:header>
        <h2 class="font-weight-bold m-4">Features</h2>
        <h1 class="font-weight-bold m-4">All You'll Ever Need is Right Here</h1>
        <hr class="py-2" />
      </template>
    </Features>

    <Testimonials />
    <JoinTheClub />
  </Layout>
</template>

<script>
import FullScreenHero from '../components/FullScreenHero.vue';
import Values from '../components/Values.vue';
import WebsitesShort from '../components/WebsitesShort.vue';
import Features from '../components/Features.vue';
import Testimonials from '../components/Testimonials.vue';
import JoinTheClub from '../components/JoinTheClub.vue';

import homeData from '../data/home.yml';

export default {
  components: {
    FullScreenHero,
    Values,
    WebsitesShort,
    Features,
    Testimonials,
    JoinTheClub,
  },
  metaInfo() {
    return {
      title: homeData.title,
      meta: [
        { itemprop: 'name', content: homeData.title },
        { property: 'og:title', content: homeData.title },
      ],
    };
  },
  data() {
    return {
      homeData,
    };
  },
  methods: {
    openCalendlyWidget() {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/chpmnrssll' });
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 100%;
}
</style>
