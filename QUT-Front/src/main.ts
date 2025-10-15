
import { createApp } from 'vue'
import { createPinia } from 'pinia'

//这是引入vue的app组件，和router路由组件
import App from './App.vue'
import router from './router'

//这是引入antd的组件库
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)

app.mount('#app')
