<template>
  <transition name="fade" mode="out-in">
    <div v-if="isVisible" class="container-principal">
      <h1>Alertas</h1>
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

.container-principal {
  margin-left: 4%;
  margin-top: 3%;
  margin-right: 4%;
  margin-bottom: 3%;
}

.container-principal h1 {
  color: #776ae3;
  font-size: 6vmin;
  font-weight: 400;
}
</style>
