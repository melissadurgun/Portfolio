import React from 'react'
import CV from '../../assets/cv.png'
import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t } = useTranslation();
  
  return (
    <div className="cta">
        <a href={CV} download className='btn'>{t("Download my CV")}</a>
        <a href="#contact" className='btn btn-primary'>{t("Let's connect")}</a>
    </div>
  )
}

export default CTA