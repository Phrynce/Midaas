import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaChevronRight, FaChevronUp } from 'react-icons/fa'
import 'aos/dist/aos.css'
import Aos from 'aos';

const Faq = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
    const [toggle,settoggle]=useState(false)

    function change(e){
        e.preventDefault()
        settoggle(!toggle)
        setclosse(false)
        setanother(false)
        setover(false)
        setyes(false)
        console.log(toggle);
    }

    const [close,setclosse]=useState(false)

    function working(e){
        e.preventDefault()
        setclosse(!close)
        console.log(close);
    }
    function back(e){
        e.preventDefault()
        settoggle(false)
        setclosse(true)
        setanother(false)
        setover(false)
        setyes(false)
    }

    const [yes,setyes]=useState(false)
    function yeah(e){
        e.preventDefault()
        setyes(!yes)
    }
    function doing(){
        setclosse(false)
        settoggle(false)
        setyes(true)
        setanother(false)
        setover(false)
    }
    
    const [another,setanother]=useState(false)

    function mine(e){
        e.preventDefault()
        setanother(!another)
    }
    function me(e){
        e.preventDefault()
        setanother(true)
        setclosse(false)
        settoggle(false)
        setyes(false)
        setover(false)
    }
    
    const [over,setover]=useState(false)

    function did(e){
        e.preventDefault()
        setover(!over)
    }
    function done(e){
        e.preventDefault()
        setanother(false)
        setclosse(false)
        settoggle(false)
        setyes(false)
        setover(true)
    }

  return (
    <div>
        <div className=' lg:mt-10 -mt-14'>
        <div className=' flex justify-center items-center text-[#1eb2a6] font-sans text-[20px] mt-[130px] mb-1 font-bold '>FAQS</div>
        <div className=' flex justify-center items-center lg:text-[39px] text-[28px] font-sans font-bold mb-7'>Frequently Asked Questions</div>
            <div className=' lg:w-[1000px] lg:mx-[300px] mx-5 mb-4 bg-white text-[#1eb2a6]  ' data-aos='fade-right'>
                <div className='lg:w-[1000px] h-[50px] shadow-md flex justify-start items-center px-3 relative font-sans font-bold'>What are the beneficts i would get from studying in China
                <div>{toggle==false?<div className=' absolute -mt-[13px] lg:ml-[500px] -ml-5  cursor-pointer ease-in-out ' onClick={change}><FaChevronRight className=' w-[18px] h-[18px]' /></div>:<div className=' absolute -mt-[13px] lg:ml-[500px] -ml-5  cursor-pointer ease-in-out'><FaChevronUp className=' w-[23px] h-[23px]' onClick={change} /></div>}</div>
                </div>
<div className={toggle==true?`px-3 lg:w-[1000px] lg:h-[100px] h-[200px] -mt-3 lg:mt-0  font-bold text-[14px] bg-white flex justify-start items-center text-black`:`hidden`}>Studing in China offers numerous beneficts including access to high quality education and cutting-edge research opportunities at some of the world's leading Universities.Students experience Rich Cultural immersions,Learning Mandarin and Understanding Chines Traditions and contemporary society.</div>
            </div>
            <div className=' lg:w-[1000px] lg:mx-[300px] mx-5 mb-4 bg-white text-[#1eb2a6]' data-aos='fade-right'>
                <div className='lg:w-[1000px] h-[50px] shadow-md flex justify-start items-center px-3 relative font-sans font-bold'>What are the language requirement for studing in China
                <div>{close==false?<div className=' absolute -mt-[13px] lg:ml-[520px] -ml-5 cursor-pointer ease-in-out ' onClick={back}><FaChevronRight className=' w-[18px] h-[18px]' /></div>:<div className=' absolute -mt-[13px] lg:ml-[520px] -ml-5 cursor-pointer ease-in-out'><FaChevronUp className=' w-[23px] h-[23px]' onClick={working} /></div>}</div>
                </div>
<div className={close==true?`px-3 lg:w-[1000px] lg:h-[100px] h-[300px] lg:mt-0 -mt-9  font-bold text-[14px] bg-white flex justify-start items-center text-black`:`hidden`}>Language Requirements vary depending on the program and University.Many Chinese universities offer programs taught in English, for graduate and postgraduate courses. For these programs, proficiency in English can be an English Proficiency letter for students woh took their previous studies using English as their instruction language otherwise, proficiency is often demostrated by TOEFL or IELTS scores.  </div>
            </div>
            <div className=' lg:w-[1000px] lg:mx-[300px] mx-5 mb-4 bg-white text-[#1eb2a6] ' data-aos='fade-right'>
                <div className='lg:w-[1000px] h-[50px] shadow-md flex justify-start items-center px-3 relative font-sans font-bold'>What are the application process for international students
                <div>{yes==false?<div className=' absolute -mt-[13px] lg:ml-[500px] -ml-5 cursor-pointer ease-in-out ' onClick={doing}><FaChevronRight className=' w-[18px] h-[18px]' /></div>:<div className=' absolute -mt-[13px] lg:ml-[500px] -ml-5 cursor-pointer ease-in-out'><FaChevronUp className=' w-[23px] h-[23px]' onClick={yeah} /></div>}</div>
                </div>
<div className={yes==true?`px-3 lg:w-[1000px] lg:h-[100px] h-[200px] lg:mt-0 -mt-3  font-bold text-[14px] bg-white flex justify-start items-center text-black`:`hidden`}>
    The application process generally involves several steps; choosing a program, checking the entry requirement, and preparing necessary documents such as academic transcripts, language proficiency test scores a personal statement, and recomendation letters.
</div>
            </div>
            <div className=' lg:w-[1000px] lg:mx-[300px] mx-5 mb-4 bg-white text-[#1eb2a6]  ' data-aos='fade-right'>
                <div className='lg:w-[1000px] h-[50px] shadow-md flex justify-start items-center px-3 relative font-sans font-bold'>What scholarships are available for internation students
                <div>{another==false?<div className=' absolute -mt-[13px] lg:ml-[520px] -ml-5 cursor-pointer ease-in-out ' onClick={me}><FaChevronRight className=' w-[18px] h-[18px]' /></div>:<div className=' absolute -mt-[13px] lg:ml-[520px] -ml-5 cursor-pointer ease-in-out'><FaChevronUp className=' w-[23px] h-[23px]' onClick={mine} /></div>}</div>
                </div>
<div className={another==true?`px-3 lg:w-[1000px] lg:h-[100px] h-[200px]  font-bold text-[14px] bg-white flex justify-start items-center text-black`:`hidden`}>
    Various Scholarships are availarble for internation students in Chin, including the chineese Government Scholarships(CSC), which covers tuition, accomodationation living expense.Many universities offers their own scholarships based on academic merit or financial need. Provincial and municipa governments provide scholarships for studens attending universities in their regions.
</div>
            </div>
        </div>
    </div>
  )
}

export default Faq