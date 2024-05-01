<template>
  <transition name="fade" mode="out-in">
    <div v-if="isVisible" class="container-powerbi">
      <h1>Dashboard de Água</h1>
      <iframe :src="powerBiSrc" frameborder="0" allowfullscreen="true"></iframe>
    </div>
  </transition>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isVisible: false,
      powerBiSrc: 'https://app.powerbi.com/groups/me/reports/aa6a9cb1-9104-489a-9214-23cbb5bf6e5a?ctid=cf72e2bd-7a2b-4783-bdeb-39d57b07f76f&pbi_source=linkShare&bookmarkGuid=69166d83-b5c7-4210-8793-103aeae51f77',
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

.container-powerbi {
  margin-left: 4%;
  margin-top: 3%;
  margin-right: 4%;
  margin-bottom: 3%;
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
}

.container-powerbi h1 {
  color: #776ae3;
  font-size: 6vmin;
  font-weight: 400;
}

.container-powerbi iframe {
  align-self: center;
  justify-self: center;
}
</style>
