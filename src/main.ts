import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'semantic-ui-css/semantic.min.css'  // 加入這行

createApp(App).use(router).mount('#app')
