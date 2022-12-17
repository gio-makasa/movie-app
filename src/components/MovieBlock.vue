<template>
  <div @click="toAbout" class="movie">
    <img
      :src="APIimg + data.backdrop_path"
      @error="altPoster"
      :alt="data.original_title"
    />
    <div class="movie_info">
      <h3>{{ data.original_title }}</h3>
      <p :style="`color: ${rateColor}`">{{ data.vote_average }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      APIimg: "https://image.tmdb.org/t/p/w1280",
    };
  },
  computed: {
    rateColor() {
      if (this.data.vote_average >= 9) {
        return "green";
      } else if (this.data.vote_average >= 5) {
        return "yellow";
      } else {
        return "red";
      }
    },
  },
  methods: {
    altPoster(event) {
      event.target.src = require("@/assets/NOPOSTER.png");
    },
    toAbout() {
      this.$router.push(`/About/${this.data.id}`);
    },
  },
};
</script>

<style scoped>
.movie {
  width: 280px;
  margin-bottom: 2rem;
  border-bottom: 2px solid white;
  cursor: pointer;
}
img {
  width: 100%;
}
.movie_info {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  color: white;
  text-transform: uppercase;
}
</style>