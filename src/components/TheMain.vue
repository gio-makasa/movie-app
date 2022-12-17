<template>
  <main>
    <movie-block
      v-for="i in data.length"
      :key="i - 1"
      :data="data[i - 1]"
    ></movie-block>
  </main>
</template>

<script>
import MovieBlock from "./MovieBlock.vue";

export default {
  components: { MovieBlock },
  props: ["sect", "genre"],
  data() {
    return {
      data: [],
      page: 1,
    };
  },
  methods: {
    getMovies() {
      fetch(
        `https://api.themoviedb.org/3/movie/${this.sect}?api_key=04c35731a5ee918f014970082a0088b1&page=${this.page}&language=en-US`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (this.genre) {
            let x = data.results.filter((movie) =>
              movie.genre_ids.includes(this.genre)
            );
            this.data = this.data.concat(x);

            if (this.data.length < 20 && this.page < 30) {
              this.page++;
              this.getMovies();
            }
          } else {
            this.data = data.results;
          }
        });
    },
  },
  watch: {
    sect(newsec, oldsec) {
      if (oldsec !== newsec) {
        this.data = [];
        this.page = 1;
        this.getMovies();
      }
    },
    genre(newgenre, oldgenre) {
      if (oldgenre !== newgenre) {
        this.data = [];
        this.page = 1;
        this.getMovies();
      }
    },
  },
  beforeMount() {
    this.getMovies();
  },
};
</script>

<style scoped>
main {
  float: right;
  width: 85%;
}
</style>