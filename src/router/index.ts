import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/about', component: () => import('@/components/About.vue') },
  { path: '/', component: () => import('@/components/Home.vue') },
];

// 路由
export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { // 滚动到顶部
    return { top: 0 };
  },
});