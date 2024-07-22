import React, { useEffect } from 'react'
import her from'./images/blog/b5.webp'
import book from './images/book1.png'
import money from './images/cash-money-622123.png'
import person from './images/person1.png'
import { PiBookOpenTextThin } from "react-icons/pi";
import { FaGraduationCap, FaHouse } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import 'aos/dist/aos.css'
import Aos from 'aos';

const Content = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
  return (
    <div>
        <div className=' grid lg:grid-cols-2 gap-10 lg:mt-[650px] md:mt-[850px] lg:mx-20 mx-4'>
            <div className=' h-[500px] hidden lg:block'>
                <img className=' h-[880px]' src={her}/>
            </div>
            <div className=' lg:mt-16 mt-[52px] lg:w-[600px]'>
                <div className=' text-2xl lg:font-medium font-serif font-bold pt-2' style={{color:'#1eb2a6'}}>Get Scholorship</div>
                <div className='lg:text-[45px] font-bold font-sans mb-10'>Benefits About Our  Scholarship Programmes</div>
                <div className=' lg:w-[630px] h-[170px] bg-white rounded-sm mb-7 hover:bg-[#1eb2a6] text-black hover:text-white'>
                    <div  className=' flex justify-center items-center mx-5'>
                <div className=' w-[70px] h-[70px] mt-8'><PiBookOpenTextThin className=' block w-14 h-14'/></div>
                    <div className=' mt-5 mx-6 '>
                        <div className=' text-xl font-bold mb-3'>Free Tutions</div>
                        <div className=' text-inherit hidden lg:block'>Our scholarship includes funding for your tuition fees, as well as books and other materials necessary for your academic studies</div>
                    </div>
                    </div>
                </div>
                <div className=' lg:w-[630px] h-[170px] bg-white rounded-sm mb-7 hover:bg-[#1eb2a6] text-black hover:text-white' data-aos='zoom-in-up'>
                    <div  className=' flex justify-center items-center mx-5'>
                <div className=' w-[70px] h-[70px] mt-8'><GiMoneyStack className=' block w-14 h-14'/></div>
                    <div className=' mt-5 mx-6 '>
                        <div className=' text-xl font-bold mb-3'>Monthly Stipend</div>
                        <div className=' text-inherit hidden lg:block'>Don't be concerned about how you'll manage as an international student; our scholarship includes a monthly stipend to support your living expenses.</div>
                    </div>
                    </div>
                </div>
                <div className=' lg:w-[630px] h-[170px] bg-white rounded-sm mb-7 hover:bg-[#1eb2a6] text-black hover:text-white' data-aos='zoom-in-up'>
                    <div  className=' flex justify-center items-center mx-5'>
                    <div className=' w-[70px] h-[70px] mt-8'><FaHouse className=' block w-12 h-12'/></div>
                    <div className=' mt-5 mx-6 '>
                        <div className=' text-xl font-bold mb-3'>Free Accomodation</div>
                        <div className=' text-inherit hidden lg:block'>Accommodation won't be an issue. Our scholarship includes complimentary housing</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content