<template>
  <transition name="fade" mode="out-in">
    <div v-if="isVisible" class="container-powerbi">
      <div class="container-header-luz">
        <h1>Dashboard de Luz</h1>
        <nav class="top-bar-luz">
          <router-link to="/" title="Início"><i class="fa-solid fa-house"></i></router-link>
          <router-link to="/agua" title="Dash Água"
            ><img src="../assets/icons/agua.png"
          /></router-link>
        </nav>
      </div>
      <iframe title="Dash Luz" :src="powerBiSrc" frameborder="0" allowFullScreen="true"></iframe>
    </div>
    <div v-else class="entre-paginas">
      <img src="../assets/icons/luz.png" />
    </div>
  </transition>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'

export default {
  data() {
    return {
      isVisible: false,
      powerBiSrc:
        'https://app.powerbi.com/reportEmbed?reportId=aa6a9cb1-9104-489a-9214-23cbb5bf6e5a&autoAuth=true&ctid=cf72e2bd-7a2b-4783-bdeb-39d57b07f76f'
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
@import '../assets/css/base.css';

.container-powerbi {
  margin-left: 4%;
  margin-top: 3%;
  margin-right: 4%;
  margin-bottom: 3%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.container-powerbi h1 {
  color: var(--roxo-principal);
  font-size: 6vmin;
  font-weight: 400;
}

.container-powerbi iframe {
  align-self: center;
  justify-self: center;
  width: 73vw;
  height: 100vh;
}

.entre-paginas {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.entre-paginas img {
  width: 10%;
  height: auto;
  opacity: 1;
}

.container-header-luz {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: calc(100vw - 45vw);
  gap: 45.5rem;
}

.container-header-luz h1 {
  justify-self: flex-start;
  white-space: nowrap;
}

.container-header-luz .top-bar-luz {
  justify-self: flex-end;
}

.top-bar-luz {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5rem;
  border-radius: 15px;
  background-color: var(--laranja-auxiliar-0-8);
  padding-left: 3rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 0.3rem;
  position: relative;
  right: 4rem;
}

.top-bar-luz a i {
  justify-self: flex-start;
  color: var(--roxo-principal-0-7);
  font-size: 3rem;
  cursor: pointer;
}

.top-bar-luz a img {
  justify-self: flex-end;
  cursor: pointer;
  opacity: 0.6;
  width: 5rem;
  height: auto;
}

.top-bar-luz a i:hover {
  transition: all 1s;
  color: var(--roxo-principal);
  position: relative;
}

.top-bar-luz a img:hover {
  transition: all 1s;
  opacity: 1;
}
</style>
