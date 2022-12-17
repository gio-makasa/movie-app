<template>
  <img
    :src="APIimg + data.backdrop_path"
    @error="altPoster($event)"
    :alt="data.original_title"
    id="backdrop"
  />

  <div id="info">
    <img
      :src="APIimg + data.poster_path"
      @error="altPoster($event)"
      :alt="data.original_title"
      id="poster"
    />

    <div id="details">
      <h2 id="title">{{ data.original_title }}</h2>
      <h3>
        Release date: <strong>{{ data.release_date }};</strong>
      </h3>
      <h3>
        Genres:
        <strong v-for="i in data.genres" :key="i.id">{{ i.name }}; </strong>
      </h3>
      <h3>
        Runtime: <strong>{{ data.runtime }} minute;</strong>
      </h3>
      <h3>
        Vote:
        <strong :style="`color: ${rateColor}`">{{ data.vote_average }}</strong>
      </h3>
      <h3 id="overview">
        <strong>Overview:</strong>
        <p>{{ data.overview }}</p>
      </h3>

      <div v-if="data.adult" id="adult">
        <strong>18+</strong>
      </div>
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
  },
};
</script>

<style scoped>
#backdrop {
  position: relative;
  width: 80%;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 3rem;
}
#info {
  color: white;
  display: flex;
  padding: 1rem;
}
#details {
  position: relative;
}
#poster {
  width: 20%;
  margin-right: 1rem;
}
#title {
  margin-bottom: 1rem;
}
h3 {
  font-weight: normal;
}
#overview {
  margin-top: 1rem;
}
#adult {
  position: absolute;
  top: 0;
  right: 0;
  border: 5px solid red;
  border-radius: 50%;
  width: fit-content;
  padding: 10px 6px;
}
</style>