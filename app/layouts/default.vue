<template>
  <div class="layout">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@widgets/header/Header.vue';
import Footer from '@widgets/footer/Footer.vue';
</script>

<style scoped lang="scss">
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}
</style>
