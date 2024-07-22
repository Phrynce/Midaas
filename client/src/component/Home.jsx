import React from 'react'
import Hero from './Hero'
import Content from './Content'
import Stat from './Stat'
import './stat.css'
import Course from './Course'
import Card from './Card'
import Card2 from './Card2'
import Testimonal from './testimonal/Testimonal'
import Blog from './Blog'
import Pricing from './Pricing'
import Newsletter from './Newsletter'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <div className=''>
            <Hero />
        </div>
        <div className=' lg:mt-0 mt-[350px]'> 
        <Content />
        </div>
        <div>
          <Stat />
        </div>
        <div>
          <Course />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card2 />
        </div>
        <div>
          <Testimonal />
        </div>
        <div>
          <Blog />
        </div>
        <div>
          <Newsletter />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default Home