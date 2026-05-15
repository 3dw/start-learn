<template lang="pug">
nav.ui.menu(v-if="!$route.path.startsWith('/embed')")
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
  router-link.item(to="/github")
    i.github.icon
    span.fat-only 本專案源碼

// .marquee-container
  .marquee(:style="marqueeStyle", ref="marquee")
    .marquee-content
      router-link.item(
        v-for="(item, index) in faqs",
        :key="index",
        :to="'/ans/' + index"
      ) {{ parse(item.q) }}
    .marquee-content(aria-hidden="true")
      router-link.item(
        v-for="(item, index) in faqs",
        :key="index",
        :to="'/ans/' + index"
      ) {{ parse(item.q) }}

.news-carousel(
  v-if="!$route.path.startsWith('/embed') && news.length",
  @mouseenter="pauseNewsRotation",
  @mouseleave="startNewsRotation"
)
  transition(name="news-fade", mode="out-in")
    .news-slide(v-if="currentNews", :key="newsSlideKey(currentNews)")
      template(v-if="currentNews.type === 'api'")
        a(
          :href="currentNews.url",
          :title="currentNews.description",
          target="_blank",
          rel="noopener noreferrer"
        ) {{ formatApiNews(currentNews) }}
      template(v-else)
        a(
          v-if="currentNews.h",
          :href="currentNews.h",
          target="_blank",
          rel="noopener noreferrer"
        ) {{ formatLocalNews(currentNews) }}
        router-link(v-else-if="currentNews.r", :to="currentNews.r") {{ formatLocalNews(currentNews) }}
        span(v-else) {{ formatLocalNews(currentNews) }}

router-view(:faqs="faqs")
ad.fat-only(v-if="!$route.path.startsWith('/embed')")
</template>

<script>
import Ad from './components/Ad-Be.vue'
import { defineComponent } from 'vue'
import axios from 'axios'

const NEWS_API = 'https://members-backend.alearn13994229.workers.dev/news'
const NEWS_AUTOPLAY_MS = 5000

function parseNewsDateMs(dateStr) {
  const s = String(dateStr ?? '').trim()
  if (!s) return NaN
  return new Date(s.includes('T') ? s : `${s}T00:00:00`).getTime()
}

function filterNewsToLastTwoYears(items) {
  const cutoff = new Date()
  cutoff.setFullYear(cutoff.getFullYear() - 2)
  cutoff.setHours(0, 0, 0, 0)
  const min = cutoff.getTime()
  return items
    .filter((it) => {
      const t = parseNewsDateMs(it.date)
      return !Number.isNaN(t) && t >= min
    })
    .sort((a, b) => parseNewsDateMs(b.date) - parseNewsDateMs(a.date))
}

export default defineComponent({
  name: 'AutoMap',
  components: {
    Ad
  },
  data() {
    return {
      faqs: [],
      news: [
        {
          type: 'local',
          text: '支持自學，愛心碼捐9806',
          h: 'https://www.alearn.org.tw'
        }
      ],
      currentNewsIndex: 0,
      newsTimer: null,
      marqueeStyle: {
        animationDuration: '60s'
      }
    }
  },
  computed: {
    currentNews() {
      return this.news[this.currentNewsIndex] || null
    }
  },
  methods: {
    parse: (s) => {
      return '您想知道' + s.replace('？', '嗎？')
    },
    async fetchFaqs() {
      try {
        const response = await axios.get('https://members-backend.alearn13994229.workers.dev/api/Faq')
        this.faqs = response.data
      } catch (error) {
        console.error('獲取FAQ資料失敗:', error)
      }
    },
    newsSlideKey(slide) {
      return slide.type === 'api' ? slide.url : `local:${slide.text}`
    },
    formatApiNews(slide) {
      return `[${slide.category}] ${slide.name} (${slide.date})`
    },
    formatLocalNews(slide) {
      return slide.text || ''
    },
    startNewsRotation() {
      this.pauseNewsRotation()
      this.newsTimer = window.setInterval(() => {
        if (this.news.length > 1) {
          this.currentNewsIndex = (this.currentNewsIndex + 1) % this.news.length
        }
      }, NEWS_AUTOPLAY_MS)
    },
    pauseNewsRotation() {
      if (this.newsTimer !== null) {
        window.clearInterval(this.newsTimer)
        this.newsTimer = null
      }
    },
    async loadRemoteNews() {
      try {
        const response = await axios.get(NEWS_API)
        const data = Array.isArray(response.data) ? response.data : []
        const remoteNews = filterNewsToLastTwoYears(
          data.map((item) => ({ ...item, type: 'api' }))
        )
        const nextNews = [
          ...this.news.filter((slide) => slide.type !== 'api'),
          ...remoteNews
        ]
        this.news = nextNews
        if (this.currentNewsIndex >= nextNews.length) {
          this.currentNewsIndex = 0
        }
      } catch (error) {
        console.error('載入最新消息失敗:', error)
      }
    }
  },
  mounted() {
    this.fetchFaqs()
    this.loadRemoteNews()
    this.startNewsRotation()
  },
  beforeUnmount() {
    this.pauseNewsRotation()
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
  font-size: 16px;
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
  animation: scroll linear infinite;
}

.marquee-content {
  display: flex;
  justify-content: flex-start;
  min-width: 100%;
  flex-shrink: 0;
}

.marquee-content a.item {
  padding: 0 20px;
  white-space: nowrap;
  color: black !important;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
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

.news-carousel {
  height: 2em;
  overflow: hidden;
  padding: 0.3em;
  background-color: #ffc107;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
}

.news-carousel .news-slide {
  overflow: hidden;
}

.news-carousel a,
.news-carousel span {
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
}

.news-fade-enter-active,
.news-fade-leave-active {
  transition: opacity 0.3s ease;
}

.news-fade-enter-from,
.news-fade-leave-to {
  opacity: 0;
}

</style>
