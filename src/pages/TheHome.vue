<template>
  <top-nav @section="sectFun"></top-nav>
  <all-genres @genre="genreFun"></all-genres>
  <the-main :sect="chosenSection" :genre="chosenGenre"></the-main>
</template>

<script>
import TopNav from "../components/TopNav.vue";
import AllGenres from "../components/AllGenres.vue";
import TheMain from "../components/TheMain.vue";

export default {
  components: {
    AllGenres,
    TopNav,
    TheMain,
  },
  data() {
    return {
      chosenSection: "now_playing",
      chosenGenre: null,
    };
  },
  methods: {
    sectFun(n) {
      this.chosenSection = n;
    },
    genreFun(n) {
      this.chosenGenre = n;
    },
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 1rem;
}
</style>