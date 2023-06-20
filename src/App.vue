<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/artists">Artistas</RouterLink>
    <RouterLink to="/gen-test">Form Generator Test</RouterLink>
  </header>

  <div class="main-page">
    <RouterView />
  </div>
</template>

<style lang="less">
header {
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
}

.main-page {
  width: 100%;
  height: 100vh;
}
</style>