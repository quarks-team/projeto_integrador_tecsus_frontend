<template>
    <transition name="fade" mode="out-in">
        <div v-if="isVisible" class="container-card">
            <img src="../assets/agua.png">
            <h2>Dashboard de contas de Água</h2>
            <RouterLink to="/agua">ACESSE AQUI</RouterLink>
        </div>
    </transition>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'

export default {
  data() {
    return {
      isVisible: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true;
    }, 1000);
  }
}
</script>

<style>
@import "../assets/base.css";

.container-card {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    justify-content: center;
    align-items: center;
    border: 1px solid #88E570;
    box-shadow: 2% 2% 50% 5% #C0C0C0;
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
    color: #88E570;
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