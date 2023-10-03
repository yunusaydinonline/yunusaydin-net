<template>
  <div id="Header" class="page" :style="{height: $root.windowHeight + 'px'}">
    <div class="page-content">
      <img src="../assets/images/avatar.jpg" alt="yunus aydın"/>
      <div class="slogan">
        <p>Hello there! I'm <span class="name">YUNUS AYDIN</span>,</p>
        <p>I'm a <span class="title">senior mobile developer.</span></p>
        <p>I develop awesome things with a great passion for you.</p>
        <p class="lead">You can learn more about me from my CV.</p>
        <div class="cv-buttons">
          <a href="cv/Yunus-Aydin-CV-EN.pdf" class="btn btn-light btn-block" target="_blank">ENGLISH</a>
          <a href="cv/Yunus-Aydin-CV-TR.pdf" class="btn btn-light btn-block" target="_blank">TURKISH</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
};
</script>
