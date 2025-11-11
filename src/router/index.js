import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import HomeView from '../views/HomeView.vue'
import SpecificProjectView from '../views/SpecificProjectView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', name: 'main', component: MainView, children: [
        { path: '', name: 'who', component: HomeView },
        { path: ':section', name: 'home', component: HomeView }
        
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
