<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleClick" class="delete">delete post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from '../composables/getPost';
import Spinner from '../components/Spinner.vue';
import { useRoute, useRouter } from 'vue-router';
import { projectFirestore } from '../firebase/config';

export default {
  components: { Spinner },
  props: ['id'],
  setup(props) {
    const route = useRoute();
    const router = useRouter();

    const { post, error, load } = getPost(route.params.id); // Instead of getting id from props, we can get from route object.
    load();

    const handleClick = async () => {
      await projectFirestore
        .collection('posts')
        .doc(props.id)
        .delete();

      router.push({ name: 'Home' });
    };

    return { post, error, handleClick };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
button.delete {
  margin: 10px auto;
  border-radius: 10px;
  cursor: pointer;
}
button.delete:active {
  transform: translateY(1px);
}

button.delete:hover {
  background-color: #ffaa22;
}
</style>
