import React from 'react'

export default function EndSeasonCardLayout({data}) {
  return (
    <div className='cursor-pointer flex flex-col bd-white overflow-hidden w-[22rem] h-[35rem] mx-1.5 mt-4' > 
        <div className='h-[35rem] w-[22rem]'>
            <img style={{aspectRatio:"1.5/2", objectFit:"contain"}}  src={data.image} height={"5vmin"}/>
            <h3  className="text-center text-lg font-bold pt-6">
                {data.name}
            </h3>
        </div>
        

    </div>
  )
}
