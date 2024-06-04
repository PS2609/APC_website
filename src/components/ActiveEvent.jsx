import React, { useState } from "react";

const ActiveEvent = ({ eventObj, handleCloseButton }) => {
    const [showImages, setShowImages] = useState(false);
    const handleClickShowImages = () => {
        setShowImages(!showImages);
    }
    return (
        <div className="p-2">
            <div className="relative p-4 rounded-lg bg-transparent animate-glow">
                <div className="p-2 border-t-[2px] border-l-[4px] border-white">
                    <h1 className="font-bold font-Goldman text-white text-2xl p-2 tracking-wider text-nowrap text-center md:text-left animate-text-glow">{eventObj.event}</h1>
                    <p className="font-bold text-white opacity-[0.7] font-Montserrat md:text-left p-2 text-lg text-center animate-appear">{eventObj.text}</p>
                </div>
                <div className="absolute top-6 right-4 rounded-full">
                    <button onClick={handleCloseButton} className=""><img className="w-[28px] h-[28px]" src="src/images/icons8-close-48.png" alt="" /></button>
                </div>
                <div className="border-r-[5px] border-b-[2px] border-white p-2 pb-6 flex flex-col justify-center">
                    <button onClick={handleClickShowImages} className="p-2">{showImages ? "Hide Images" : "Show Images"}</button>
                    <div className="flex flex-row flex-wrap gap-4 justify-center">
                        {showImages ? eventObj.pictures.map((picture_url) => {
                            return (
                                <div className="rounded-md overflow-clip border-r-[4px] border-b-[2px] border-black">
                                    <img className="w-[200px]" src={picture_url} alt="" />
                                </div>
                            );
                        })
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActiveEvent;