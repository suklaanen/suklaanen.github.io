import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
      ],
    },
    // legacy route because of old links
    {
      path: '/rebecca',
      name: 'legacyMain',
      component: MainView,
      children: [
        {
          path: '',
          name: 'legacyHome',
          component: HomeView,
        },
      ],
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' } 
    }
  }
})

export default router
