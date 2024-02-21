import React from 'react'
// import { Typography } from "@material-tailwind/react";

const SliderCard = () => {
  return (
    <div className='w-full mt-5 relative'>
        <div className='w-[50%]'>
        <img src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="" />
        
        <div className='absolute bottom-0 left-0 text-white'>
            <h1>22 Hours ago</h1>
            <h1>Dunki (2023) Sinhala Subtitles</h1>
        </div>

        </div>
    </div>
  )
}

export default SliderCard