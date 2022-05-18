import React, { useState } from 'react'
import './styles.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  const [isServices, setisServices] = useState(false)


  const animateServices = () => {
   
    if(window.scrollY > 1640)
      setisServices(true)

  }

  window.addEventListener('scroll', animateServices)
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className={isServices ? 'service animate-services' :'services'}>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li><BiCheck className='service__list-icon' />
            <p>User Interface & Experience.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
            <p>Production & maintenance.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
            <p>Fluid & animated design.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
            <p>Single page applications.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
            <p>Secure and Scalable process.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
            <p> Cross browser/ platform compatibility.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
            <p>Reactive & Responsive designs.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services