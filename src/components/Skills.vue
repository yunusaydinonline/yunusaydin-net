<template>
  <div id="Skills" class="content-section">
    <div class="content-header">
      <h1>SKILLS</h1>
      <h2>LEARNING NEVER ENDS!</h2>
    </div>
    <div class="container">
      <p class="separated-text">I have listed my most frequently used skills in programming below and I use many of
        them actively in professional life.</p>
      <p class="lead text-center">
        <strong>Top Skills</strong>
      </p>

      <div class="row top-skills">
        <div class="col-md text-center" v-for="(skill, index) in $root.topSkills" :key="index + '_top_skill'">
          <div class="boxed-column">
            <img v-bind:src="require(`../assets/images/${skill.image}`)" :title="skill.title" :alt="skill.title"/>
            <h6>{{ skill.title }}</h6>
            <p>{{ skill.description }}</p>
          </div>
        </div>
      </div>

      <p class="lead text-center mb-5">
        <strong>Programming Languages, Frameworks & Libraries and Others</strong>
      </p>

      <ul class="skills">
        <li v-for="(language, index) in $root.otherSkills" :key="index + '_programming_language'">
          <img src="../assets/images/check-icon.svg" alt="Check">
          {{ language }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills'
}
</script>

<style scoped>

</style>