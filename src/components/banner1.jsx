import React from 'react'
import astronaut from '../images/Rectangle 1.png'


function Banner1(){
    return (
       <>
       <div className='w-full  flex items-center px-0 py-0 '  >
          <img src={astronaut} className="md:w-full object-cover h-screen  w-full md:py-0" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-304 text-white font-bold text-center">
          <h3 className='text-7xl md:3xl lg:7xl'>Welcome to APC !</h3>
        </div>
        <div className="absolute bottom-0 left-0 w-full  bg-black bg-opacity-60 text-white flex items-center justify-center">
          <p className="text-md text-2 rem font-medium">
            "The universe is a pretty big place. If it's just us, seems like an awful waste of space." <br className="text-md "/>- Carl Sagan
          </p>
        </div> 
        <div className='container'>
        <div className="container mx-auto text-center py-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">About Us</h1>
                console.log("hey")</div>
        </div>
          </div>
       </>
    )
}
export default Banner1
