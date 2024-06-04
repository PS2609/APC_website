import React from 'react'
import astronaut from '../images/Rectangle 1.png'


function Banner1(){
    return (
       <>
       <div className='w-full  flex items-center px-0 py-0 '  >
          
          <img src={astronaut} className=" object-cover md:w-full w-full md:py-0 h-screen" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-304 text-white font-bold text-center">
          <h3 className='text-5xl md:3xl lg:7xl'>Welcome to APC !</h3>
        </div>
        <div className="absolute bottom-0 left-0 w-full  bg-black bg-opacity-60 text-white flex items-center justify-center">
          <p className="text-md text-2 rem font-medium">
            "The universe is a pretty big place. If it's just us, seems like an awful waste of space." <br className="text-md "/>- Carl Sagan
          </p>
        </div> 
        
          </div>
       </>
    )
}
export default Banner1
