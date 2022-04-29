import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/about', component: () => import(/* webpackChunkName: "About" */ '@/components/About.vue') },
  { path: '/', component: () => import(/* webpackChunkName: "Home" */ '@/components/Home.vue') },
];

// 路由
export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { // 滚动到顶部
    return { top: 0 };
  },
});