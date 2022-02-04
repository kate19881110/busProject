import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import componentPage from '@/views/component/index.vue';
import dynamicKeyBoard from '@/views/DynamicKeyBoard/index.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/component'
  },
  {
    path: '/component',
    name: 'component',
    component: componentPage
  },
  {
    path: '/keyBoard',
    name: 'keyBoard',
    component: dynamicKeyBoard
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
