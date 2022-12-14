import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import services from '../views/services.vue'
import visit from '../views/visit.vue'
/* import sign from '../views/sign.vue'
import login from '../views/login.vue'
 */
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/visit',
    name: 'visit ',
    component: visit
  },
  /* {
  path: '/login',
  name: 'login',
  component: login 
  },*/
  {
    path: '/services',
    name: 'services',
    component: services
  },
  /* {
    path: '/sign',
    name: 'sign',
    component: sign
  }, */
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
