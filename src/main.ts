import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueGtag from "vue-gtag"
import 'semantic-ui-css/semantic.min.css'  // 加入這行

createApp(App)
.use(router)
.use(VueGtag, {
    config: { 
      id: "G-PYJRP1QSGE",
    },
  }, router) // <----- add your router here
.mount('#app')
