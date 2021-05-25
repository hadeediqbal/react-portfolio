import React from 'react';

function About() {
    return(
    <section class="page-section" id="about">
      <h2>About Me</h2>
      <div>
      <img class="profile-picture" src={require("../../assets/hadeed.jpg")} alt="Hadeed Iqbal" />
     
        <p>
        My name is Hadeed Iqbal, I'm 27,  I am currently a full-stack web development student at Vanderbilt University with a lot of motivation and dedictaion to achieve my goal in succesfully being able to engineer, debug, improvise, organize, and create solutions in a timely manner. 
        </p>
        <p>
        Currently a student at Vanderbilt University.
        </p>
        <p>
        I love soccer, technology, gaming, and learning new things everyday. I enjoy spending quality family time and working full-time at Coca-Cola!
        </p>
      </div>
    </section>

    )
}

export default About;