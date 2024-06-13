import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'; 
import eventBus from '../eventBus';

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

router.beforeEach((to, from, next) => {
  if (store.state.isProcessing) { 
    alert('Algum processamento ainda está em progresso nessa página. Por favor, aguarde o seu término.');
    next(false);
  } else {
    next();
  }
});

function updateNotifications() {
  eventBus.emit('update-notifications', true);
}

setInterval(updateNotifications, 180000);  // Atualiza a cada 3 minutos
updateNotifications();

window.addEventListener('beforeunload', () => {
  updateNotifications();
});


export default router
