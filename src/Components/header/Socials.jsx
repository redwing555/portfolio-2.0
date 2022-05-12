import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';

const Socials = () => (
  <div className="header__socials">
    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
      {' '}
      <BsLinkedin />
    </a>
    <a href="https://github.com" target="_blank" rel="noreferrer">
      {' '}
      <BsGithub />
      {' '}
    </a>
    <a href="https://angelist.com" target="_blank" rel="noreferrer">
      {' '}
      <FaAngellist />
    </a>
  </div>
);

export default Socials;
