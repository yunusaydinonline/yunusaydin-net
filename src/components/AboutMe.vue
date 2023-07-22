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
                        <p>"We worked with Yunus in a betting industry project which had many moving parts in its tech
                            stack, required high performance data processing both in backend and frontend and also whose
                            success depended on getting the UX right. It was both a challenging and fun project which
                            helped to get our horizons expanded. What amazed me with Yunus as a teammate was how fast he
                            closed his tickets whether they were new features or bug fixes. He was achieving this
                            without introducing any tech debt, keeping the code quality high and not forsaking his usual
                            attention to detail. Once I got to know him better, I understood how he was managing this
                            feat. The guy just loves coding, always trying to keep up with new technologies and has
                            respect for the development process. I believe these qualities make him an ideal teammate
                            and a valuable contributor to ambitious projects like ours."</p>

                        <p><strong>-Ph.D. Izzet Pembeci</strong></p>

                        <p>What I find most satisfying in my job is working on a project from the kickstart meeting
                            until it gets into production and then collecting all the positive and negative feedback
                            from end users and my employers. I value negative ones too since they made me a better
                            developer with each challenging project I delved into. I like working on intriguing and
                            brave ideas. Maybe the next unicorn will rise from your idea. Who knows, let's find out
                            together.</p>

                        <p>Hi there, Yunus here. I'm a full-stack developer with strong and diverse experience
                            from Antalya/Turkey. I have been carrying out software development since 2010 with a great
                            passion.</p>

                        <p>When you work with me, you will get an exclusive service from an expert developer until the
                            end of your project. Also you will get maintainable, code guidelines observed, well
                            documented state of the art code base.</p>

                        <p>Here is what kind of applications I specialize in:</p>

                        <ul>
                            <li>Healthcare and dietitian apps</li>
                            <li>VOIP softphones</li>
                            <li>KPI, dashboard and reporting apps</li>
                            <li>Apps working with online betting APIs like Betradar and Sportradar</li>
                        </ul>

                        <p>In my experience, setting the expectations right for the scope of the tasks in hand and
                            fitting each other is crucial from the get go. This way, we will both achieve our goals and
                            be well pleased at the end of the day.</p>

                        <p>Feel free to send me a message with some information about your goals and what you’re looking
                            for help with. From there, I can answer any questions you have, and we can discuss your
                            project in detail.</p>
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
                            <strong class="medium">English</strong> (Upper Intermediate),
                            <strong class="medium">Russian</strong> (Beginner)
                        </p>
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
                                that aims for innovation and development in production and that has an amateur spirit,
                                innovation is one
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
                                Instead, I work efficiently to offer exceptional and high-quality products into the
                                market,
                                and I produce with passion.
                            </p>
                        </div>
                    </div>
                    <div class="main-column col-md-3 text-center">
                        <div class="boxed-column">
                            <img src="../assets/images/happy-customer-icon.png" title="Happy Customer"
                                 alt="Happy Customer"/>
                            <h6>HAPPY CUSTOMER</h6>
                            <p>
                                Developing relationship with the customers is the most significant part of my business.
                                I do my best to
                                provide you with your dream project without compromising on your plans, and I build the
                                most efficient
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
                                The exponential growth of technology affects all software developers closely and forces
                                them to stay up
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