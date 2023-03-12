import { createApp } from 'vue'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';

import { createPinia } from 'pinia';

import { router } from '@/router/index';

import './assets/style/main.css';
import 'virtual:windi.css';
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(ArcoVue);
app.mount('#app');
