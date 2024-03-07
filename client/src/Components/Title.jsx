import React from 'react'

const Title = ({title}) => {
  return (
    <div className='border-b-4 mt-5 border-black'>
        <div className='max-w-7xl px-3 pb-2 mx-auto text-[24px] uppercase font-bold flex justify-between'>
            <h1>{title}</h1>
            <h1>SEE ALL</h1>
        </div>
     </div>
  )
}

export default Title