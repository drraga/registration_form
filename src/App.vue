<template>
  <div id="app">
    <HeaderBlock />
    <RouterView :key="$route.fullPath" />
    <FooterBlock />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import HeaderBlock from './components/HeaderBlock.vue'
import FooterBlock from './components/FooterBlock.vue'

</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,500&family=Montserrat:wght@400;500;600;700;800&family=Roboto&display=swap');
</style>
