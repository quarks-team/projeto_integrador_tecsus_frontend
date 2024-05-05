<template>
    <transition name="fade" mode="out-in">
    <div v-if="isVisible" class="container-dev">
      <h6>Funcionalidade em desenvolvimento. Assim que concluída, o acesso será liberado.</h6>
      <img src="../assets/icons/lock.gif">
      <p>Redirecionamento em <b>{{ contagem }}s</b></p>
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
      isVisible: false,
      contagem: 10,
      intervalo: 0,
    }
  },
  
  mounted() {
    setTimeout(() => {
      this.isVisible = true
    }, 1000)

    this.intervalo = setInterval(() => {
      // Decrementa o valor da contagem a cada segundo
      if (this.contagem > 0) {
        this.contagem--;
      } else {
        clearInterval(this.intervalo); // Para o intervalo quando a contagem chegar a zero
        this.$router.push('/')
      }
    }, 1000);

  },

  beforeUnmount() {
    clearInterval(this.intervalo); // Limpa o intervalo quando o componente é destruído
  },

}
</script>

<style>
@import '../assets/css/base.css';

.container-dev {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    height: 90vh;
}

.container-dev h6 {
    font-size: 2rem;
    font-style: italic;
    color: var(--azul-light);
}

.container-dev img {
    height: 30rem;
    width: auto;
    border-radius: 50%;
}

.container-dev p {
    font-size: 2rem;
    font-style: bold;
    font-weight: 800;
    color: var(--vermelho-auxiliar-0-8);
}

.container-dev p b {
    font-style: italic;
    color: var(--azul-contraste);
}
</style>