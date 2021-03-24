import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementPlusPlugin from '@/plugins/element-plus'
import './element-variables.scss'

const app = createApp(App)

elementPlusPlugin(app)

app
  .use(store)
  .use(router)
  .mount('#app')
