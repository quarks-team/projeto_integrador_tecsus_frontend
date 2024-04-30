<template>
  <transition name="fade" mode="out-in">
    <div v-if="isVisible" class="container-card">
      <img src="../assets/luz.png" />
      <h2>Dashboard de contas de Luz</h2>
      <RouterLink to="/luz">ACESSE AQUI</RouterLink>
    </div>
  </transition>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'

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
  }
}
</script>

<style>
@import '../assets/base.css';

.container-card {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  border: 1px solid #88e570;
  box-shadow: 2% 2% 50% 5% #c0c0c0;
  border-radius: 15px;
  background-color: white;
}

.container-card img {
  padding-top: 5%;
  width: 20%;
  height: auto;
}

.container-card h2 {
  font-size: 1.5em;
  font-weight: 200;
  color: black;
}

.container-card a {
  text-decoration: none;
  color: #88e570;
  font-weight: 400;
  cursor: pointer;
  font-size: 1em;
  padding-bottom: 10%;
}

.container-card a:hover {
  transition: all 1s;
  font-size: 1.2em;
}
</style>
