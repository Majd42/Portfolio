import React from 'react'
import './styles.css'
import IMG1 from '../../assets/portfolio1.jpg'
import XO from '../../assets/Tic Tac Toe.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Project" />
          </div>
          <div className="portfolio__item-image">
            <h3>E-Commerce Shop</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Majd42/e-commerce" className='btn ' target='_blank'>Github</a>
              <a href="https://storied-nougat-215d87.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={XO} alt="Project" />
          </div>
          <div className="portfolio__item-image">
            <h3>Tic Tac Toe Game</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Majd42/Tic-Tac-Toe" className='btn ' target='_blank'>Github</a>
              <a href="https://tubular-salamander-d6fc19.netlify.app" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio