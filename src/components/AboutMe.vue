<template>
  <div id="AboutMe" class="content-section">
    <div class="content-header">
      <h1>ABOUT ME</h1>
      <h2>LET ME SAY SOMETHING ABOUT WHO I AM</h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-1">
          <div class="about-me-social-links">
            <a :href="$root.profileInfo.linkedinURL" target="_blank" class="linkedin"
               v-b-tooltip.hover.right title="Visit on LinkedIn">
              <img src="../assets/images/linkedin-icon.svg" alt=""/>
            </a>
            <a :href="$root.profileInfo.githubURL" target="_blank" class="github" v-b-tooltip.hover.right
               title="Visit on GitHub">
              <img src="../assets/images/github-icon.svg" alt=""/>
            </a>
          </div>
        </div>
        <div class="col-md-11">
          <div class="content">
            <p class="lead">
              <strong>Hi, I’m Yunus and I’m a mobile developer located in {{ $root.profileInfo.location }}.</strong>
            </p>
            <p>I was born in {{ $root.profileInfo.location }} in 1990. I have been carrying out software development
              since 2010 with a great passion.</p>
            <p>I have started my career as a full-stack software developer early in 2010, thanks to my interest in
              programming. I
              have acquired experiences on programming languages like JavaScript, Swift, Java, Python, C# and countless
              other technologies.</p>
            <p>After 10 years of full-stack software development, in early 2020, I decided to go somewhere more spesific like
              mobile development. I've been working as a mobile developer with a great discovery and production desire
              ever since.</p>
            <p>I've also been actively working as mobile developer for the company VOIPzeker located in Netherlands.</p>
          </div>

          <div class="content">
            <p class="lead">
              <strong>Education</strong>
            </p>
            <p>
              <strong>Sociology</strong><br>
              <span class="education-date">Sep 2015 -</span><br>
              Anadolu University - Eskişehir, Turkey
            </p>
          </div>

          <div class="content">
            <p class="lead">
              <strong>My Interests</strong>
            </p>
            <p>Chaos Theory, Humanoid Robots, Biology, Astronomy, Movies, Music, Fitness</p>
          </div>

          <div class="content">
            <p class="lead">
              <strong>Languages Which I Speak</strong>
            </p>
            <p>
              <strong class="medium">Turkish</strong> (Native),
              <strong class="medium">English</strong> (Upper Intermediate)
            </p>
          </div>

          <div class="content mb-0">
            <p class="lead">
              <strong>Languages Which I Want To Learn</strong>
            </p>
            <p><strong class="medium">Italian, French</strong></p>
          </div>
        </div>
      </div>
      <div class="content-padding"></div>
    </div>
    <div class="my-principles">
      <div class="container">
        <h3 class="principles-heading">MY PRINCIPLES</h3>
      </div>
      <hr/>
      <div class="container-fluid">
        <div class="row">
          <div class="main-column col-md-3 text-center">
            <div class="boxed-column">
              <img src="../assets/images/innovation-icon.png" title="Innovation" alt="Innovation"/>
              <h6>INNOVATION</h6>
              <p>
                As an experienced full-stack software developer that is not
                conservative but that is open to new ideas instead,
                that aims for innovation and development in production and that has an amateur spirit, innovation is one
                of my basic principles.
              </p>
            </div>
          </div>
          <div class="main-column col-md-3 text-center">
            <div class="boxed-column">
              <img src="../assets/images/efficiency-icon.png" title="Efficiency" alt="Efficiency"/>
              <h6>EFFICIENCY</h6>
              <p>
                I am not a person that work less yet produce more, or that work more yet produce less.
                Instead, I work efficiently to offer exceptional and high-quality products into the market,
                and I produce with passion.
              </p>
            </div>
          </div>
          <div class="main-column col-md-3 text-center">
            <div class="boxed-column">
              <img src="../assets/images/happy-customer-icon.png" title="Happy Customer" alt="Happy Customer"/>
              <h6>HAPPY CUSTOMER</h6>
              <p>
                Developing relationship with the customers is the most significant part of my business. I do my best to
                provide you with your dream project without compromising on your plans, and I build the most efficient
                software solution for you.
              </p>
            </div>
          </div>
          <div class="main-column col-md-3 text-center">
            <div class="boxed-column">
              <img src="../assets/images/adaptation-icon.png" title="Adaptation" alt="Adaptation"/>
              <h6>ADAPTATION</h6>
              <p>
                It has always been an exciting experience for me to adapt to new technologies.
                The exponential growth of technology affects all software developers closely and forces them to stay up
                to
                date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe'
};
</script>

<style scoped>
</style>