import React, {  useState } from 'react'
import './styles.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {BsBook} from 'react-icons/bs'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {

  const [isAbout, setIsAbout] = useState(false)


  const animateAbout = () =>{
    
    if(Math.ceil(window.scrollY) > 400){
      setIsAbout(true)

    }

  }

  window.addEventListener('scroll',animateAbout)
 

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About__me-Image" />
          </div>
        </div>
        <div className={isAbout ? 'about__content animate-about' : 'about__content'}>
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>+1 Year of Experience</small>
            </article>
            <article className="about__card">
              <BsBook className='about__icon' />
              <h5>College Degree</h5>
              <small> computer science</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>1 Completed Project</small>
            </article>
          </div>

          <p>
            I am a junior Frontend developer and I am Extremely passionate about
            software architecture and design combined with sensitivity to serve
            the needs of the business with the delivery of high-quality solutions.
          </p>


          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About