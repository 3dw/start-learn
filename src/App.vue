<template lang="pug">
nav.ui.menu
  router-link.item(to="/") 什麼是自學
  router-link.item(to="/faq") 問答集
  router-link.item(to="/four") 四階段
router-view
ad.fat-only
</template>

<script>

import Ad from './components/Ad-Be.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AutoMap',
  components: {
    Ad
  }
})

</script>

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


a, button, .clickable {
  cursor: pointer !important;
}

@media screen and (max-width: 600px) {
  .fat-only {
    display: none !important;
  }
  #ad {
    position: fixed;
    bottom: 0;
    right: 0 !important;
  }
}

@media screen and (max-width: 991px) {
  .fater-only {
    display: none !important;
  }
}

@media screen and (min-width: 601px) {
  .thin-only {
    display: none !important;
  }
}

.text-left {
  text-align: left
}

</style>
