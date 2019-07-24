<template>
  <section class="d-flex flex-column justify-content-around">
    <div class="container-fluid text-center">
      <div class="container d-flex flex-column my-5 py-5">
        <h2 class="font-weight-bold m-4">GRAVIDA NIBH VEL 5</h2>
        <h1 class="font-weight-bold m-4">Bring your Business to Life Instantly</h1>
        <hr class="py-2" />
        <p class="m-4">
          Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor
          consequat ipsum nec sagittis vulputate cursus a sit amet mauris morbi accumsan ipsum
          velit.
        </p>
      </div>

      <div class="container-fluid my-5 py-5">
        <SequentialEntrance
          animation="entranceFromTop"
          class-name="row justify-content-around mb-4"
        >
          <div class="col-xs text-center">
            <g-image
              width="352"
              height="472"
              src="https://websitedemos.net/agency-04/wp-content/uploads/sites/68/2017/11/agency2-free-img.jpg"
              class="animation-hover-float"
              alt=""
            />
            <h3 class="my-4">Agency</h3>
          </div>
          <div class="col-xs text-center">
            <g-image
              width="352"
              height="472"
              src="https://websitedemos.net/agency-04/wp-content/uploads/sites/68/2017/10/make-up-artist-free-img.jpg"
              class="animation-hover-float"
              alt="Make-up artist screenshot"
            />
            <h3 class="my-4">Make-Up Artist</h3>
          </div>
          <div class="col-xs text-center">
            <g-image
              width="352"
              height="472"
              src="https://websitedemos.net/agency-04/wp-content/uploads/sites/68/2017/10/co-working-space-free-img.jpg"
              class="animation-hover-float"
              alt="Co-working space screenshot"
            />
            <h3 class="my-4">Co-Working Space</h3>
          </div>
        </SequentialEntrance>

        <SequentialEntrance animation="entranceFromTop" class-name="row justify-content-around">
          <div class="col-xs text-center">
            <g-image
              width="352"
              height="472"
              src="https://websitedemos.net/agency-04/wp-content/uploads/sites/68/2017/10/fitness-trainer-free-img.jpg"
              class="animation-hover-float"
              alt=""
            />
            <h3 class="my-4">Fitness Trainer</h3>
          </div>
          <div class="col-xs text-center">
            <g-image
              width="352"
              height="472"
              src="https://websitedemos.net/agency-04/wp-content/uploads/sites/68/2017/10/dj-free-img.jpg"
              class="animation-hover-float"
              alt="dj screenshot"
            />
            <h3 class="my-4">DJ</h3>
          </div>
          <div class="col-xs text-center">
            <g-image
              width="352"
              height="472"
              src="https://websitedemos.net/agency-04/wp-content/uploads/sites/68/2017/10/wedding-img-free-img.jpg"
              class="animation-hover-float"
              alt="Wedding screenshot"
            />
            <h3 class="my-4">Wedding</h3>
          </div>
        </SequentialEntrance>
      </div>
    </div>
  </section>
</template>

<script>
import SequentialEntrance from './SequentialEntrance.vue';

export default {
  components: {
    SequentialEntrance,
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
  color: var(--primaryGreen);
  font-size: 100%;
  text-transform: uppercase;
}
hr {
  border-top-color: var(--primaryGreen);
}
p {
  color: #8192aa;
}

.g-image {
  border-radius: 5px 5px 5px 5px;
  box-shadow: 0px 35px 73px -20px rgba(15, 78, 165, 0.24);
}
</style>
