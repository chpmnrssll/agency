<template>
  <section>
    <b-jumbotron
      class="d-flex flex-column justify-content-center align-items-center text-center"
      :class="overlay ? 'gradient-overlay' : ''"
      container-fluid
      text-variant="light"
    >
      <div :class="overlay ? 'img-under' : ''">
        <slot name="background" />
      </div>
      <SequentialEntrance animation="entranceFromTop" :delay="50">
        <slot name="body" />
      </SequentialEntrance>
    </b-jumbotron>
  </section>
</template>

<script>
import SequentialEntrance from './SequentialEntrance.vue';

export default {
  components: {
    SequentialEntrance,
  },
  props: {
    overlay: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.g-image {
  left: 0;
  min-height: 100%;
  object-fit: cover;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
}
.img-under {
  z-index: -1;
}
.jumbotron {
  background-color: transparent;
  background-image: linear-gradient(225deg, var(--primaryBlue) 0%, var(--primaryGreen) 65%);
  border-radius: 0 !important;
  min-height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;
}
.gradient-overlay {
  background-image: linear-gradient(225deg, var(--primaryBlueA) 0%, var(--primaryGreenA) 65%);
}
</style>
