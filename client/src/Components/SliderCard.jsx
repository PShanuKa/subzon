import React from 'react'

const Card = () =>{
  return (
    <div className='w-full  h-[250px] hover:scale-[98%] transition-all duration-100 relative overflow-hidden'>
    <div className=''>
    <img className='object-fill' src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="" />
    <div className='absolute top-[25%] left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent'>
    </div>
    <div className='absolute top-0 left-0 '>
      <button className='bg-red-500 text-white font-semibold py-1  px-2'>Movies</button>
    </div>
    
    <div className='absolute bottom-0 left-0 p-3 text-white group/h1'>
        <h1 className='text-[12px]'>22 Hours ago</h1>
        <h1 className='text-[24px] group-hover/h1:underline cursor-pointer'>Dunki (2023) Sinhala Subtitles</h1>
        <h1 className='text-[20px] group-hover/h1:underline cursor-pointer font-sinhala'>ඩන්කි (2023) සිංහල උපසිරැසි සමග</h1>
        <div className='flex gap-10'>
        <h1 className='text-[12px] '>Imdb 7.8/10</h1>
        <div className='flex flex-row gap-4 text-[12px] font-light text-gray-300'>
            <button>Drama</button>
            <button className='rounded-lg'> Action</button>
            </div>

        </div>
    </div>
    </div>
</div>
  )
}


const SliderCard = () => {
  return (
    <>
    <div className='w-full max-w-7xl mx-auto  grid gap-1'>
      <div className='w-full grid grid-cols-5 gap-1'>
        <div className='col-span-4 grid grid-cols-2  gap-1'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div className='col-span-1 grid gap-1 b'>
          <div className='bg-blue-gray-300 w-full h-[250px]'></div>
          <div className='bg-blue-gray-300 w-full h-[250px]'></div>
        </div>

      </div>
        <div className='w-full grid-cols-2 grid  gap-1'>
        <Card/>
        <Card/>
        </div>

    </div>

    </>
  )
}

export default SliderCard