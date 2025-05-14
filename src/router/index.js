import { createRouter, createWebHistory } from 'vue-router'
import Ajout from '../views/Ajout.vue'
import Listage from '../views/Listage.vue'
import Bilan from '../views/Bilan.vue'

const routes = [
  {
    path: '/',
    name: 'ajout',
    component: Ajout
  },
  {
    path: '/listage',
    name: 'listage',
    component: Listage
  },
  {
    path: '/bilan',
    name: 'bilan',
    component: Bilan
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
