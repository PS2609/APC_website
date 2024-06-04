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
        <h1 className='text-[30px] sm:text-[50px] md:text-[64px] text-white text-center'>WHAT WE DO AS A CLUB <span className="text-red-800">?</span></h1>
        <div className='bg-gradient-to-r from-[#FFFFFF]  via-[#C4F500] to-[#FFFFFF]   h-2 '></div>
        <div className="card-container flex  my-10 py-10  gap-5 flex-wrap justify-center ">
        <div className="card  mx-auto md:mx-0">
                <div className="img">
                    <img src={club1} alt="" className='rounded-sm md:w-[400px] w-[300px]'   height={330} />
                    <figcaption className='flex gap-3 my-4 '><img src={fullscreen} width={16} />Full Screen</figcaption>
                </div>

                <div  className='w-[300px] md:w-[400px] h-[60px] rounded-sm flex  justify-center items-center   overflow-clip  text-lg'style={{ backgroundImage: `url(${rectangle13})`}}>WE PLAY </div>
            </div>
            <div className="card">
                <div className="img">
                    <img src={club2} alt="" className='rounded-sm md:w-[400px] w-[300px]'  height={330} />
                    <figcaption className='flex gap-3 my-4 '><img src={fullscreen} width={16} />Full Screen</figcaption>
                </div>

                <div  className=' w-[300px] md:w-[400px] h-[60px] rounded-sm flex  justify-center items-center my-2  overflow-clip  text-lg'style={{ backgroundImage: `url(${rectangle13})`}}>WE PLAY </div>
            </div>
            <div className="card">
                <div className="img">
                    <img src={club3} alt="" className='rounded-sm md:w-[400px] w-[300px]'  height={330} />
                    <figcaption className='flex gap-3 my-4 '><img src={fullscreen} width={16} />Full Screen</figcaption>
                </div>

                <div  className='w-[300px] md:w-[400px] h-[60px] rounded-sm flex  justify-center items-center my-2  overflow-clip  text-lg'style={{ backgroundImage: `url(${rectangle13})`}}>WE SHOWOFF!</div>
            </div>
        </div>
    </div>
  )
}

export default club