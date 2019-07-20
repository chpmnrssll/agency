<template>
  <Layout>
    <FullScreenHero>
      <template v-slot:background>
        <g-image src="../assets/images/hero-bg.png" alt="" immediate />
      </template>
      <template v-slot:body>
        <h1>Blog</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention
          to featured content or information.
        </p>
        <b-button @click="openCalendlyWidget" pill variant="primary">Schedule Meeting</b-button>
      </template>
    </FullScreenHero>

    <b-container>
      <g-link
        :to="item.node.path"
        v-for="item in $page.posts.edges"
        :key="item.node.id"
        class="blog-post"
      >
        <div class="media my-5">
          <g-image
            immediate
            :src="item.node.image"
            v-if="item.node.image"
            class="mr-3"
            alt="image"
          />
          <div class="media-body">
            <h5 class="mt-0">{{ item.node.title }}</h5>
            <p class="text-dark">{{ item.node.excerpt }}</p>
          </div>
        </div>
      </g-link>
    </b-container>
  </Layout>
</template>

<page-query>
query Blog {
  posts: allBlogPost(sortBy: "date") {
    edges {
      node {
        id
        path
        title
        excerpt
        image
      }
    }
  }
}
</page-query>

<script>
import FullScreenHero from '../components/FullScreenHero.vue';

export default {
  components: {
    FullScreenHero,
  },
  metaInfo: {
    title: 'Blog',
  },
  methods: {
    openCalendlyWidget() {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/chpmnrssll' });
    },
  },
};
</script>

<style lang="scss" scoped>
.media {
  img {
    width: 120px;
    height: 120px;
  }
}

.media-body {
  margin: auto;
}
</style>
