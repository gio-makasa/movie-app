<template>
  <div @click="toAbout" class="movie">
    <img :src="data.backdrop_path ? APIimg + data.backdrop_path : './src/assets/NOPOSTER.png'" :alt="data.original_title" />
    <div class="movie_info">
      <h3>{{ data.original_title }}</h3>
      <p :style="`color: ${rateColor}`">{{ data.vote_average }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps(['data'])
const APIimg = "https://image.tmdb.org/t/p/w1280";

const router = useRouter();

const rateColor = computed(() => {
  if (props.data.vote_average >= 9) {
    return "green";
  } else if (props.data.vote_average >= 5) {
    return "yellow";
  } else {
    return "red";
  }
})

function toAbout() {
  router.push(`/About/${props.data.id}`);
}
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