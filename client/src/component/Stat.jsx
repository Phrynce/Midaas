import React from 'react'
import wrapper from './images/awrapper.webp'
import logo from './images/courses/c1.png'
import logo1 from './images/courses/online/o7.1.png'
import logo2 from './images/courses/online/o11.1.png'
import logo3 from './images/courses/online/o12.1.png'


const Stat = () => {
  return (
    <div>
        <div className='relative'>
            <img src={wrapper} className=' h-[30vh] text-white relative w-screen bg-no-repeat bg-center bg-cover ' />
        </div>
        <div className='hidden lg:grid grid-cols-4 ml-40 -mt-44 absolute gap-20'>
            <div>
                <div className=' w-[90px] h-[90px] inline-block'><img src={logo1} /></div>
                <div className=' inline-block text-[20px] text-white'>
                <div className=' text-[60px] font-semi-bold '>500+</div>
                <div className=' -mt-3 text-lg font-medium '>Chinees Universties</div></div>
            </div>
            <div>
                <div className=' w-[90px] h-[90px] inline-block'><img src={logo} /></div>
                <div className=' inline-block text-[20px] text-white'>
                <div className=' text-[60px] font-semi-bold '>400+</div>
                <div className=' -mt-3 text-lg font-medium '></div>Programmes</div>
            </div>
            <div>
                <div className=' w-[90px] h-[90px] inline-block'><img src={logo2} /></div>
                <div className=' inline-block text-[20px] text-white'>
                <div className=' text-[60px] font-semi-bold '>230+</div>
                <div className=' -mt-3 text-lg font-medium mx-4 '>SCHOLARSHIPS</div></div>
            </div>
            <div>
                <div className=' w-[90px] h-[90px] inline-block'><img src={logo3} /></div>
                <div className=' inline-block text-[20px] text-white'>
                <div className=' text-[60px] font-semi-bold '>500</div>
                <div className=' -mt-3 text-lg font-medium '>ONLINE COURSES</div></div>
            </div>
        </div>
    </div>
  )
}

export default Stat