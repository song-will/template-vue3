import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/index.ts'

const app = createApp(App)
app.use(router)
console.log(router)

app.mount('#app')