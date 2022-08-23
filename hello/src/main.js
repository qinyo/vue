import { createApp } from 'vue'
import App from './App.vue'
import store from "./store"
// import vant from 'vant'
// import 'vant/lib/index.css'

// createApp(App).mount('#app')
// app组件渲染到public下的index.html 14行

  // 5. 创建并挂载根实例
const app = createApp(App)


app.mount('#app')
app.use(store)

// 现在，应用已经启动了！