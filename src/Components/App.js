import React from 'react';

import About from './about/About';
import Header from './header/Header';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Experience from './experience/Experience';
import Services from './services/Services';
import Portfolio from './portfolio/Portfolio';
import Testimonials from './testimonials/Testimonials';
import Nav from './Nav/Nav';

const App = () => (

  <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
  </>

);

export default App;
