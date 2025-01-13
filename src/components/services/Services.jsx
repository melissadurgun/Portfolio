import React from 'react'
import './Services.css'
import { FaCheck } from "react-icons/fa";
import { useTranslation } from 'react-i18next';


const Services = () => {
  const { t } = useTranslation();
  return (
    <section id='services'>
      <h5>{t("What I Offer")}</h5>
      <h2>{t("Services")}</h2>

      <div className="container services__container">

        {/* UX/UI */}

        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>{t("UX1")}</p>
            </li>

            <li>
              <FaCheck className='service__list-icon'/>
              <p>{t("UX2")}</p>
            </li>

            <li>
              <FaCheck className='service__list-icon'/>
              <p>{t("UX3")}</p>
            </li>

            <li>
              <FaCheck className='service__list-icon'/>
              <p>{t("UX4")}</p>
            </li>

            <li>
              <FaCheck className='service__list-icon'/>
              <p>{t("UX5")}.</p>
            </li>

           
          </ul>

        </article>

        {/* Web Development */}

        <article className='service'>
          <div className="service__head">
            <h3>{t("Web Development")}</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>{t("WDev1")}</p>
            </li>

            <li>
              <FaCheck className='service__list-icon'/>
              <p>{t("WDev2")}</p>
            </li>

            <li>
              <FaCheck className='service__list-icon'/>
              <p>{t("WDev3")}</p>
            </li>

            <li>
              <FaCheck className='service__list-icon'/>
              <p>{t("WDev4")}</p>
            </li>

            <li>
              <FaCheck className='service__list-icon'/>
              <p>{t("WDev5")}</p>
            </li>

            <li>
              <FaCheck className='service__list-icon'/>
              <p>{t("WDev6")}</p>
            </li>
          </ul>

        </article>

        {/* Data Analysis */}

        <article className='service'>
          <div className="service__head">
            <h3>Data Analysis</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>{t("Dat1")}</p>
            </li>

            <li>
              <FaCheck className='service__list-icon'/>
              <p>{t("Dat2")}</p>
            </li>

            <li>
              <FaCheck className='service__list-icon'/>
              <p>{t("Dat3")}</p>
            </li>

            <li>
              <FaCheck className='service__list-icon'/>
              <p>{t("Dat4")}</p>
            </li>

            <li>
              <FaCheck className='service__list-icon'/>
              <p>{t("Dat5")}</p>
            </li>

          </ul>

        </article>
      </div>

    </section>
  )
}

export default Services