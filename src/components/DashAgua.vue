<template>
  <transition name="fade" mode="out-in">
    <div
      v-if="isVisible"
      class="container-card-agua"
      title="Acessar Dash de Água"
      @click.prevent="dashRedirect()"
    >
    <div class = "img-container">
      <img src="../assets/icons/agua.png" />
      </div>
      <div>
      <h2>Água</h2>
    </div>
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
  flex-wrap: row nowrap;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(0, 80, 252);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  transition-duration: 2s;
  /* border-radius: 15px; */
  width: min(35vw, 75vh);
  height: min(35vw, 30vh);
  cursor: pointer;
  background-color: var(--branco-auxiliar);
  border: 1px solid var(--cinza-auxiliar-0-5);
}

.container-card-agua {
  flex-direction: row-reverse;
  justify-content: flex-start;
  padding-right: 5%;
}
.container-card-agua .img-container{
  
}
.container-card-agua .img-container img {
  width: 80%;
  /* flex-direction: column; */
  height: 80%;
  object-fit: fill;
  opacity: 1;
  border-radius: 50%;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 5%;
  padding-bottom: 5%;
 
  /* margin-top: 50%; */
  background-color: var(--branco-auxiliar-0-8);
  border: 2px solid var(--azul-light-0-8);
}

.container-card-agua h2 {
  font-size: 1em;
  font-weight: 200;
  color: var(--cinza-auxiliar-0-5-2);
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
  /* transition: all 0.1s; */
  font-size: 1.2em;
  border: 1px solid rgb(0, 80, 252);
  transition-duration: 1.5s;
  box-shadow: 3px 3px 10px rgba(0, 80, 252, 0.2);
  width: min(35vw, 80vh);
  height: min(35vw, 35vh);
}

.container-card-agua:hover {
  /* background-color: var(--azul-contraste-0-6); */
  /* background-image:linear-gradient(rgba(255,255,255,1), rgba(255,255,255,1)), url("../assets/dash_card_bg/bg_agua1.webp"); */
  background-blend-mode: multiply;
  /* transition: background-image 3s; */
}

.container-card-agua:hover img {
  background-color: var(--branco-auxiliar-0-6);
  border: 3px solid var(--verde-contraste);
  /* opacity: 0.1; */
  /* transition: all 0.1s; */
}
</style>
