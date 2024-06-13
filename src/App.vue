<script lang="ts">
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
import Notifications from './components/Notifications.vue'
import NumberNotifications from './components/NumberNotifications.vue';
import clickOutside from '../src/utils/click-outside.ts'
import { defineComponent } from 'vue';
import eventBus from './eventBus';

export default defineComponent({
  name: 'App',
  data() {
    return {
      showNotifications: false,
      numberNotifications: null
    }
  },

  directives: {
    clickOutside
  },

  created() {
    eventBus.emit('app-created', 'App has been created');

    eventBus.on('close-notifications', (closeNotifications: boolean) => {
            this.showNotifications = closeNotifications
      });
    eventBus.on('number-notifications', (number: any) => {
        this.numberNotifications = number
      });
  },

  components: {
    Sidebar,
    Notifications,
    NumberNotifications
  }
})
</script>

<template>
  <div class="app-container">
    <!-- Menu lateral -->
    <Sidebar />

    
    <a id="notification-icone" @click.prevent="showNotifications = !showNotifications">
      <b class="number-notifications">{{ numberNotifications }}</b>
      <i class="fa-solid fa-bell"></i>
    </a>
    

    <Notifications v-if="showNotifications" ref="notifications"></Notifications>
    <NumberNotifications></NumberNotifications>

  </div>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
@import './assets/css/base.css';

/* estilização dos elementos do single page */
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

#notification-icone {
  transition: 2s;
  position: fixed;
  bottom: 30px;
  left: 85px;
  z-index: 9999;
  color: white;
  font-size: 50px;
  cursor: pointer;
}

#notification-icone:hover {
  opacity: 0.5;
  transition: 1s;
  color: var(--laranja-auxiliar);
}

.number-notifications {
  background-color: rgba(255, 0, 0, 0.6);
  border-radius: 50%;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 21px;
  color: white;
  display: inline;
  cursor: pointer;
}
</style>
