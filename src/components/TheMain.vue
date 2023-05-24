<template>
  <main>
    <movie-block v-for="i in data.length" :key="i - 1" :data="data[i - 1]"></movie-block>
  </main>
</template>

<script setup>
import { ref, watch } from "vue";
import MovieBlock from "./MovieBlock.vue";

const props = defineProps(["sect", "genre"]);

const data = ref([])
const page = ref(1)

function getMovies() {
  fetch(
    `https://api.themoviedb.org/3/movie/${props.sect}?api_key=04c35731a5ee918f014970082a0088b1&page=${page.value}&language=en-US`
  )
    .then((response) => {
      return response.json();
    })
    .then((datas) => {
      if (props.genre) {
        let x = datas.results.filter((movie) =>
          movie.genre_ids.includes(props.genre)
        );
        data.value = data.value.concat(x);

        if (data.value.length < 20 && page.value < 30) {
          page.value++;
          getMovies();
        }
      } else {
        data.value = datas.results;
      }
    });
}

watch(props, () => {
  data.value = [];
  page.value = 1;
  getMovies();
})

getMovies();

</script>

<style scoped>
main {
  float: right;
  width: 85%;
}

@media screen and (max-width: 950px) {
  main {
    width: 100%;
  }
}
</style>