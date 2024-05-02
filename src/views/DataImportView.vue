<template>
  <transition name="fade" mode="out-in">
    <div v-if="isVisible" class="container-anexo">
      <div class="container-header-anexo">
        <h1>Importar Dados</h1>
        <img src="../assets/icons/csv3.webp" />
      </div>
      <AttachFile class="anexar"></AttachFile>
    </div>
  </transition>
</template>

<script lang="ts">
import AttachFile from '@/components/AttachFile.vue'

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
    AttachFile
  }
}
</script>

<style>
@import '../assets/css/base.css';

.container-anexo {
  margin-left: 4%;
  margin-top: 3%;
  margin-right: 4%;
  margin-bottom: 3%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.container-header-anexo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2%;
}

.container-header-anexo h1 {
  color: #776ae3;
  font-size: 6vmin;
  font-weight: 400;
}

.container-header-anexo img {
  position: absolute;
  width: auto;
  height: 25%;
  right: 2%;
  object-fit: cover;
}

.container-anexo .anexar {
  justify-self: center;
  align-self: center;
}
</style>
