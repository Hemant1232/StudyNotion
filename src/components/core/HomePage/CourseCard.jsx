import React from 'react'
import {ImTree} from 'react-icons/im';
import {HiUsers} from 'react-icons/hi'

const CourseCard = ({cardData, currentCard, setCurrentCard}) => {
  return (
    <div className={`w-[360px] lg:w-[30%] ${currentCard === cardData?.heading
      ?'bg-white shadow-[12px_12px_0_0] shadow-yellow-50 scale-[102%]'
      :'bg-richblack-800'} text-richblack-25 cursor-pointer box-border h-[300px] transition-all duration-300 `}
    onClick={()=> setCurrentCard(cardData?.heading)}
    >
    
    <div className='border-b-[2px] border-dashed border-richblack-300 h-[80%] p-6 flex flex-col gap-3'>
        <div className={`${currentCard===cardData?.heading && 'text-richblack-800'} text-[20px] font-semibold `}>
          {cardData?.heading}
        </div>
        <div className='text-richblack-400 font-medium'>
          {cardData?.description}
        </div>
    </div>

    <div className={`flex justify-between ${currentCard===cardData?.heading ?'text-blue-300':'text-richblack-300'} py-3 px-6`}>
      <div className='flex  gap-2 items-center text-[16px]'>
        <HiUsers></HiUsers> 
        {cardData?.level}</div>
        <div className='flex gap-2 items-center text-[16px] justify-center'>
        <ImTree></ImTree>
        {cardData?.lessionNumber} Lession
        </div>
    </div>



    </div>
  )
}

export default CourseCard