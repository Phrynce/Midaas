import React from 'react'
import './About.css'
import Content from './Content'
import Stat from './Stat'
import Newsletter from './Newsletter'
import Footer from './Footer'
import Hero3 from './Hero3'
import Faq from './Faq'

const About = () => {
  return (
    <div> 
        <div>
            <Hero3 />
        </div>
        <div className=' lg:mt-0 mt-[340px]'>
          <Content />
        </div>
        <div>
          <Stat />
        </div>
        <div className=' -mt-14'>
          <Newsletter />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default About