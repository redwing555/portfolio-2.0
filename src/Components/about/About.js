import React from 'react';
import './About.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import about from '../../assets/img/about.jpg';

function About() {
  return (
    <section id="about">
      <h5>
        Get to know
      </h5>
      <h2> About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={about} alt="about me" className="about__img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>50+ completed projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.  sollicitudin luctus ipsum.
            Etiam consequat fringilla felis, vel feugiat erat dapibus
            vel. Suspendisse porta erat ut odio tristique consectetur.
          </p>
          <a href="#contact" className="btn btn-primary"> Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
