<template>
  <!-- Menu lateral -->
  <div class="sidebar">
    <div class="logo">
      <img
        src="../assets/logo/tecsus.png"
        class="logo_img"
        :style="animationDelay ? 'animation-delay: 1s;' : ''"
        @animationiteration="changeAnimationDelay()"
      />
    </div>

    <nav class="links">
      <RouterLink to="/"><i class="fa-solid fa-house"></i>INÍCIO</RouterLink>
      <RouterLink to="/reports"><i class="fa-solid fa-file-contract"></i>RELATÓRIOS</RouterLink>
      <RouterLink to="/alerts"><i class="fa-solid fa-bell"></i>ALERTAS</RouterLink>
      <RouterLink to="/importar-dados"><i class="fa-solid fa-file-csv"></i>IMPORTAR</RouterLink>
    </nav>
  </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'

export default {
  data() {
    return {
      animationDelay: false
    }
  },

  methods: {
    changeAnimationDelay() {
      this.animationDelay = true
    }
  }
}
</script>

<style>
@import '../assets/css/base.css';

.sidebar {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5rem;
  top: 0;
  left: 0;
  width: calc(100vw - 80vw);
  height: 100vh;
  background-color: var(--roxo-principal);
  color: var(--branco-auxiliar);
  padding-top: 2.5%;
}

.logo {
  border: 3px solid var(--platinum-0-8);
  border-radius: 20px;
  padding: 3.5%;
  background-color: white;
  box-shadow: 0 0 15% var(--platinum-0-3);
  overflow: hidden;
  position: relative;
  height: 20%;
  width: 50%;
  display: flex;
  flex-direction: row;
}

.logo .slogan {
  visibility: hidden;
  animation: slide-and-loop-text 15s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
}

.logo img {
  /* animation: slide-and-loop-img 15s linear infinite; */
  position: absolute;
  height: 93%;
  width: 93%;
  top: 2%;
  right: 4%;
}

.links {
  width: calc(20vw - 1.4vw);
  display: flex;
  flex-direction: column;
  gap: calc(100vh - 96.5vh);
  font-size: min(calc(100vh - 90vh), calc(20vw - 18.5vw));
  text-align: center;
  font-weight: 800;
  margin-left: calc(20vw - 18.5vw);
}

.links a.router-link-exact-active,
.links a.router-link-exact-active i {
  transition: all 1s;
  color: var(--roxo-principal);
  background-color: var(--platinum);
  padding-left: 5%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.links a.router-link-exact-active:not(nav a.router-link-exact-active i) {
  transition: all 2s;
  border: 1px solid var(--verde-contraste);
  border-right-color: transparent;
}

.links a.router-link-exact-active:hover {
  transition: all 1s;
  padding-left: 4%;
}

.links a {
  color: var(--branco-auxiliar);
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  margin-left: 13%;
}

.links a:hover:not(nav a.router-link-exact-active:hover) {
  transition: all 1s;
  opacity: 0.6;
  padding-left: 3%;
}

.links a i {
  font-size: 100%;
  padding-right: 5%;
  color: var(--branco-auxiliar);
}
</style>
