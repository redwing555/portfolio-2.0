import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import About from './about/About';
import Header from './header/Header';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Experience from './experience/Experience';
import Testimonials from './testimonials/Testimonials';

const App = () => (

  <Router>
    <Header />
    <Routes>
      <Route
        path="/about"
        element={(

          <About />

          )}
      />
      <Route
        path="/myExperience"
        element={(

          <Experience />

          )}
      />
      <Route
        path="/testimonials"
        element={(

          <Testimonials />

          )}
      />
      <Route
        path="/collection"
        element={(

          <Contact />

          )}
      />
    </Routes>
    <Footer />
  </Router>

);

export default App;
