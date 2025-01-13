import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import useTextRotator from './useTextRotator';
import './Header.css';
import CTA from './CTA.jsx';
import HeaderSocials from './HeaderSocials.jsx'
import { useTranslation } from 'react-i18next';

const Header = () => {

  const [activeNav, setActiveNav] = useState('#');
  
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer", "Data Analyst"];
  const text = useTextRotator(toRotate);

  const { t, i18n } = useTranslation(); // Destructure i18n as well

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng); // Use i18n.changeLanguage instead of t.changeLanguage
  };

  return (
    <header>
      <div className='container header__container'>
        <div className="language__buttons">
          <button onClick={() => handleLanguageChange('en')} className='btn'>English</button>
          <button onClick={() => handleLanguageChange('de')} className='btn'>Deutsch</button>
        </div>
        <h5>{t('Welcome to my Portfolio')}</h5>
        <h1>{t("Hi I'm Melissa ")}
          <span className='wrap'>{text}</span>
        </h1>

        <p>{t("HeaderText")}</p>

        <CTA/>
        <HeaderSocials />

        <a href="#contact" className='scroll__down'>{t("Scroll Down")}</a>

      </div>
    </header>
  )
}

export default Header