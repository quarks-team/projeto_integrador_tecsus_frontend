<template>
  <transition name="fade" mode="out-in">
    <div v-if="isVisible" class="container-principal">
      <h1>Dashboards</h1>
      <div class="container-dash">
        <DashAgua />
        <DashLuz />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import DashAgua from '@/components/DashAgua.vue'
import DashLuz from '@/components/DashLuz.vue'

export default {
  data() {
    return {
      isVisible: false
    }
  },

  mounted() {
    setTimeout(() => {
      this.isVisible = true
    }, 1000)
  },

  components: {
    DashAgua,
    DashLuz
  }
}
</script>

<style>
@import '../assets/css/base.css';

.container-principal {
  margin-left: 4%;
  margin-top: 3%;
  margin-right: 4%;
  margin-bottom: 3%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.container-principal h1 {
  color: #776ae3;
  font-size: 6vmin;
  font-weight: 400;
}

.container-dash {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2%;
}
</style>
