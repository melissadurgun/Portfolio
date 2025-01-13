import React from 'react'
import './Footer.css'
import CV from '../../assets/cv.png'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <a href="#" className='footer__logo'>MELISSA DURGUN</a>

      <ul className='permalinks'>
        <li><a href="#">{t("Home")}</a></li>
        <li><a href="#about">{t("About")}</a></li>
        <li><a href="#experience">{t("Experience")}</a></li>
        <li><a href="#services">{t("Services")}</a></li>
        <li><a href="#portfolio">{t("Projects")}</a></li>
        <li><a href="#contact">{t("Contact")}</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/melissa-durgun-628a982a9/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/melissadurgun" target='_blank'><FaGithub /></a>
        <a href={CV} download><PiCertificateBold /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Melissa Durgun. {t("All rights reserved")}</small>
      </div>

    </footer>
  )
}

export default Footer