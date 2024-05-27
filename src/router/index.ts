import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {}
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('../views/ReportsView.vue'),
      meta: {}
    },
    {
      path: '/alerts',
      name: 'alerts',
      component: () => import('../views/AlertsView.vue'),
      meta: {}
    },
    {
      path: '/agua',
      name: 'agua',
      component: () => import('../views/PowerBiAgua.vue'),
      meta: {}
    },
    {
      path: '/luz',
      name: 'luz',
      component: () => import('../views/PowerBiLuz.vue'),
      meta: {}
    },
    {
      path: '/importar-dados',
      name: 'importar-dados',
      component: () => import('../views/DataImportView.vue'),
      meta: {}
    }
  ]
})

export default router
