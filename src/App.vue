<script lang="ts">
import { RouterView } from 'vue-router';
import Sidebar from '@/components/Sidebar.vue';


export default {

  data() {
    return {

    }
  },

  components: {
    Sidebar
  },

}
</script>

<template>
  <div class="app-container">
    <!-- Menu lateral -->
    <Sidebar/> 
  </div>

  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<style scoped>
@import './assets/base.css';

/* estilização dos elementos do single page */
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

</style>
