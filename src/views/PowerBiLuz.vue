<template>
  <transition name="fade" mode="out-in">
    <div v-if="isVisible" class="container-powerbi">
      <h1>Dashboard de Luz</h1>
      <!-- <iframe></iframe>  -->
    </div>
  </transition>
</template>

<script lang="ts">
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
  }
}
</script>

<style>
@import '../assets/base.css';

.container-powerbi {
  margin-left: 4%;
  margin-top: 3%;
  margin-right: 4%;
  margin-bottom: 3%;
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
}

.container-powerbi h1 {
  color: #776ae3;
  font-size: 6vmin;
  font-weight: 400;
}
</style>
