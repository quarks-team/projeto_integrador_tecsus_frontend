import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        emDesenvolvimento: false,
      }
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('../views/ReportsView.vue'),
      meta: {
        emDesenvolvimento: true,
      }
    },
    {
      path: '/alerts',
      name: 'alerts',
      component: () => import('../views/AlertsView.vue'),
      meta: {
        emDesenvolvimento: true,
      }
    },
    {
      path: '/agua',
      name: 'agua',
      component: () => import('../views/PowerBiAgua.vue'),
      meta: {
        emDesenvolvimento: false,
      }
    },
    {
      path: '/luz',
      name: 'luz',
      component: () => import('../views/PowerBiLuz.vue'),
      meta: {
        emDesenvolvimento: false,
      }
    },
    {
      path: '/importar-dados',
      name: 'importar-dados',
      component: () => import('../views/DataImportView.vue'),
      meta: {
        emDesenvolvimento: true,
      }
    },
    {
      path: '/em-desenvolvimento',
      name: 'entrega-futura',
      component: () => import('../views/EmDesenvolvimentoView.vue'),
      meta: {
        emDesenvolvimento: false,
      }
    },
  ]
})


router.beforeEach((to, from, next) => {
  if (to.meta.emDesenvolvimento) {
    // Verifica se a rota está em desenvolvimento ou não. Se estiver, o acesso ao route é negado e o usuário é direcionado a outra página
    next('/em-desenvolvimento');
  } else {
    next(); // Se não estiver em desenvolvimento, permite a navegação
  }
});


export default router
