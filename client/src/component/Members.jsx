import React from 'react'
import TeamCard from './TeamCard'
import Hero1 from './Hero1'
import Newsletter from './Newsletter'
import Footer from './Footer'

const Members = () => {
  return (
    <div>
        <div>
     <Hero1 />
        </div>
        <div>
<TeamCard />
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

export default Members