<template>
  <BaseSpinner v-if="loading" />
  <about-movie v-else :data="data"></about-movie>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from 'vue-router'

import AboutMovie from "../components/AboutMovie.vue";
import BaseSpinner from "../components/BaseSpinner.vue";

const router = useRouter();
const data = reactive({});
const loading = ref(true);

const props = defineProps(['movieId']);

if (parseInt(props.movieId) > 0) {
  fetch(
    `https://api.themoviedb.org/3/movie/${props.movieId}?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`
  ).then((response) => {
    return response.json();
  })
    .then((datas) => {
      data.value = datas;
      loading.value = false;
    });
} else {
  router.push("/home");
}
</script>