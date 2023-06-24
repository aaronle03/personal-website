import React from 'react';
import './App.css';
import tyler from "../src/assets/img/tyler.jpg"
import etch from "../src/assets/img/etchasketch.png"
import translation from "../src/assets/img/telegram.png"
import inspire from "../src/assets/img/inspirenow.jpg"

function Main() {
  const scrollToAboutMe = (event) => {
    event.preventDefault();
    const aboutMeSection = document.getElementById('aboutMe');
    aboutMeSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToResume = (event) => {
    event.preventDefault();
    const contactSection = document.getElementById('resume');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToProjects = (event) => {
    event.preventDefault();
    const projectSection = document.getElementById('projects');
    projectSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (event) => {
    event.preventDefault();
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
  

  return (
    <div className="mainPage">

      <div className="homePage">
      <header className="header">
        <ul>
          <li><a href="#aboutMe" onClick={scrollToAboutMe}>About Me</a></li>
          <li><a href="#resume" onClick={scrollToResume}>Resume</a></li>
          <li><a href="#projects" onClick={scrollToProjects}>Projects</a></li>
          <li><a href="#contact" onClick={scrollToContact}>Contact</a></li>
        </ul>
      </header>
        <h1>
          Aaron Le
        </h1>
        <h2>
          Software Engineer | Web Developer | CS @ UCSC
        </h2>
        <div className="imgLinks">
          <a href="https://github.com/aaronle03"><img src="https://icongr.am/fontawesome/github.svg?size=32&color=ffffff" alt="GitHub"></img></a>
          <a href="https://www.linkedin.com/in/aaronctle/"><img src="https://icongr.am/entypo/linkedin.svg?size=32&color=ffffff" alt="LinkedIn"></img></a>
          <a href="mailto:aaronle5621@gmail.com"><img src="https://icongr.am/entypo/email.svg?size=32&color=ffffff" alt="Email"></img></a>
        </div>
        <button id="scrollButton" onClick={scrollToAboutMe}><img src="https://icongr.am/entypo/arrow-down.svg?size=45&color=ffffff" alt="Down Arrow"></img></button>
      </div>

      <div className="aboutMe" id="aboutMe">
        <p>About Me</p>
        <h1>Let me introduce myself 👋</h1>
        <section className="aboutMeBio">
          <span class="profilePicture"></span>
          <h2>I am an aspiring engineer eagerly exploring diverse opportunities in the ever-evolving tech industry. Currently enrolled in UC Santa Cruz's class of 2025, pursuing a B.A. in Computer Science. I'm very interested in Full-Stack Development and my experience in my internship and in building this website have helped me grow my knowledge. In addition, I am drawn to AI and machine learning models.</h2>
        </section>
        <section className="aboutMeTechStack">
          <p>Tech Stack</p>
          <section className="techStackImg">
            <img src="https://icongr.am/devicon/python-plain.svg?size=50&color=ffffff" alt="python"></img>
            <img src="https://icongr.am/devicon/c-plain.svg?size=50&color=ffffff" alt="C logo"></img>
            <img src="https://icongr.am/devicon/cplusplus-plain.svg?size=50&color=ffffff" alt="C++ logo"></img>
            <img src="https://icongr.am/devicon/html5-plain.svg?size=50&color=ffffff" alt="HTML5 Logo"></img>
            <img src="https://icongr.am/devicon/css3-plain.svg?size=50&color=ffffff" alt="CSS Logo"></img>
            <img src="https://icongr.am/devicon/javascript-plain.svg?size=50&color=ffffff" alt="JavaScript logo"></img>
            <img src="https://icongr.am/devicon/react-original.svg?size=50&color=ffffff" alt="react logo"></img>
            <img src="https://icongr.am/devicon/angularjs-plain.svg?size=50&color=ffffff" alt="angular logo"></img>        
          </section>
        </section>
      </div>

      <div className="resume" id="resume">
        <section className="resumeHeader">
          <h3>Resume</h3>
          <h1>More of my credentials.</h1>
          <p>Here are my work experiences and education.</p>
        </section>
        <section className="workExperience">
          <h1>Work Experience</h1>
          <div className="job">
            <section className="jobInfo">
              <h2>Web Developer Intern</h2>
              <h3>May 2023 - Present</h3>
            </section>
            <img src="https://icongr.am/clarity/terminal.svg?size=60&color=currentColor" alt="terminal"></img>
            <section className="jobBio">
              <h3>Tech4Good</h3>
              <p>Developed and maintained responsive websites using <b>HTML5, CSS3, JavaScript, Angular and TypeScript.</b> Created multiple web modules and components for group projects.</p>
            </section>
          </div>
          <div className="job">
          <section className="jobInfo">
              <h2>Prospect Development Intern</h2>
              <h3>Jan 2022 - Present</h3>
            </section>
            <img src="https://icongr.am/clarity/pie-chart.svg?size=60&color=currentColor" alt="pie chart"></img>
            <section className="jobBio">
              <h3>UC Santa Cruz</h3>
              <p>Managed and organized personal donor data using BlackBaud and BBFPM databases, providing crucial support to the university's fundraising department.</p>
            </section>
          </div>
          <div className="job">
          <section className="jobInfo">
              <h2>Summer Camp Counselor</h2>
              <h3>June 2023 - August 2023</h3>
            </section>
            <img src="https://icongr.am/clarity/users.svg?size=60&color=currentColor" alt="people"></img>
            <section className="jobBio">
              <h3>City of Walnut Creek</h3>
              <p>Guided and oversaw groups of 15-20 students in diverse extracurricular activities, cultivating teamwork, fostering individual growth, and fostering an engaging learning environment.</p>
            </section>
          </div>
          <div className="job">
          <section className="jobInfo">
              <h2>STEM Camp Instructor</h2>
              <h3>June 2022 - August 2022</h3>
            </section>
            <img src="https://icongr.am/clarity/users.svg?size=60&color=currentColor" alt="people"></img>
            <section className="jobBio">
              <h3>Brickz4Kidz</h3>
              <p>Led and supervised groups of 15-20 students in diverse extracurricular activities, promoting teamwork, critical thinking, and individual growth while enhancing their enthusiasm and understanding of STEM subjects through clear instructions and hands-on experiments.</p>
            </section>
          </div>
        </section>

        <section className="education">
          <h1>Education</h1>
          <div className="school">
            <section className="schoolInfo">
              <h2>Bachelor Degree</h2>
              <h3>September 2021 - June 2025</h3>
            </section>
            <img src="https://icongr.am/clarity/library.svg?size=60&color=currentColor" alt="book"></img>
            <section className="schoolBio">
              <h3>University of California - Santa Cruz</h3>
              <p>GPA 3.5. Active participant in multiple clubs such as VSA, Google Student Developers Club and BluePrint!</p>
            </section>
          </div>
          <div className="school">
            <section className="schoolInfo">
              <h2>Online Certification</h2>
              <h3>February 2022 - August 2022</h3>
            </section>
            <img src="https://icongr.am/clarity/library.svg?size=60&color=currentColor" alt="book"></img>
            <section className="schoolBio">
              <h3>The Odin Project</h3>
              <p>Facilitated an open-source program instructing Front-End technologies, including HTML, CSS, and JavaScript. Successfully completed six diverse side projects as part of the course curriculum.</p>
            </section>
          </div>
          <div className="school">
            <section className="schoolInfo">
              <h2>High School Degree</h2>
              <h3>August 2017 - June 2021</h3>
            </section>
            <img src="https://icongr.am/clarity/library.svg?size=60&color=currentColor" alt="book"></img>
            <section className="schoolBio">
              <h3>Las Lomas High School</h3>
              <p>Took 6 AP courses and participated and held leadership positions in various clubs such as HOSA and the Red Cross Club.</p>
            </section>
          </div>
        </section>
      </div>

      <div className="projects" id="projects">
        <h2>Projects</h2>
        <h1>Check out my creations.</h1>
        <section className="projectGrid">
          <a href="https://github.com/aaronle03/landing-page">
            <p>Mock E-Commerce/Music Site</p>
            <img src={tyler} alt="Tyler the Creator" width="300" height="300"/>
          </a>
          <a href="https://github.com/aaronle03/Etch-A-Sketch">
            <p>Etch-A-Sketch</p>
            <img src={etch} alt="greg" width="300" height="300"/>
          </a>
          <a href="https://github.com/aaronle03/Telegram-Translation-Bot">
            <p>Telegram Translation Bot</p>
            <img src={translation} alt="greg" width="300" height="300"/>
          </a>
          <a href="https://github.com/aaronle03/InspireNow">
            <p>InspireNow</p>
            <img src={inspire} alt="Personal Website" width="300" height="300"/>
          </a>
        </section>
      </div>

      <div className="contact" id="contact">
        <section className="contactHeader">
          <h3>Contact</h3>
          <h1>I'd Love To Connect With You.</h1>
          <h2>Let me get to know more about you.</h2>
        </section>
        <section className="contactInfo">
          <div className="contactEmail">
            <h2>Email Me At</h2>
            <a href="mailto:aaronle5621@gmail.com"><h3>aaronle5621@gmail.com</h3></a>
          </div>
          <div className="contactEmail">
            <h2>Let's Connect</h2>
            <a href="https://www.linkedin.com/in/aaronctle/"><h3>LinkedIn Profile</h3></a>
          </div>
        </section>
      </div>

      <footer className="footer">
        Edit By Aaron Le - © Copyright 2023 - Design by Aaron Le
      </footer>
    </div>
  );
}

export default Main;
