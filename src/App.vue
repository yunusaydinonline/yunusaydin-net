<template>
  <div v-if="$root.isLoading" id="app">
    <SplashScreen/>
  </div>
  <div v-else id="app">
    <Header/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import SplashScreen from '@/components/SplashScreen';

export default {
  name: 'app',
  components: {
    Header,
    SplashScreen
  }
};
</script>

<style>
</style>
