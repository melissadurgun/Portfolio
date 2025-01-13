import React from 'react'
import './About.css'
import ME from '../../assets/me.png'
import { FiAward } from "react-icons/fi";
import { BsFolderCheck } from "react-icons/bs";
import { Trans , useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section id='about'>
      <h5>{t("Get to Know")}</h5>
      <h2>{t("About Me")}</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">
            
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>{t("My Experience")}</h5>
              <small>{t("2+ Years")}</small>
            </article>

            <article className='about__card'>
              <BsFolderCheck className='about__icon'/>
              <h5>{t("Projects")}</h5>
              <small>{t("10+ Completed")}</small>
            </article>

          </div>

          <p>
            <Trans i18nKey= "AboutMeText"/>
          </p>

          <a href="#contact"className='btn btn-primary'>{t("Contact Me")}</a>
        </div>

      </div>

    </section>
  )
}

export default About