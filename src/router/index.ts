import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('../views/ReportsView.vue')
    },
    {
      path: '/alerts',
      name: 'alerts',
      component: () => import('../views/AlertsView.vue')
    },
    {
      path: '/agua',
      name: 'agua',
      component: () => import('../views/PowerBiAgua.vue')
    },
    {
      path: '/luz',
      name: 'luz',
      component: () => import('../views/PowerBiLuz.vue')
    },
    {
      path: '/importar-dados',
      name: 'importar-dados',
      component: () => import('../views/DataImportView.vue')
    }
  ]
})

export default router
