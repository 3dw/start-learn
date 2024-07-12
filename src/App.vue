<template lang="pug">
nav.ui.menu
  router-link.item(to="/") 什麼是自學
  router-link.item(to="/faq") 問答集
  router-link.item(to="/four") 四階段
router-view
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983 !important;
}

</style>
