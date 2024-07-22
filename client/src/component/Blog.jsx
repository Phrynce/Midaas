import React from 'react'
import b1 from './images/blog/b4.webp'
import b2 from './images/blog/b2.webp'
import b3 from './images/blog/b3.webp'
import { AiOutlineComment } from "react-icons/ai";
import { FaComment, FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaComments } from 'react-icons/fa6';

const Blog = () => {
  return (
    <div>
        <div >
            <div className=' flex justify-center items-center text-[#1eb2a6] font-sans text-[20px] mt-[130px] mb-1 font-bold '>OUR BLOG</div>
            <div className=' flex justify-center items-center text-[39px] font-sans font-bold mb-14'>Recent From Blog</div>
        </div>
        <div className=' grid lg:grid-cols-3 gap-7 lg:mx-36 mb-8 mx-3'>
            <div className=' bg-white shadow-md '>
            <div>
                <img src={b1} />
            </div>
            <div className=' mb-6 mt-8 '>
                <div className=' inline-block mx-6'>
            <div className=' text-[16px] text-[#1eb2a6] inline-block  '><FaUser /></div>
            <span className=' text-gray-600 text-[13px] font-medium font-sans mx-2  inline-block '>ADMIN</span>
            </div>
            <div className=' inline-block'>
            <div className=' text-[16px] text-[#1eb2a6] inline-block '><SlCalender /></div>
            <span className=' text-gray-600 text-[13px] font-medium font-sans mx-2  inline-block '>JAN. 18, 2021</span>
            </div>
            <div className=' inline-block lg:mx-6 mx-1'>
            <div className=' text-[18px] text-[#1eb2a6] inline-block '><FaComments /></div>
            <span className=' text-[#1eb2a6] text-[14px]  font-medium font-sans mx-2  inline-block '> 3 COMMENTS</span>
            </div>
            </div>
            <a href='https://forms.gle/2kvMaNPyJ1gouDwX8' className=' flex justify-center items-center text-[22px] mx-6 cursor-pointer hover:text-[#1eb2a6] font-sans font-bold'>
            Build your Dream Software & Engineering Career
            </a>
            <div className=' flex justify-center items-center text-[18px] font-sans font-normal text-gray-500 mt-4 mb-12 mx-6'>
            Engineers like to solve problems. If there are no problems handily available, they will create their own problems
            </div>
            </div>
            <div className=' bg-white shadow-md '>
            <div>
                <img src={b2} />
            </div>
            <div className=' mb-6 mt-8 '>
                <div className=' inline-block mx-6'>
            <div className=' text-[16px] text-[#1eb2a6] inline-block  '><FaUser /></div>
            <span className=' text-gray-600 text-[13px] font-medium font-sans mx-2  inline-block '>ADMIN</span>
            </div>
            <div className=' inline-block'>
            <div className=' text-[16px] text-[#1eb2a6] inline-block '><SlCalender /></div>
            <span className=' text-gray-600 text-[13px] font-medium font-sans mx-2  inline-block '>API. 25, 2022</span>
            </div>
            <div className=' inline-block lg:mx-6 mx-1'>
            <div className=' text-[18px] text-[#1eb2a6] inline-block '><FaComments /></div>
            <span className=' text-[#1eb2a6] text-[14px]  font-medium font-sans mx-2  inline-block '> 7 COMMENTS</span>
            </div>
            </div>
            <a href='https://forms.gle/2kvMaNPyJ1gouDwX8' className=' flex justify-center items-center text-[22px] mx-6 cursor-pointer hover:text-[#1eb2a6] font-sans font-bold'>
            Build your Economic Dream & Accounting Career
            </a>
            <div className=' flex justify-center items-center text-[18px] font-sans font-normal text-gray-500 mt-4 mb-12 mx-6'>
            Accounting does not make corporate earnings or balance sheets more volatile. Accounting just increases the transparency of volatility in earnings
            </div>
            </div>
            <div className=' bg-white shadow-md '>
            <div>
                <img src={b3} />
            </div>
            <div className=' mb-6 mt-8 '>
                <div className=' inline-block mx-6'>
            <div className=' text-[16px] text-[#1eb2a6] inline-block  '><FaUser /></div>
            <span className=' text-gray-600 text-[13px] font-medium font-sans mx-2  inline-block '>USER</span>
            </div>
            <div className=' inline-block'>
            <div className=' text-[16px] text-[#1eb2a6] inline-block '><SlCalender /></div>
            <span className=' text-gray-600 text-[13px] font-medium font-sans mx-2  inline-block '>MAY. 15, 2022</span>
            </div>
            <div className=' inline-block lg:mx-6 mx-1'>
            <div className=' text-[18px] text-[#1eb2a6] inline-block '><FaComments /></div>
            <span className=' text-[#1eb2a6] text-[14px]  font-medium font-sans mx-2  inline-block '> 5 COMMENTS</span>
            </div>
            </div>
            <a href='https://forms.gle/2kvMaNPyJ1gouDwX8' className=' flex justify-center items-center text-[22px] mx-6 cursor-pointer hover:text-[#1eb2a6] font-sans font-bold'>
            Build your Analysis & Management Career
            </a>
            <div className=' flex justify-center items-center text-[18px] font-sans font-normal text-gray-500 mt-4 mb-12 mx-6'>
            Data analysis is a tool for creating insight, not an end in itself. The goal is to turn data into information, and information into insight
            </div>
            </div>
        </div>
    </div>
  )
}

export default Blog