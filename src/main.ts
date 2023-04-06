import directive from '@/directives'
import plugin from '@/plugins'
import router from '@/router'
import '@/styles/global.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)
function bootstrap() {
  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  plugin(app)
  directive(app)
  app.mount('#app')
}

bootstrap()
