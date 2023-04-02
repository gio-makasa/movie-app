<template>
  <img src="../assets/logo.png" alt="logo" />
  <h2>oops...</h2>
  <h3>
    Looks like you lost, let me take you at <router-link to="/home">home</router-link>
  </h3>
</template>

<style scoped>
* {
  text-align: center;
  color: white;
}
img {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>