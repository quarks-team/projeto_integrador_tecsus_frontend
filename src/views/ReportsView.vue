<template>
  <div v-if="isVisible" class="container-principal">
    <h1>Relatórios</h1>
    <div class="container-powerbi">
      <iframe
        title="relatorios_tecsus"
        class="report"
        src="https://app.powerbi.com/reportEmbed?reportId=a4efb530-57fb-4dbb-8f05-1948da1cf95e&autoAuth=true&ctid=cf72e2bd-7a2b-4783-bdeb-39d57b07f76f"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
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
@import '../assets/css/base.css';

.container-powerbi iframe {
  align-self: center;
  justify-self: center;
  width: 73vw;
  height: 100vh;
}

.container-principal {
  margin-left: 4%;
  margin-top: 3%;
  margin-right: 4%;
  margin-bottom: 3%;
}

.container-principal h1 {
  color: var(--roxo-principal);
  font-size: 6vmin;
  font-weight: 400;
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
</style>
