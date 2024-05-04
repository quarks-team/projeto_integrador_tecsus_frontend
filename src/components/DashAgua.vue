<template>
  <transition name="fade" mode="out-in">
    <div
      v-if="isVisible"
      class="container-card-agua"
      title="Acessar Dash de Água"
      @click.prevent="dashRedirect()"
    >
      <img src="../assets/icons/agua.png" />
      <!-- <h2>Dashboard de contas de Água</h2> -->
      <!-- <RouterLink to="/agua">ACESSE AQUI <p>☞</p></RouterLink> -->
    </div>
  </transition>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'

export default {
  data() {
    return {
      isVisible: false,
      change_style: false,
      reset_style: false
    }
  },

  mounted() {
    setTimeout(() => {
      this.isVisible = true
    }, 1000)
  },

  methods: {
    dashRedirect() {
      this.$router.push('/agua')
    }
  }
}
</script>

<style>
@import '../assets/css/base.css';

.container-card-agua {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--verde-contraste);
  box-shadow: 2% 2% 50% 5% var(--cinza-auxiliar);
  border-radius: 15px;
  width: min(35vw, 75vh);
  height: min(35vw, 75vh);
  cursor: pointer;
  background-color: var(--azul-contraste-0-6);
  border: 2px solid transparent;
}

.container-card-agua img {
  width: 40%;
  height: auto;
  opacity: 1;
  border-radius: 50%;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 5%;
  padding-bottom: 5%;
  background-color: var(--branco-auxiliar-0-8);
}

.container-card-agua h2 {
  font-size: 1.5em;
  font-weight: 200;
  color: var(--branco-auxiliar);
}

.container-card-agua a {
  transition:
    color 1s,
    font-size 1s;
  text-decoration: none;
  color: var(--verde-contraste);
  font-weight: 400;
  cursor: pointer;
  font-size: 1em;
  margin-bottom: 15%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 0.1%;
  padding-bottom: 0.1%;
  background-color: var(--branco-auxiliar-0-7);
}

.container-card-agua a p {
  font-size: 2.5em;
  padding-left: 1rem;
  margin-bottom: 2%;
}

.container-card-agua:hover {
  transition: all 0.1s;
  font-size: 1.2em;
  border: 3px solid #88e570;
}

.container-card-agua:hover {
  background-color: var(--azul-contraste-0-6);
  background-image: url('../assets/dash_card_bg/bg_agua1.webp');
  background-blend-mode: multiply;
  transition: background-image 3s;
}

.container-card-agua:hover img {
  background-color: var(--branco-auxiliar-0-6);
  border: 3px solid var(--verde-contraste);
  transition: all 0.1s;
}
</style>
