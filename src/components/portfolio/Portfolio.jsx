import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png' 

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'This is a portfolio item title',
    github: 'http://Github.com',
    demo: '/##'
  },
  {
    id: 2,
    image: IMG1,
    title: 'This is a portfolio item title',
    github: 'http://Github.com',
    demo: '/##'
  },
  {
    id: 3,
    image: IMG1,
    title: 'This is a portfolio item title',
    github: 'http://Github.com',
    demo: '/##'
  },
  {
    id: 4,
    image: IMG1,
    title: 'This is a portfolio item title',
    github: 'http://Github.com',
    demo: '/##'
  },
  {
    id: 5,
    image: IMG1,
    title: 'This is a portfolio item title',
    github: 'http://Github.com',
    demo: '/##'
  },
  {
    id: 6,
    image: IMG1,
    title: 'This is a portfolio item title',
    github: 'http://Github.com',
    demo: '/##'
  }
]

const Portfolio = () => {
  return(
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />           
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} rel="noreferrer" className="btn" target="_blank" >Github</a>
                  <a href={demo} rel="noreferrer" className="btn btn__primary" target="_blank">Live Demo</a>
                </div>          
              </article>
            )
          }) 
        }
      </div>
    </section>
  )
}

export default Portfolio