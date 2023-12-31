import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from '@/store/index'
import '@/assets/css/base.css' // 清除默认样式
import 'amfe-flexible' // 配置可伸缩布局方案 主要是将1rem设为viewWidth/10

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
