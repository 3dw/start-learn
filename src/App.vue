<template lang="pug">
nav.ui.menu
  router-link.item(to="/")
    i.home.icon
    | 自學是什麼
  router-link.item(to="/faq")
    i.question.circle.icon
    | 問答集
  router-link.item(to="/four")
    i.tasks.icon
    | 四階段
  router-link.item.fat-only(to="/outer")
    i.book.icon
    | 資源推薦

.marquee-container
  .marquee
    .marquee-content
      router-link.item(
        v-for="(item, index) in faqs",
        :key="index",
        :to="'/ans/' + index"
      ) {{ parse(item.q) }}
    .marquee-content(aria-hidden="true")
      router-link.item(
        v-for="(item, index) in start",
        :key="index",
        :to="'/ans/' + index"
      ) {{ parse(item.q) }}

router-view
ad.fat-only
</template>

<script>
import Ad from './components/Ad-Be.vue'
import { defineComponent } from 'vue'
import { start } from './data/start.js'
import { plan } from './data/plan.js'
import { support } from './data/support.js'
import { resource } from './data/resource.js'

export default defineComponent({
  name: 'AutoMap',
  components: {
    Ad
  },
  data() {
    return {
      start,
      plan,
      faqs: start.concat(plan).concat(support).concat(resource)

    }
  },
  methods: {
    parse: (s) => {
      return '您想知道' + s.replace('？', '嗎？')
    }
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

nav.ui.menu {
  margin-bottom: 0 !important;
}

nav a.router-link-exact-active {
  color: #42b983 !important;
}

a, button, .clickable {
  cursor: pointer !important;
}

.marquee-container {
  overflow: hidden;
  width: 100%;
  background-color: #F183FFFF;
  padding: 10px 0;
}

.marquee {
  display: flex;
  width: 200%;
  animation: scroll 20s linear infinite;
}

.marquee-content {
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-shrink: 0;
}


.marquee-content a.item {
  padding: 0 40px;
  white-space: nowrap;
  color: black !important;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
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

.text-underline {
  text-decoration: underline;
}

.bold {
  font-weight: bolder;
}

</style>
