import React from 'react'
import bgimage from '../images/background1.png'
import Rectangle9 from '../images/Rectangle 9.png'

const events = () => {
    return (
        <div className="bg-img bg-cover  w-full p-5 md:p-10   text-white" style={{ backgroundImage: `url(${bgimage})` }}>
            <h1 className=' text-[50px] md:text-[36px] text-white text-center'>EVENTS <span className="text-red-800 w-3 h-3 rounded-full">.</span></h1>
            <div className='w-[85vw] md:w-[80vw] my-5 mx-auto h-[10vh] text-black bg-white flex items-center px-5 gap-5 '>
                <div className='text-[15x] sm:[20px] md:text-[30px]'>UPCOMING</div>
                <div className='text-[15px] sm:[20px] md:text-[30px]'>|</div>
                <div className="events text-[13px] md:text-[25px] text-red-700">No Upcoming Events </div>

            </div>
            {/* <div className="card-container flex justify-center flex-wrap gap-5  ">
                <div className="card w-[400px] sm:h-[290px]  bg-white  p-3 rounded-none ">
                    <div className=" sm:flex ">
                        <img src={Rectangle9} className='w-[380px] sm:w-[200px]' alt="" />
                        <div className="text px-7 text-center sm:text-start text-black">
                            <div className="name py-7 ">Name</div>
                            <ul className=' list-disc list-inside'>
                                <li>Point 1</li>
                                <li>Point 2</li>
                                <li>Point 3</li>
                                <li>Point 4</li>
                            </ul>
                            <div className=" py-7 date">Date</div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default events