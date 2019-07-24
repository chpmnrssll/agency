<template>
  <section class="d-flex flex-column justify-content-around">
    <div class="container text-center">
      <h2 class="font-weight-bold mb-4">{{ homeData.values.subHeader }}</h2>
      <h1 class="font-weight-bold mb-4">{{ homeData.values.header }}</h1>
      <hr class="my-4" />
      <SequentialEntrance animation="entranceFromTop" class-name="row py-4">
        <b-col class="text-center" v-for="value in homeData.values.list" :key="value.name">
          <!-- <g-image class="pb-4" :src="value.image" :alt="value.name" /> -->
          <h3 class="pb-2">{{ value.name }}</h3>
          <p>{{ value.text }}</p>
        </b-col>
        <!-- <div class="col-sm text-center">
          <g-image class="pb-4" src="~/assets/images/freedom-icon.png" alt="Freedom" />
          <h3 class="pb-2">Freedom</h3>
          <p>
            Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor
            consequat ipsum nec.
          </p>
        </div>
        <div class="col-sm text-center">
          <g-image class="pb-4" src="~/assets/images/you-own-it-icon.png" alt="Ownership" />
          <h3 class="pb-2">You Own It</h3>
          <p>
            Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor
            consequat ipsum nec.
          </p>
        </div>
        <div class="col-sm text-center">
          <g-image class="pb-4" src="~/assets/images/flexibility-icon.png" alt="Flexibility" />
          <h3 class="pb-2">Flexibility</h3>
          <p>
            Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor
            consequat ipsum nec.
          </p>
        </div> -->
      </SequentialEntrance>
    </div>
  </section>
</template>

<script>
import SequentialEntrance from './SequentialEntrance.vue';
import homeData from '../data/home.yml';

export default {
  components: {
    SequentialEntrance,
  },
  data() {
    return {
      homeData,
    };
  },
  computed: {
    images() {
      const images = [];
      Array.from(homeData.values.list).forEach(value => {
        images.push(import(value.image));
      });

      return images;
    },
  },
  mounted() {
    // console.log(this.images);
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: var(--primaryBlue);
}
h2 {
  color: var(--primaryGreen);
  font-size: 100%;
}
h3 {
  color: var(--primaryBlue);
}
hr {
  border-top-color: var(--primaryGreen);
}
p {
  color: #8192aa;
}
</style>
