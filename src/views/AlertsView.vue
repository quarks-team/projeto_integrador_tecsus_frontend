<template>
  <transition name="fade" mode="out-in">
    <div v-if="isVisible" class="container-principal">
      <h1>Alertas</h1>
    </div>
    <div v-else class="entre-paginas">
      <i class="fa-solid fa-bell"></i>
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
  },

  methods: {},

  components: {}
}
</script>

<style>
@import '../assets/css/base.css';

.container-principal {
  margin-left: 4%;
  margin-top: 3%;
  margin-right: 4%;
  margin-bottom: 3%;
}

.container-principal h1 {
  color: var(--roxo-principal);
  font-size: 6vmin;
  font-weight: 400;
}

.entre-paginas {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.entre-paginas i {
  position: relative;
  font-size: 8rem;
  z-index: -1;
  color: var(--roxo-principal);
}
</style>
