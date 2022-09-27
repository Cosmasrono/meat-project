import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../dist/main.css'

createApp(App).use(router).mount('#app')
