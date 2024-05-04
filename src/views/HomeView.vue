<template>
  <transition name="fade" mode="out-in">
    <div v-if="isVisible" class="container-principal">
      <h1>Dashboards</h1>
      <div class="container-dash">
        <DashAgua />
        <DashLuz />
      </div>
    </div>
    <div v-else class="entre-paginas">
      <i class="fa-solid fa-house"></i>
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
  height: 30vh;
  width: 76vw;
  gap: calc(30vh - 90%);
}

.container-principal h1 {
  color: var(--roxo-principal);
  font-size: 6vmin;
  font-weight: 400;
  justify-self: flex-start;
  align-self: flex-start;
}

.container-dash {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fit, minmax(min(35vw, 61vh), 1fr));
  justify-self: center;
  align-self: center;
  margin-right: 3%;
  padding-bottom: 1%;
  gap: calc(((76vh - min(calc(35vw - 1%), calc(61vh - 1%)) * 2) / 2) + 12vw);
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
