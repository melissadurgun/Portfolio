import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import { useTranslation } from 'react-i18next'

const data = [ 
  {
    id: 1,
    image: IMG1,
    title: 'Recipe Website',
    github: 'https://github.com/melissadurgun',
    demo: ''
  },

  {
    id: 2,
    image: IMG2,
    title: 'Project 2',
    github: 'https://github.com/melissadurgun',
    demo: ''
  },

  {
    id: 3,
    image: IMG3,
    title: 'Project 3',
    github: 'https://github.com/melissadurgun',
    demo: ''
  },

  {
    id: 4,
    image: IMG4,
    title: 'Project 4',
    github: 'https://github.com/melissadurgun',
    demo: ''
  },

  {
    id: 5,
    image: IMG5,
    title: 'Project 5',
    github: 'https://github.com/melissadurgun',
    demo: ''
  },

  {
    id: 6,
    image: IMG6,
    title: 'Project 6',
    github: 'https://github.com/melissadurgun',
    demo: ''
  },

]


const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id='portfolio'>
      <h5>{t("My recent Work")}</h5>
      <h2>{t("Projects")}</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article className='portfolio__item'>

                {/* <div className="portfolio__item-img">
                  <img src={image} alt="" />
                </div>

                <h3>{title}</h3>

                <div className="portfolio__item-cta">
                  <a href={github} className='btn btn-primary'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div> */}

                <h5>Coming soon...</h5>
              </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default Projects