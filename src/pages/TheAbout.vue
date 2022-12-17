<template>
  <about-movie :data="data"></about-movie>
</template>

<script>
import AboutMovie from "../components/AboutMovie.vue";
export default {
  components: { AboutMovie },
  data() {
    return {
      data: {},
    };
  },

  beforeCreate() {
    let movieId = this.$route.params.movieId;

    if (movieId == "Latest") {
      fetch(
        `https://api.themoviedb.org/3/movie/latest?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.data = data;
        });
    } else {
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.data = data;
        });
    }
  },
};
</script>