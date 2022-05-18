import React, { useState } from 'react'
import './styles.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {

  const [isExperience, setIsExperience] = useState(false)


  const animateExperience =() => {
    
    if(window.scrollY > 1050){
      setIsExperience(true)
    }
  }

  window.addEventListener('scroll',animateExperience)

  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className={isExperience ? 'experience__frontend animate-experience' : 'experience__frontend'}>
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MaterialUI</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Git</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Scss</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>



        {/* <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>NodeJS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div> */}
      </div>



    
    </section>
  )
}

export default Experience