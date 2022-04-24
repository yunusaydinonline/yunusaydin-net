<template>
  <div id="Header" class="header" :style="{height: $root.windowHeight + 'px'}">
    <div class="vertical-wrapper">
      <div class="vertical-alignment">
        <div class="banner-img">
          <img src="../assets/images/memoji-header.png" alt="" class="animated-memoji"/>
          <div class="slogan">
            Hello there! I'm <span class="name">YUNUS AYDIN</span>,<br>
            I'm a <span class="title">mobile developer.</span><br>
            I develop awesome things with a great passion for you.
          </div>
        </div>
      </div>
    </div>
    <img class="scroll-animation scroll-icon-animation" src="../assets/images/mouse-icon.svg" alt="mouse-icon">
  </div>
</template>

<script>
export default {
  name: 'Header'
};
</script>