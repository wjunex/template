import { createApp } from 'vue'
import '@/assets/style/style.css'
import '@/assets/style/global.scss'
import App from './App.vue'
import router from "@/router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.mount('#app')
