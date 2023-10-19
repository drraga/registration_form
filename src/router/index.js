import { createRouter, createWebHistory } from 'vue-router';
import UserInfoPage from '../views/UserInfoPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'form',
      component: UserInfoPage
    },
    {
      path: '/preview',
      component: () => import('../views/PreviewPage.vue')
    },
  ]
})

export default router
