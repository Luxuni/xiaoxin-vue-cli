import directive from '@/directives'
import plugin from '@/plugins'
import router from '@/router'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
function bootstrap() {
  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  plugin(app)
  directive(app)
  app.mount('#app')
}

bootstrap()
