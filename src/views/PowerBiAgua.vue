<template>
  <transition name="fade" mode="out-in">
    <div v-if="isVisible" class="container-powerbi">
      <div class="container-header-agua">
        <h1>Dashboard de Água</h1>
        <nav class="top-bar-agua">
          <router-link to="/luz" title="Dash Luz"><img src="../assets/icons/luz.png"></router-link>
        </nav>
      </div>
      <iframe title="ModeloDashboardTecSUS_Agua" :src=powerBiSrc frameborder="0" allowFullScreen="true"></iframe>
    </div>
    <div v-else class="entre-paginas">
      <img src="../assets/icons/agua.png">
    </div>
  </transition>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'

export default {
  data() {
    return {
      isVisible: false,
      powerBiSrc: 'https://app.powerbi.com/view?r=eyJrIjoiMTZiNTNiZDItOTIxOS00MGNmLTk0NTgtYzViYWU1ODkwNTFlIiwidCI6ImNmNzJlMmJkLTdhMmItNDc4My1iZGViLTM5ZDU3YjA3Zjc2ZiIsImMiOjR9',
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
@import '../assets/css/base.css';

.container-powerbi {
  margin-left: 4%;
  margin-top: 3%;
  margin-right: 4%;
  margin-bottom: 3%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.container-powerbi h1 {
  color: var(--roxo-principal);
  font-size: 6vmin;
  font-weight: 400;
}

.container-powerbi iframe {
  align-self: center;
  justify-self: center;
  width: 73vw;
  height: 100vh;
}

.entre-paginas {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.entre-paginas img {
  width: 10%;
  height: auto;
  opacity: 1;
}

.container-header-agua {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: calc(100vw - 45vw);
  gap: 43rem;
}

.container-header-agua h1 {
  justify-self: flex-start;
  white-space: nowrap;
}

.container-header-agua .top-bar-agua {
  justify-self: flex-end;
}

.top-bar-agua {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5rem;
  background-color: var(--laranja-auxiliar-0-8);
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 0.3rem;
  position: relative;
  right: 13rem;
}

.top-bar-agua a i {
  justify-self: center;
  color: var(--roxo-principal-0-7);
  font-size: 3rem;
  cursor: pointer;
}

.top-bar-agua a img {
  justify-self: flex-end;
  cursor: pointer;
  opacity: 0.6;
  width: 5rem;
  height: auto;
}

.top-bar-agua a i:hover {
  transition: all 1s;
  color: var(--roxo-principal);
  position: relative;
}

.top-bar-agua a img:hover {
  transition: all 1s;
  opacity: 1
}
</style>
