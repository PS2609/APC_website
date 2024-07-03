import React, { useState } from "react";

const ActiveEvent = ({ eventObj, handleCloseButton }) => {
    return (
        <>
            <div className="flex justify-center gap-7 w-full flex-wrap relative ">
                {eventObj.pictures.map((pic) => {
                    return (<div key={pic} className="card">
                        <div className="img">
                            <img src={pic} alt="" className='rounded-sm md:w-[300px] w-[400px] h-[400px] object-cover  '  />
                        </div>

                    </div>)
                })}
            </div>
            <div className='mt-16 flex flex-row justify-center'>
                <button onClick={handleCloseButton} className='flex flex-row justify-center gap-3 w-[156px] rounded-lg text-white text-lg font-bold text-nowrap p-[16px] bg-[#520000] tracking-wider'>
                    <span className='my-auto'>Back</span>
                </button>
            </div>
        </>
    )
}

export default ActiveEvent;