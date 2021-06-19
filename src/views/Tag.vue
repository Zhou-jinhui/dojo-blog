<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="results" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import Spinner from '../components/Spinner.vue';
import getPosts from '../composables/getPosts';

import { useRoute } from 'vue-router';
import { computed } from 'vue';

export default {
  components: { PostList, Spinner },
  setup() {
    const route = useRoute();

    const { posts, error, load } = getPosts();
    load();

    const tag = route.params.tag;

    const results = computed(() => {
      return posts.value.filter((post) => post.tags.includes(tag));
    });

    return { results, error, posts };
  },
};
</script>

<style></style>
