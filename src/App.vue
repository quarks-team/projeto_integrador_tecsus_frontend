<script lang="ts">
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
import Notifications from './components/Notifications.vue';
// import NumberNotifications from './components/NumberNotifications.vue';
import { eventBus } from './main';
import clickOutside from '../src/utils/click-outside.ts';


export default {
  data() {
    return {
      showNotifications: false,
      numberNotifications: null,
    }
  },

  directives: {
    clickOutside,
  },

  created() {

    // eventBus.$on('close-notifications', (closeNotifications: boolean) => {
    //         this.showNotifications = closeNotifications
    //   });

    // eventBus.$on('number-notifications', (number: any) => {
    //     this.numberNotifications = number
    //   });   

  },

  components: {
    Sidebar,
    Notifications,
    // NumberNotifications
  }
}
</script>

<template>
  <div class="app-container">
    <!-- Menu lateral -->
    <Sidebar />

    <Notifications v-if="showNotifications" ref="notifications"></Notifications>
    <!-- <NumberNotifications></NumberNotifications> -->

    <span id="notification-icone">
      <a @click.prevent="showNotifications = !showNotifications">
        <b class="number-notifications">{{ numberNotifications }}</b>
        <i class="fa-solid fa-bell"></i>
      </a>
    </span>
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
}

#notification-icone:hover {
  opacity: 0.7;
  transition: 0.1s;
}

.number-notifications {
  background-color: #AE2A32;
  border-radius: 50%;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  color: white;
  display:inline;
}
</style>
