<template>
  <i class="fa-solid fa-bars" @click="showGenres"></i>
  <div id="genretabs" ref="genretabs">
    <genre-tab class="genretab" v-for="i in genres" :key="i.id" :genre="i" @selectedGenre="getSelectedGenre"></genre-tab>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import GenreTab from "./GenreTab.vue";

const emits = defineEmits(['selectedGenre'])
const genres = ref([])
const genretabs = ref(null);

function showGenres() {
  genretabs.value.classList.toggle("active");
}

function getSelectedGenre(e) {
  emits('selectedGenre', e);
  showGenres();
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
    width: 45%;
    z-index: 2;
  }

  #genretabs[class~=active] {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .fa-bars {
    display: block;
    font-size: xx-large;
    padding: 1rem;
    color: white;
  }
}
</style>