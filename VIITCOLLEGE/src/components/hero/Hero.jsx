import React from 'react'
import './Hero.css'
import darkarrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container' id='hero'>
        <div className="hero-text">
             <h1>We Ensure better education for better world</h1>
             <p>Vishwakarma Institute of Information Technology, VIIT, was Established in 2002 with the vision of Excellence in technical education and holistic developments of aspiring engineers. In 2017, VIIT has conferred an autonomous status with permanent affiliation to the Savitribai Phule Pune University (SPPU), Pune. During last 21 years of operation, institute has shown remarkable growth both qualitatively and quantitatively through 11 undergraduate, Postgraduate, and doctoral engineering program. As a result of adopting best practices, institute has received ISO certification, NBA (tier I) and NAAC accreditations, top rankings by recognized surveys, and is on the fast track to growth.</p>
             <button className='btn'>Explore More <img src={darkarrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero
