import './assets/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from '@/i18n/index'

const app = createApp(App)

app.use(router).use(i18n)

app.mount('#app')
