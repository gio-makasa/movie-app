<template>
  <header>
    <h2 @click="$emit('section', 'now_playing'), activator($event)" class="activeSec">
      now playing
    </h2>
    <h2 @click="$emit('section', 'popular'), activator($event)">popular</h2>
    <h2 @click="$emit('section', 'upcoming'), activator($event)">upcoming</h2>
  </header>
</template>

<script setup>
function activator(e) {
  document.getElementsByClassName("activeSec")[0].classList.remove("activeSec");
  e.target.classList.add("activeSec");
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  float: right;
  clear: both;
  width: 85%;
  height: fit-content;
  color: white;
  padding: 1rem;
}

h2 {
  text-transform: uppercase;
  border-radius: 50px;
  padding: 1% 3%;
  color: white;
  text-decoration: none;
  font-size: large;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
}

h2:hover:not(.activeSec) {
  background-color: rgba(106, 130, 154, 0.5);
}

.activeSec {
  background-color: #6b839b;
}
</style>