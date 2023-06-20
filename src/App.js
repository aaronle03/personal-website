import React from 'react';
import './App.css';

function Main() {
  const scrollToAboutMe = (event) => {
    event.preventDefault();
    const aboutMeSection = document.getElementById('aboutMe');
    aboutMeSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToResume = (event) => {
    event.preventDefault();
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToProjects = (event) => {
    event.preventDefault();
    const projectSection = document.getElementById('projects');
    projectSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToExtracurriculars = (event) => {
    event.preventDefault();
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }

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
          <li><a href="#extracurricular" onClick={scrollToExtracurriculars}>Extracurricular</a></li>
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
          <a href="https://github.com/aaronle03"><img src="../img/github.png" alt="GitHub"></img></a>
          <a href="https://www.linkedin.com/in/aaronctle/"><img src="../img/linkedin.png" alt="LinkedIn"></img></a>
          <a href="mailto:aaronle5621@gmail.com"><img src="../img/email.png" alt="Email"></img></a>
        </div>
        <button id="scrollButton" onClick={scrollToAboutMe}><img src="../img/github.png" alt="scroll down button"></img></button>
      </div>

      <div className="aboutMe" id="aboutMe">
        <p>About Me</p>
        <h1>Let me introduce myself.</h1>
        <h2>I'm an engineer looking for roles within tech! I'm part of UC Santa Cruz class of 2025 B.A. in Computer Science. My primary interest are web development and machine learning but I continue to learn more things everyday!</h2>
      </div>

      <div className="resume" id="resume">
        <p>Resume section</p>
      </div>

      <div className="projects" id="projects">
        <p>Projects section</p>
      </div>

      <div className="extracurriculars" id="extracurriculars">
        <p>Extracurricular section</p>
      </div>

      <div className="contact" id="contact">
        <p>Contact section</p>
      </div>

      <footer className="footer">
        <p>
          footer area
        </p>
      </footer>
    </div>
  );
}

export default Main;
