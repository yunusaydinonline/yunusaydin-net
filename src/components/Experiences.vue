<template>
  <div id="Experiences" class="content-section">
    <div class="content-header">
      <h1>EXPERIENCES</h1>
      <h2>AN EXCITING JOURNEY IN PROFESSIONAL LIFE</h2>
    </div>
    <div class="container">
      <p class="separated-text">Well, first of all, I have worked at different positions with different companies and learned a lot of skills. It's been more than 15 years since I
        started to build a career on software development. When I was a teenager all I wanted was to play guitar in a rock band for the rest of my life. But here I am, an
        experienced and passionate full-stack software developer. I listed some of my experiences below.</p>
      <div class="experience-container">
        <ul>
          <li v-for="(experience, index) in $root.experiences" :key="index + '_experiences'">
            <div class="experience-icon">
              <img src="../assets/images/coding-icon.svg" alt="">
            </div>
            <div class="experience-content">
              <div class="experience-header">
                {{ experience.title }} <span class="company-info">at {{ experience.company }}</span>
                <span>{{ experience.dateAndLocation }}</span>
              </div>
              <div class="experience-details">
                <p>
                  <strong>Job Description:</strong> {{ experience.jobDescription }}
                </p>
                <p v-if="experience.details.detailsList.length > 0" class="mb-1">
                  <strong>Responsible for:</strong>
                </p>
                <ul v-if="experience.details.detailsList.length > 0">
                  <li v-for="(detail, index) in experience.details.detailsList" :key="index + '_details'">{{ detail }}</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="content-padding"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experiences'
}
</script>

<style scoped>

</style>