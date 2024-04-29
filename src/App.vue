<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <!-- Menu lateral -->
    <div class="sidebar">

      <div class="logo">
        <img src="./assets/slogan.png" class="slogan">
        <img src="./assets/tecsus.png">
      </div>

      <nav>
        <RouterLink to="/"><i class="fa-solid fa-house"></i>INÍCIO</RouterLink>
        <RouterLink to="/reports"><i class="fa-solid fa-file-contract"></i>RELATÓRIOS</RouterLink>
        <RouterLink to="/alerts"><i class="fa-solid fa-bell"></i>ALERTAS</RouterLink>
      </nav>
    </div>

  </div>

  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
  
</template>

<style scoped>
@import "./assets/base.css";


/* Definindo a animação para mover a imagem para a direita e reiniciar à esquerda */
@keyframes slide-and-loop-img {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  7% {
    transform: translateX(0);
    opacity: 1;
  }
  30% {
    transform: translateX(0);
  }
  45% {
    transform: translateX(150%);
  }
  46% {
    visibility: hidden;
  }
  100% {
    transform: translateX(270%);
    opacity: 1;
  }
}
  
@keyframes slide-and-loop-text {
  0% {
    visibility: hidden;
  }
  55% {
    visibility: visible;
    opacity: 1;
  }
  95% {
    opacity: 0;
  }
  100% {
    visibility: hidden;
  }
}

@keyframes slide-and-loop-background {
  0% {
    background-color: white;
  }
  70% {
    background-image: url('./assets/fundo-natureza.gif');
    background-size: cover;
  }
  90% {
    background-image: url('./assets/fundo-natureza.gif');
    background-size: cover;
  }
  95% {
    background-color: white;
  }
  100% {
    background-color: white;
  }
}

/* estilização dos elementos do single page */
.app-container {
  display: flex;
  flex-direction: column;  
  align-items: center;  
  justify-content: flex-start;
}

.sidebar {
  position: fixed;  
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: flex-start;
  gap: 5rem;
  top: 0;
  left: 0;
  width: 20%;
  height: 100vh;  
  background-color: #776AE3;  
  color: white;
  padding-top: 2.5%;
}

.logo {
  border: 3px solid rgba(224, 224, 225, 0.8);
  border-radius: 20px;
  padding: 3.5%;
  background-color: white;
  box-shadow: 0 0 15% rgba(224, 224, 225, 0.3);
  overflow: hidden;  /* Impedindo que a imagem quebre o layout ao mover */
  position: relative;  /* Manter a posição do container da logo */
  height: 25%;
  width: 80%;
  display: flex;
  flex-direction: row;
  animation: slide-and-loop-background 15s linear infinite;
}

.logo .slogan {
  visibility: hidden;
  color: black;
  animation: slide-and-loop-text 15s linear infinite;
  position: absolute;
  opacity: 0;
  height: 93%;
  width: 93%;
}

.logo img {
  animation: slide-and-loop-img 15s linear infinite;
  position: absolute;
  height: 93%;
  width: 93%;
}

nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 100%;
  text-align: center;
  font-weight: 800;
}

nav a.router-link-exact-active, nav a.router-link-exact-active i {
  transition: all 1s;
  color: #88E570;
  background-color: #E0E0E1;
  padding-left: 5%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px; 
}

nav a.router-link-exact-active:not(nav a.router-link-exact-active i) {
  transition: all 2s;
  border: 1px solid #88E570;
  border-right-color: transparent;
}

nav a.router-link-exact-active:hover {
  transition: all 1s;
  opacity: 0.8;
  padding-left: 4%;
}

nav a {
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  margin-left: 13%;
}

nav a:hover {
  transition: all 1s;
  opacity: 0.6;
  padding-left: 3%;
}

nav a i {
  font-size: 100%;
  padding-right: 5%;
  color: white;
}

/* Media Queries para responsividade */
@media (min-width: 1024px) {

}
</style>
