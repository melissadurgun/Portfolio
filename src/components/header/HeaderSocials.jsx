import React from 'react'
import CV from '../../assets/cv.png'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/melissa-durgun-628a982a9/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/melissadurgun" target='_blank'><FaGithub /></a>
        <a href={CV} download><PiCertificateBold /></a>
    </div>
  )
}

export default HeaderSocials