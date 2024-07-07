<template>
  <nav class="ui menu">
    <router-link to="/" class="item">Home</router-link>
    <!-- <router-link to="/faq" class="item">FAQ</router-link> -->
    <router-link to="/four" class="item">四階段</router-link>
  </nav>
  <router-view/>
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
  color: #42b983;
}

</style>
