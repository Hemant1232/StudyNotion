import React from 'react';
import ContactUsForm from '../components/ContactUs/ContactUsForm';
import { BiSolidChat } from "react-icons/bi";
import { BiLink } from "react-icons/bi";
import { IoCall } from "react-icons/io5";

const ContactUs = () => {
  return (
    <div className='w-11/12 mx-auto mt-20 text-white tracking-wide  flex lg:flex-row flex-col gap-10 justify-between mb-32'>

        {/* Details like Chat on us */}
        <div className='flex lg:w-[50%]  flex-col gap-y-10 bg-richblack-800 h-fit p-10 rounded-xl'>

            {/* Chat on us */}
            <div className='text-sm flex flex-col gap-[2px] text-richblack-200 font-medium'>
            <div className='flex gap-x-4 text-center items-center '>
            < BiSolidChat size={24} />
            <h1 className='text-richblack-5 text-lg font-semibold '>Chat on us</h1>
            </div>
            <p className='font-medium'>Our friendly team is here to help.</p>

            <p className='font-semibold'>info@studynotion.com</p>
            </div>

                {/* Visit us */}
            <div className='text-sm flex flex-col gap-[2px] text-richblack-200 font-medium'>
                <div className='flex gap-x-4 text-center items-center'>

            <BiLink size={24}/>
            <h1 className='text-richblack-5 text-lg font-semibold '>Visit us</h1>
                </div>
            <p className='font-medium'>Come and say hello at our office HQ.</p>
            <p className='font-semibold'>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
            </div>


            {/* Call us */}
            <div className='text-sm flex flex-col gap-[2px] text-richblack-200 font-medium'>
                <div  className='flex gap-x-4 text-center items-center'>
                <IoCall size={24}/>
                <h1 className='text-richblack-5 text-lg font-semibold '>Call us</h1>
                </div>
                <p className='font-medium'>Mon - Fri From 8am to 5pm</p>
                <p className='font-semibold'>+91 6366 000 666</p>
            </div>  


        </div>


        {/* Form */}
        <div className='border-[2px] border-richblack-700 rounded-xl p-14 w-ful'>
           <div className=''>
           <h1 className='text-4xl font-semibold text-richblack-5 mb-2'>Got a Idea? We've got the skills. Let's team up</h1>
           <p className='text-richblack-300 text-base'>Tell us more about yourself and what you're got in mind.</p>
           </div>
            <ContactUsForm/>
        </div>
    </div>
  )
}

export default ContactUs