import React from 'react'
import astronaut from "../images/Rectangle 1.png"
import backgroundImage from "../images/background1.png"


function Banner() {
  return (
    <>
      <div >
        <div className='order-1 w-full  flex items-center px-0 py-0 ' >
          <img src={astronaut} alt="" className='w-full h-97' /></div>

      </div>
      <div className="bg-cover backgroundcolor-black  w-full  flex items-center"></div>

    </>
  )
}

export default Banner
