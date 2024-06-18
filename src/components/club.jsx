import React from 'react'
import bgimage from '../images/background1.png'
import club1 from "../images/Rectangle 12.png"
import club2 from "../images/club2.png"
import club3 from "../images/club3.png"
import rectangle13 from "../images/Rectangle 13.png"
import fullscreen from "../images/fullscree.svg"
const club = () => {
  return (
    <div className="bg-img bg-cover  w-full p-10   text-white" style={{ backgroundImage: `url(${bgimage})`}}>
        <h1 className='text-[30px] sm:text-[36px] md:text-[36px] text-white text-center'>WHAT WE DO AS A CLUB <span className="text-red-800">?</span></h1>
        <div className='bg-gradient-to-r from-[#7D80BF] via-[#C4F500] to-[#FFFFFF]  w-[37%] sm:w-[50%]  md:w-[37%] mx-auto h-1  m-t'></div>
        <div className="card-container flex  my-10 py-10  gap-5 flex-wrap justify-center ">
        <div className="card  mx-auto md:mx-0">
                <div className="img">
                    <img src={club1} alt="" className='rounded-sm md:w-[300px] w-[300px]'   height={330} />
                    
                </div>

<div  className='w-[300px] md:w-[300px] h-[60px] rounded-sm flex  justify-center items-center   overflow-clip  text-md'style={{ backgroundImage: `url(${rectangle13})`}}>WE PLAY </div>
            </div>
            <div className="card">
                <div className="img">
                    <img src={club2} alt="" className='rounded-sm md:w-[300px] w-[300px]'  height={330} />
                    
                </div>

                <div  className=' w-[300px] md:w-[300px] h-[60px] rounded-sm flex  justify-center items-center my-2  overflow-clip  text-md'style={{ backgroundImage: `url(${rectangle13})`}}>WE GRIND </div>
            </div>
            <div className="card">
                <div className="img">
                    <img src={club3} alt="" className='rounded-sm md:w-[300px] w-[300px]'  height={330} />
                   
                </div>

                <div  className='w-[300px] md:w-[300px] h-[60px] rounded-sm flex  justify-center items-center my-2  overflow-clip  text-md'style={{ backgroundImage: `url(${rectangle13})`}}>WE SHOWOFF!</div>
            </div>
        </div>
    </div>
  )
}

export default club