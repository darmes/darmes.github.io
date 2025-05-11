import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// mount after the initial navigation is ready
// await router.isReady()
// FIXME: This doesn't work yet
app.mount('#app')
