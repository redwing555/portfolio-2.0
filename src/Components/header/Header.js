import React from 'react';
import './Header.css';
import CTA from './CTA';
import me from '../../assets/img/me.png';
import Socials from './Socials';

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>
          Hello I am
        </h5>
        <h1>Houssam HICHAMI</h1>
        <h5 className="text-light">Fullstack Developper</h5>
        <CTA />
        <Socials />
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href="#contact" className="scroll__down"> Scroll Down</a>
      </div>

    </header>

  );
}

export default Header;
