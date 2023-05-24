<template>
  <top-nav @section="sectFun"></top-nav>
  <all-genres @selectedGenre="genreFun"></all-genres>
  <the-main :sect="chosenSection" :genre="chosenGenre"></the-main>
</template>

<script setup>
import { ref } from "vue";

import TopNav from "../components/TopNav.vue";
import AllGenres from "../components/AllGenres.vue";
import TheMain from "../components/TheMain.vue";

const chosenSection = ref("now_playing");
const chosenGenre = ref(null);

function sectFun(n) {
  chosenSection.value = n;
}
function genreFun(n) {
  chosenGenre.value = n;
}
</script>

<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 1rem;
}
</style>