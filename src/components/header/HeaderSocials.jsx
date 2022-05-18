import React from 'react'
import {BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import {AiFillMail} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/majd-shaheen/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Majd42" target="_blank"><FaGithub /></a>
        <a href="mailto:majd4.sh@gmail.com" target="_blank"><AiFillMail /></a>
    </div>
  )
}

export default HeaderSocials