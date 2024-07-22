import React from 'react'
import Hero4 from './Hero4'
import Pricing from './Pricing'
import Newsletter from './Newsletter'
import Footer from './Footer'
import Faq from './Faq'

const Prize = () => {
  return (
    <div>
        <div>
            <Hero4 />
        </div>
        <div className=' lg:mt-[600px] mt-[450px]'>
          <Faq />
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

export default Prize