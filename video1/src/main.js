import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).mount('#app')
// app组件渲染到public下的index.html 14行

  // 5. 创建并挂载根实例
const app = createApp({})
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)

app.mount('#app')

// 现在，应用已经启动了！