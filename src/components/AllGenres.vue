<template>
  <div id="genretabs">
    <genre-tab
      v-for="i in genres"
      :key="i.id"
      :genre="i"
    ></genre-tab>
  </div>
</template>

<script>
import GenreTab from "./GenreTab.vue";

export default {
  components: { GenreTab },
  data() {
    return {
      genres: [],
    };
  },
  beforeMount() {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=04c35731a5ee918f014970082a0088b1"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.genres = data.genres;
      });
  },
};
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
</style>