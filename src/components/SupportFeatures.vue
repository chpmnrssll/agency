<template>
  <section class="d-flex flex-column justify-content-around">
    <div class="container text-center">
      <h2 class="font-weight-bold mb-4">Features</h2>
      <h1 class="font-weight-bold mb-4">All the Support You'll Ever Need</h1>
      <hr class="my-4" />
      <SequentialEntrance animation="entranceFromTop" class-name="row py-4">
        <div class="col-sm text-center">
          <g-image class="pb-4" src="~/assets/images/tech-support-icon.png" alt="Tech Support" />
          <h3 class="pb-2">Tech Support</h3>
          <p>
            Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor
            consequat ipsum nec.
          </p>
        </div>
        <div class="col-sm text-center">
          <g-image class="pb-4" src="~/assets/images/community-icon.png" alt="Community" />
          <h3 class="pb-2">Community</h3>
          <p>
            Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor
            consequat ipsum nec.
          </p>
        </div>
        <div class="col-sm text-center">
          <g-image class="pb-4" src="~/assets/images/qa-call-icon.png" alt="Monthly Q&A Call" />
          <h3 class="pb-2">Monthly Q&A Call</h3>
          <p>
            Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor
            consequat ipsum nec.
          </p>
        </div>
      </SequentialEntrance>
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
  color: var(--primaryBlue);
}
hr {
  border-top-color: var(--primaryGreen);
}
p {
  color: #8192aa;
}
</style>
