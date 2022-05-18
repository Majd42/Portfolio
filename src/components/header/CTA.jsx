import React from 'react'
import CV from '../../assets/cv.pdf'
const CTA = () => {
  return (
    <div className="cta">
        <a className='energy btn animation1 ' href={CV} download>DOWNLOAD CV</a>
        <a className='btn btn-primary animation2' href="#contact">Let's Talk</a>
    </div>
  )
}

export default CTA