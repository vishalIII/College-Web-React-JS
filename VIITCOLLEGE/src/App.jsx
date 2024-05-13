import React, { useState } from 'react'
import Navbar from './components/navabar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Videoplayer from './components/videoplayer/Videoplayer'

const App = () => {
  const [playstate,setplaystate] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Our Prgram' title='What We Offer'/>
        <Programs />
        <About setplaystate={setplaystate}/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='Testimonials' title='What Student Says'/>
        <Testimonials/>
        <Title subTitle='Contact us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <Videoplayer playstate={playstate} setplaystate={setplaystate}/>
    </div>
  )
}

export default App