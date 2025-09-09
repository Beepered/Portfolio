import { createRouter, createMemoryHistory } from 'vue-router'

import Home from '@pages/Home.vue'
import About from '@pages/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router