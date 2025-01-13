import React from 'react'
import './Experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";
import { BsPatchCheck } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
<BsPatchCheck />



const Experience = () => {
  const { t } = useTranslation();
  return (
    <section id='experience'>
      <h5>{t("What Skills I have")}</h5>
      <h2>{t("My Techstack")}</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>{t("Frontend Development")}</h3>

          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>{t("Proficient")}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>{t("Intermediate")}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>{t("Proficient")}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>{t("Experienced")}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Angular</h4>
                <small className='text-light'>{t("Experienced")}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>{t("Proficient")}</small>
              </div>
            </article>
          </div>

        </div>

        <div className="experience__backend">
          <h3>{t("Backend Development")}</h3>

          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>{t("Proficient")}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>{t("Proficient")}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>{t("Intermediate")}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>{t("Experienced")}</small>
              </div>
            </article>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience