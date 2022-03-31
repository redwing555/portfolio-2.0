import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [responsive, setResponsive] = useState(false);
  const [times, setFaTimes] = useState(false);

  const toggleResponsive = () => {
    setResponsive((prev) => !prev);
    setFaTimes(((prev) => !prev));
  };

  const links = [
    {
      id: 1,
      path: '/about',
      text: 'About',
    },
    {
      id: 2,
      path: '/myExperience',
      text: 'Experience',
    },
    {
      id: 3,
      path: '/testimonials',
      text: 'Testimonials',
    },

    {
      id: 4,
      path: '/contact',
      text: 'contact',
    },

  ];

  return (
    <div className="nav-container">
      <nav>

        <ul className={responsive ? 'sidebar responsive' : 'sidebar'}>

          {links.map((link) => (
            <li key={link.id} className="nav-link">
              <NavLink className="link" to={link.path} exact="true">
                {link.text}
              </NavLink>
            </li>
          ))}

        </ul>

        <button className="icon" type="button" onClick={toggleResponsive}>
          <i className={times ? 'fa fa-bars fa fa-times' : 'fa fa-bars'} />
        </button>
      </nav>
    </div>

  );
}

export default Header;
