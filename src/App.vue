<template>
  <div v-if="$root.isLoading" id="app">
    <SplashScreen/>
  </div>
  <div v-else id="app">
    <Navigation/>
    <Header/>
    <AboutMe/>
    <Experiences/>
    <Skills/>
    <Contact/>
    <Footer/>
    <TermsAndConditions/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Header from '@/components/Header.vue';
import AboutMe from '@/components/AboutMe';
import Experiences from '@/components/Experiences';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';
import TermsAndConditions from '@/components/TermsAndConditions';

export default {
  name: 'app',
  components: {
    TermsAndConditions,
    Footer,
    Contact,
    Skills,
    Experiences,
    AboutMe,
    Header,
    Navigation,
    SplashScreen
  }
};
</script>

<style>
</style>