<template>
  <div class="genreTitle" @click="activeGenre($event)">
    <h3 :id="genre.id">{{ genre.name }}</h3>
  </div>
</template>

<script>
export default {
  props: ["genre"],
  methods: {
    activeGenre(e) {
      if (document.getElementsByClassName("activeTab")[0]) {
        if (document.getElementsByClassName("activeTab")[0].id === e.target.id) {
          e.target.classList.remove('activeTab');
          this.$parent.$emit("genre", null);
        } else {
          document.getElementsByClassName("activeTab")[0].classList.remove("activeTab");
          e.target.classList.add("activeTab");
          this.$parent.$emit("genre", this.genre.id);
        }
      } else {
        e.target.classList.add("activeTab");
        this.$parent.$emit("genre", this.genre.id);
      }
    },
  },
};
</script>

<style scoped>
.genreTitle {
  display: flex;
  justify-content: center;
  border-radius: 0 50px 50px 0;
  overflow: hidden;
  text-transform: uppercase;
  cursor: pointer;
}
.genreTitle:hover {
  background-color: rgba(106, 130, 154, 0.5);
}
h3 {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-left: 1rem;
}
.activeTab {
  background-color: #0080ff;
}
</style>