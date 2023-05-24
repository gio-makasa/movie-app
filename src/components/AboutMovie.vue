<template>
  <img :src="data.value.backdrop_path ? APIimg + data.value.backdrop_path : '/src/assets/NOPOSTER.png'"
    :alt="data.value.original_title" id="backdrop" />

    <div id="info">
    <img :src="data.value.poster_path ? APIimg + data.value.poster_path : '/src/assets/NOPOSTER.png'"
      :alt="data.value.original_title" id="poster" />

    <div id="details">
      <h2 id="title">{{ data.value.original_title }}</h2>
      <h3>
        Release date: <strong>{{ data.value.release_date }};</strong>
      </h3>
      <h3>
        Genres:
        <strong v-for="i in data.value.genres" :key="i.id">{{ i.name }}; </strong>
      </h3>
      <h3>
        Runtime: <strong>{{ data.value.runtime }} minute;</strong>
      </h3>
      <h3>
        Vote:
        <strong :style="`color: ${rateColor}`">{{ data.value.vote_average }}</strong>
      </h3>
      <h3 id="overview">
        <strong>Overview:</strong>
        <p>{{ data.value.overview }}</p>
      </h3>

      <div v-if="data.value.adult" id="adult">
        <strong>18+</strong>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['data']);
const APIimg = "https://image.tmdb.org/t/p/w1280";

const rateColor = computed(() => {
  if (props.data.value.vote_average >= 9) {
    return "green";
  } else if (props.data.value.vote_average >= 5) {
    return "yellow";
  } else {
    return "red";
  }
})
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

@media screen and (max-width: 800px) {
  #poster {
    width: 30%;
  }

  #details {
    font-size: 0.5rem;
  }
}

@media screen and (max-width: 400px) {
  #poster {
    width: 40%;
  }

  #details {
    font-size: 0.4rem;
  }
}
</style>