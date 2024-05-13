import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setplaystate}) => {
  return (
    <div className='about'>
         <div className='about-left'>
             <img src={about_img} alt="" className='about-img'/>
             <img src={play_icon} alt="" className='play-icon' onClick={()=>{setplaystate(true)}} />
         </div>
         <div className='about-right'>
             <h3>ABOUT UNIVERSITY</h3>
             <h2>headin 2-------------</h2>
             <p>paragraph----------------------------------</p>
             <p>paragraph----------------------------------</p>
             <p>paragraph----------------------------------</p>
         </div>
    </div>
  )
}

export default About
