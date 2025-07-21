import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueGtag from "vue-gtag"
import 'semantic-ui-css/semantic.min.css'  // 基礎 UI 框架
import './assets/modern-style.css'  // 現代化風格覆蓋

createApp(App)
.use(router)
.use(VueGtag, {
    config: { 
      id: "G-PYJRP1QSGE",
    },
  }, router) // <----- add your router here
.mount('#app')
