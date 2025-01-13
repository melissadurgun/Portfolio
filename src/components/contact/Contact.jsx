import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_otgax87', 'template_5byooax', form.current, {
        publicKey: '-oWC9M8u-pw5FrqIYdjxZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const { t } = useTranslation();

  return (
  <section id='contact'>
    <h5>{t("Get In Touch")}</h5>
    <h2>{t("Contact Me")}</h2>

    <div className="container contact__container">
      <div className="contact__options">
            
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon' />
          <h4>Email</h4>
          <h5>durgun.melissa@yahoo.de</h5>
          <a href="mailto:melissadurgun@yahoo.de">{t("Send me a message")}</a>
        </article>

        <article className="contact__option">
          <BsLinkedin className='contact__option-icon' />
          <h4>LinkedIn</h4>
          <a href="https://www.linkedin.com/in/melissa-durgun-628a982a9/" target='_blank'>{t("Send me a message")}</a>
        </article>

        <article className="contact__option">
          <FaWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <a href="https://api.whatsapp.com/send?phone+4915782477278" target='_blank'>{t("Send me a message")}</a>
        </article>

      </div>

      <form ref= {form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder={t("Your Full Name")} required/>
        <input type="email" name='email' placeholder={t("Your Email")} required />
        <textarea name="message" rows="7" placeholder={t("Your Message")} required></textarea>
        <button type='submit' className='btn btn-primary'>{t("Send your Message")}</button>
      </form>



    </div>
  </section>  
)
}

export default Contact