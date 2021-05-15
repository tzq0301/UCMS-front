import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus'; // 报错 => npm install element-plus --save
import 'element-plus/lib/theme-chalk/index.css';
import router from './router';

createApp(App)
    .use(ElementPlus)
    .use(router)
    .mount('#app')
