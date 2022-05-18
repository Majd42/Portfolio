import React, {useRef} from 'react'
import './styles.css'
import {FiMail} from 'react-icons/fi'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o00df6p', 'template_bnty6wo', form.current, 'MzTdHuCzgt2m29Ukh')
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>majd4.sh@gmail.com</h5>
            <a href="mailto:majd4.sh@gmail.com" target='_blank' >Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>majd.shaheen</h5>
            <a href ="https://m.me/majd.shaheen.1234" target='_blank' >Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsup</h4>
            <h5>+963932461153</h5>
            <a href ="https://api.whatsapp.com/send?phone=+963932461153 " target='_blank' >Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input name='name' type="text" placeholder='your full name' required />
          <input type="email" name='email' placeholder='your email' required />
          <textarea name='message' rows='7' placeholder='write your messages here ...' required></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
      
    
    </section>
  )
}

export default Contact