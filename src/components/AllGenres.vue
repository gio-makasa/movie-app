<template>
  <i class="fa-solid fa-bars" @click="showGenres"></i>
  <div id="genretabs">
    <genre-tab class="genretab" v-for="i in genres" :key="i.id" :genre="i"
      @selectedGenre="(e)=>{$emit('selectedGenre', e)}"></genre-tab>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import GenreTab from "./GenreTab.vue";

const emits = defineEmits(['selectedGenre'])
const genres = ref([])

function showGenres() {
  document.getElementById("genretabs").classList.toggle("active");
}

onBeforeMount(() => {
  fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=04c35731a5ee918f014970082a0088b1"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      genres.value = data.genres;
    });
})
</script>

<style scoped>
#genretabs {
  position: fixed;
  display: grid;
  float: left;
  width: 15%;
  height: 100vh;
  color: white;
}

.fa-bars {
  display: none;
}

@media screen and (max-width: 950px) {
  #genretabs {
    display: none;
    background-color: rgba(0, 0, 0, 0.6);
    width: fit-content;
    z-index: 2;
  }

  #genretabs[class~=active] {
    display: block;
  }

  .fa-bars {
    display: block;
    font-size: xx-large;
    padding: 1rem;
    color: white;
  }
}
</style>