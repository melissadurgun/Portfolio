import React, { useState, useEffect } from 'react';
import './Nav.css';
import { observeSections } from './observeSections';
import { FiHome, FiUser, FiBookOpen } from "react-icons/fi";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    const cleanup = observeSections(setActiveNav);

    return cleanup; // Cleanup function returned by observeSections
  }, []);

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <FiHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <FiUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <FiBookOpen />
      </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>
        <LuBriefcaseBusiness />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <MdOutlineEmail />
      </a>
    </nav>
  );
};

export default Nav;
