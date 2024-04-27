<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/Menu.vue'
</script>

<template>
  <div class="app-container">
    <!-- Menu lateral -->
    <Menu/>

  </div>

</template>

<style scoped>
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

/* estilização dos elementos do single page */
.app-container {
  display: flex;
  flex-direction: column;  
  align-items: center;  
  justify-content: flex-start;
}



/* Media Queries para responsividade */
@media (min-width: 1024px) {

}
</style>
