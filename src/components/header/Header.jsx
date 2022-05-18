import React from 'react'
import './styles.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="animation">
          <h5>Hello I'm </h5>
          <h1 className='name'>Majd Shaheen</h1>
        </div>
        <h5 className="text-light">
          Frontend Developer
        </h5>
        <CTA /> 
        <HeaderSocials />
        <a href="#contact" className='scroll__down'>Scroll Down</a>
        <div className="me">
          
          <img src={ME} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header