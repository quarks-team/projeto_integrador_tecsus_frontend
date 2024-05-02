<template>
  <transition name="fade" mode="out-in">
    <div v-if="isVisible" class="container-card-luz" :style="change_style ? 'background-color: rgba(255, 255, 0, 1); border: 4px solid #88e570;' : 'background-color: rgba(255, 255, 0, 0.3); border: 2px solid #88e570;'">
      <img src="../assets/icons/luz.png" />
      <h2>Dashboard de contas de Luz</h2>
      <RouterLink to="/luz" @mouseover="changeStyle()" @mouseleave="resetStyle()">ACESSE AQUI <p>☞</p></RouterLink>
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
      reset_style: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true
    }, 1000)
  },

  methods: {

    changeStyle() {
      this.reset_style = false;
      this.change_style = true;
    },

    resetStyle() {
      this.change_style = false;
      this.reset_style = true;
    },

  },

}
</script>

<style>
@import '../assets/css/base.css';

.container-card-luz {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  border: 1px solid #88e570;
  box-shadow: 2% 2% 50% 5% #c0c0c0;
  border-radius: 15px;
  position: relative;
  background-image: url('../assets/dash_card_bg/bg_luz2.webp');
  background-color: rgba(255, 255, 0, 0.6); 
  background-blend-mode: multiply;
}

.container-card-luz img {
  margin-top: 5%;
  width: 30%;
  height: auto;
  opacity: 1;
  border-radius: 50%;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 5%;
  padding-bottom: 5%;
  background-color: rgba(255, 255, 255, 0.8);
}

.container-card-luz h2 {
  font-size: 1.5em;
  font-weight: 200;
  color: white;
  opacity: 1;
}

.container-card-luz a {
  transition:
    color 1s,
    font-size 1s;
  text-decoration: none;
  color: rgba(25, 225, 112, 1);
  font-weight: 400;
  cursor: pointer;
  font-size: 1em;
  margin-bottom: 15%;
  opacity: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 0.1%;
  padding-bottom: 0.1%;
  background-color: rgba(255, 255, 255, 0.7);
}

.container-card-luz a p {
  font-size: 2.5em;
  padding-left: 1rem;
  margin-bottom: 2%;
}

.container-card-luz a:hover {
  transition: all 1s;
  font-size: 1.2em;
  color: rgba(125, 225, 112, 1);
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
