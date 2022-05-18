import React from 'react'
import './styles.css'
import {FaFacebookF} from'react-icons/fa'
import {FiGithub} from'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MASHA</a>

      <ul className='parmalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#sevices">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/majd.shaheen.1234/"><FaFacebookF/></a>
        <a href="https://github.com/Majd42"><FiGithub/></a>
        <a href="https://www.linkedin.com/in/majd-shaheen/"><FiLinkedin /></a>
      </div>


      <div className="footer__copyright">
        <small>&copy; Majd Shaheen. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer