<template>
  <transition name="fade" mode="out-in">
    <div v-if="isVisible" class="container-anexo">
      <div class="container-header-anexo">
        <div class="titulo-descricao">
          <h1>Importar Dados</h1>
          <p><b>Importe seus dados para que o processo de ETL seja realizado!</b></p>
        </div>
        <div class="img-csv">
          <img src="../assets/icons/csv3.gif" />
        </div>
      </div>
      <AttachFile class="anexar"></AttachFile>
    </div>
    <div v-else class="entre-paginas">
      <i class="fa-solid fa-file-csv"></i>
    </div>
  </transition>
</template>

<script lang="ts">
import AttachFile from '../components/AttachFile.vue'

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

/* Animação para o background do ícone de csv principal */
@keyframes fadeInBackground {
  0% {
    background-color: var(--azul-contraste-0); /* Inicia transparente */
    border: 2px solid transparent; /* Bordas inicialmente transparentes e finas */
  }
  100% {
    background-color: var(--azul-contraste-0-6); /* Cor final após a animação */
    border: 3px solid var(--verde-contraste); /* Bordas finais visíveis e coloridas */
  }
}

.container-anexo {
  margin-left: 4%;
  margin-top: 3%;
  margin-right: 4%;
  margin-bottom: 3%;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

.container-header-anexo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2%;
}

.titulo-descricao {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.titulo-descricao h1 {
  color: var(--roxo-principal);
  font-size: 6vmin;
  font-weight: 400;
}

.titulo-descricao p {
  color: var(--azul-light);
  font-size: 3vmin;
  font-weight: 200;
  font-style: italic;
}

/* Estilização do contêiner que envolve a imagem */
.img-csv {
  position: relative;
  display: flex;
  width: 25%;
  padding: 12%;
  right: 5%;
  overflow: hidden;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  z-index: -1;
  box-shadow: 0 4px 6px var(--azul-contraste-0-1);
}

/* Configuração do pseudo-elemento ::before para criar o efeito de delay e transição */
.img-csv::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background-color: var(--azul-contraste-0); /* Inicialmente transparente */
  animation: fadeInBackground 2s ease forwards;
  box-sizing: border-box; /* Garante que a borda seja incluída na dimensão total */
}

/* Assegurando que a imagem fique visível acima do pseudo-elemento */
.img-csv img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-right: 4%;
  padding-bottom: 4%;
  object-fit: cover;
  border-radius: 50%;
}

.container-anexo .anexar {
  justify-self: center;
  align-self: center;
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

@media (max-width: 600px) {
  .img-csv {
    width: 30%;
    height: 30%;
  }
}
</style>
