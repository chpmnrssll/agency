<template>
  <div class="blog-content" v-html="content" />
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '',
    },
  },
};
</script>
