<template>
  <transition name="fade" mode="out-in">
    <div v-if="isVisible" class="container-anexo">
      <AttachFile></AttachFile>
    </div>
  </transition>
</template>

<script lang="ts">
import AttachFile from '@/components/AttachFile.vue';

export default {
  data() {
    return {
      isVisible: false
    }
  },

  mounted() {
    setTimeout(() => {
      this.isVisible = true
    }, 1000);
  },

  components: {
    AttachFile
  }
}
</script>

<style>
@import '../assets/base.css';
</style>
