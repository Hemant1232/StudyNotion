import React from 'react'

const stats = [
    {count:'5K', label:"Active Students"},
    {count:'10+', label:"Mentors"},
    {count:'200+', label:"Courses"},
    {count:'50+', label:"Awards"},

]

const StatsComponent = () => {
  return (
    <div className='flex justify-around  font-semibold h-32 items-center my-20 py-20 mx-10'>
        {
            stats.map((data, index)=> {
                return(
                    <div className='flex flex-col gap-1' key={index}>
                        <h1 className='text-3xl text-center text-richblack-5'>{data.count}</h1>
                        <h2 className='text-richblack-400 '>{data.label}</h2>

                    </div>
                )
            })
        }
    </div>
  )
}

export default StatsComponent