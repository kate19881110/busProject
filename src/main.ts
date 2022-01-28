import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import loadI18n from './i18n/config';
import 'reset-css';
import 'element-plus/dist/index.css';
import '@/styles/common.sass';

if (process.env.NODE_ENV === 'development') {
  console.log('%c Mock.js ', 'background: #16A085; color: #FFF', 'start up ✔︎');
  require('./mock/index');
}

async function init() {
  const app = createApp(App);
  app.use(router);
  const i18n = await loadI18n();
  app.use(i18n);
  app.mount('#app');
}

init();
