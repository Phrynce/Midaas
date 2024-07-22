import React from 'react'
import Blogging from './Blogging'
import MainBlog from './MainBlog'
import Newsletter from './Newsletter'
import Footer from './Footer'

const Jounal = () => {
  return (
    <div>
        <div>
            <Blogging />
        </div>
        <div>
            <MainBlog />
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

export default Jounal