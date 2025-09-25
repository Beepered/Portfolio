import { createRouter, createMemoryHistory } from 'vue-router'

import Home from '@pages/Home.vue'
import About from '@pages/About.vue'
import CtC from '@pages/CtC.vue'
import Fight from '@pages/Fight.vue'
import Funny from '@pages/Funny.vue'
import Secret from '@pages/Secret.vue'

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
  {
    path: '/CtC',
    name: 'CtC',
    component: CtC
  },
  {
    path: '/Fight',
    name: 'Fight',
    component: Fight
  },
  {
    path: '/Funny',
    name: 'Funny',
    component: Funny
  },
  {
    path: '/Secret',
    name: 'Secret',
    component: Secret
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router