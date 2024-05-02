<template>
  <transition name="fade" mode="out-in">
    <div v-if="isVisible" class="container-powerbi">
      <h1>Dashboard de Água</h1>
      <iframe title="ModeloDashboardTecSUS" :src="powerBiSrc" frameborder="0" allowFullScreen="true"></iframe>
    </div>
  </transition>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isVisible: false,
      powerBiSrc: 'https://app.powerbi.com/reportEmbed?reportId=aa6a9cb1-9104-489a-9214-23cbb5bf6e5a&autoAuth=true&ctid=cf72e2bd-7a2b-4783-bdeb-39d57b07f76f',
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
  color: #776ae3;
  font-size: 6vmin;
  font-weight: 400;
}

.container-powerbi iframe {
  align-self: center;
  justify-self: center;
  width: 73vw;
  height: 100vh;
}
</style>
