import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbLetterX } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { BsFillSendFill } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6"

const Footer = () => {
  return (
    <div>
        <div className=' grid lg:grid-cols-4 lg:mx-32 mb-24'>
            <div>
                <div className=' font-sans font-bold text-[26px]'>MIDAS TOUCH CONSULT</div>
                <div className=' font-sans text-[15px] text-[#1eb2a6] font-medium mb-6'>Educational Scholarship Supports and finance</div>
                <div className=' text-gray-500 mb-4'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
               <div className=' inline-block'><a href='https://www.facebook.com/100068983969227/posts/646607630982030/?mibextid=rS40aB7S9Ucbxw6v'  className='bg-[#1eb2a6] text-white mx-1 w-10 flex justify-center items-center h-10 rounded-full place-content-center'><FaFacebookF /> </a></div>
               
<div className=' inline-block'><a href='https://www.tiktok.com/@midas.touch.consu?_r=1&_d=dmkg5j05ib11fj&sec_uid=MS4wLjABAAAA06YoZFubC2Kv-TgCGly5pHMmYuhlsElk6VO5-KgbXec8XKD8aihIT2tQeCxWEWU7&share_author_id=7303884164423549957&sharer_language=en&source=h5_m&u_code=eb6e9f417ic1c9&timestamp=1719696496&user_id=7303884164423549957&sec_user_id=MS4wLjABAAAA06YoZFubC2Kv-TgCGly5pHMmYuhlsElk6VO5-KgbXec8XKD8aihIT2tQeCxWEWU7&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7366626366651057925&share_link_id=0bf7296c-8f4f-4d72-8b83-213b41ac324d&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb0229&social_share_type=5&enable_checksum=1' className='bg-[#1eb2a6] text-white mx-1 w-10 flex justify-center items-center h-10 rounded-full mb-5'><FaTiktok /></a></div>
<div className=' inline-block'><div className='bg-[#1eb2a6] text-white mx-1 w-10 flex justify-center items-center h-10 rounded-full mb-5'><FaYoutube /></div></div>
            </div>
            <div className='lg:ml-28 ml-3 hidden md:block'>
                <div className=' font-sans font-bold text-xl mb-6'>Explore</div>
                <div className=' font-sans text-lg mb-2'>About Us</div>
                <div className=' font-sans text-lg mb-2'>Courses</div>
                <div className=' font-sans text-lg'>Blog</div>
            </div>
            <div className=' md:ml-9 hidden md:block'>
                <div className=' font-sans font-bold text-xl mb-6 '>Quick LInk</div>
                <div className=' font-sans text-lg mb-2'>Contact Us</div>
                <div className=' font-sans text-lg mb-2'>Pricing</div>
                <div className=' font-sans text-lg'>Service</div>
            </div>
            <div>
                <div className=' font-sans font-bold text-xl mb-6 hidden md:block'>Have a Questions?</div>
                <div>
                <div className=' hidden  md:inline-block '><IoCallSharp className=' text-[#1eb2a6] mr-4 text-xl ' /></div>
                <div className=' font-sans text-lg hidden md:inline-block'>+233 50 997 9261/+233 50 997 9261</div>
                </div>
                <div className=' mt-5'>
                <div className=' hidden  md:inline-block'><BsFillSendFill  className=' text-[#1eb2a6] mr-4 text-xl '/></div>
                <div className=' font-sans text-lg inline-block'> midashalm@gmail.com</div>
                </div>
            </div>
        </div>
        <div className=' bg-gray-100 h-32 flex justify-center items-center '>
            <a href="tel:+233543308817" className=' text-[14px] font-sans font-semibold text-gray-400 flex justify-center items-center'>Copyright ©2024 All rights reserved | by Prince Nyame</a>
        </div>
    </div>
  )
}

export default Footer