// src/EventCard.js
import React from 'react';

const EventCard = ({ title, onButtonClick, imageUrl, backgroundUrl, backgroundSvg, date, id }) => (
  <>
    <div className='block w-[220px] h-[193px] group'>
      <div className="relative flex flex-col justify-end rounded shadow-lg mx-auto my-2 w-[220px] h-[193px]">
        <div
          className="absolute inset-0 z-0 transition-transform duration-500 ease-in-out group-hover:rotate-180"
          style={{
            background: `url(${backgroundSvg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "220px 193px",
          }}
        ></div>
        <div
          className='relative z-10 w-[90%] h-[87%] rounded-sm overflow-hidden cursor-pointer'
          onClick={() => onButtonClick(id)}
          style={{
            background: `url(${backgroundUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className='w-full h-full rounded-sm overflow-hidden flex flex-col justify-center'>
            <img className='mt-2 mx-auto w-[90%] h-[65%] object-cover' src={imageUrl} alt="" />
            <div className='my-auto'>
              <p className='font-Goldman text-nowrap text-center text-bold text-white opacity-[0.9]'>{title}</p>
              <p className='font-Montserrat text-[#ead793] text-xs text-center text-bold opacity-[0.7] hidden group-hover:block'>{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='hidden w-[337px] h-[297px] my-2'>
      <div className='relative cursor-pointer flex justify-center group'>
        <div
          className="absolute inset-0 z-0 transition-transform duration-700 ease-in-out group-hover:rotate-180"
          style={{
            background: `url(${backgroundSvg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "337px 297px",
          }}
        ></div>
        <div
          className='relative z-10 flex flex-col justify-end rounded shadow-lg w-[337px] h-[297px] overflow-hidden'
          onClick={() => onButtonClick(id)}
        >
          <div
            className='relative z-10 w-[90%] h-[85%] rounded-sm overflow-hidden'
            style={{
              background: `url(${backgroundUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className='w-full h-full rounded-sm overflow-hidden flex flex-col justify-center'>
              <img className='mt-2 mx-auto w-[90%] h-[70%]' src={imageUrl} alt="" />
              <div className='my-auto'>
                <p className='font-Goldman text-nowrap text-center text-bold text-white opacity-[0.9]'>{title}</p>
                <p className='font-Montserrat text-[#ead793] text-xs text-center text-bold opacity-[0.7] hidden group-hover:block'>{date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default EventCard;
