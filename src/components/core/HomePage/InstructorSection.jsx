import React from 'react'
import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from './HighlightText';
   
const InstructorSection = () => { 
  return (
    <div className='flex flex-row gap-20 items-center '>
        <div className='lg:w-[50%]'>
            <img src={Instructor} alt="" className='shadow-white shadow-[-20px_-20px_0_0]'/>
        </div>
        <div className='flex flex-col gap-10 lg:w-[50%] '>
            <div className='text-4xl w-[45%] font-semibold '>
                Become an <HighlightText text={"instructor"}></HighlightText>
            </div>
            <div className='text-richblack-300 font-[550] text-[16px] text-justify contrast-0 w-[90%]'>
            Instructors from around the world teach millions of students on 
            StudyNotion. We provide the tools and skills to teach what you love.
            </div>
            <div className='w-fit'>
                <CTAButton active={true} linkto={"/signup"}>
                <div className='flex items-center gap-3'>
                Start Teaching Today
                <FaArrowRight/>
                </div>
                </CTAButton>
                
            </div>
        </div>
    </div>
  )
}

export default InstructorSection