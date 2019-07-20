<template>
  <Layout>
    <FullScreenHero>
      <template v-slot:background>
        <g-image
          immediate
          :overlay="true"
          :src="$page.post.image"
          :alt="$page.post.image"
          v-if="$page.post.image"
        />
        <g-image src="~/assets/images/hero-bg.png" alt="" immediate v-else />
      </template>
      <template v-slot:body>
        <h1 v-html="$page.post.title" class="mb-4" />
      </template>
    </FullScreenHero>

    <b-container class="pb-5">
      <b-row>
        <b-col>
          <b-row>
            <span class="author-name" v-text="$page.post.author" />
          </b-row>
          <b-row>
            <span v-text="new Date($page.post.date).toLocaleDateString()" />
          </b-row>
          <b-row>
            <span>{{ $page.post.timeToRead }} min read</span>
          </b-row>
        </b-col>
      </b-row>
      <BlogContent class="mt-5" :content="$page.post.content" />
    </b-container>
  </Layout>
</template>

<page-query>
query BlogPost($path: String!) {
  post: blogPost(path: $path) {
    title
    author
    date
    timeToRead
    content
    image
  }
}
</page-query>

<script>
import BlogContent from '../components/BlogContent.vue';
import FullScreenHero from '../components/FullScreenHero.vue';

export default {
  components: {
    BlogContent,
    FullScreenHero,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style lang="scss" scoped>
.blogImage {
  max-height: 400px;
  width: 100%;
}
</style>
