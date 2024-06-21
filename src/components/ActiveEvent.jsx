import React, { useState } from "react";

const ActiveEvent = ({ eventObj, handleCloseButton }) => {
    const [showImages, setShowImages] = useState(false);
    const [fullScreen, setFullScreen] = useState("")
    const handleClickShowImages = () => {
        setShowImages(!showImages);
    }
    const handleFullScreen = (pic) => {
        setFullScreen(pic);
        console.log(fullScreen)
    }
    
    
    return (
            <>
            <div className="flex justify-center gap-7 w-full flex-wrap ">
                {eventObj.pictures.map((pic) => {
                    return (<div key={pic} className="card">
                        <div className="img">
                            {fullScreen===pic ?<img src={pic} alt="" className='rounded-sm w-screen' height={400} />:<img src={pic} alt="" className='rounded-sm md:w-[300px] w-[300px]' height={330} />}
                        </div>
                        <button onClick={()=>{handleFullScreen(pic)}} className="py-2 flex gap-3 ">
                            <img  src="src\images\fullscree.svg" width={16} alt="" />
                            <span>Full Screen</span>
                        </button>
                        
                    </div>)
                })}
            </div>
            <div className='mt-16 flex flex-row justify-center'>
                    <button onClick={handleCloseButton} className='flex flex-row justify-center gap-3 w-[156px] rounded-lg text-white text-lg font-bold text-nowrap p-[16px] bg-[#520000] tracking-wider'>
                        <span className='my-auto'>Back</span>
                    </button>
            </div>
            
            </>
        // <div className="p-2">
        //     <div className="relative p-4 rounded-lg bg-transparent animate-glow">
        //         <div className="p-2 border-t-[2px] border-l-[4px] border-white">
        //             <h1 className="font-bold font-Goldman text-white text-2xl p-2 tracking-wider text-nowrap text-center md:text-left animate-text-glow">{eventObj.event}</h1>
        //             <p className="font-bold text-white opacity-[0.7] font-Montserrat md:text-left p-2 text-lg text-center animate-appear">{eventObj.text}</p>
        //         </div>
                    /* <div className="absolute top-6 right-4 rounded-full">
                    <button onClick={handleCloseButton} className=""><img className="w-[28px] h-[28px]" src="src/images/icons8-close-48.png" alt="" /></button>
                </div> */
        //         <div className="border-r-[5px] border-b-[2px] border-white p-2 pb-6 flex flex-col justify-center">
        //             <button onClick={handleClickShowImages} className="p-2">{showImages ? "Hide Images" : "Show Images"}</button>
        //             <div className="flex flex-row flex-wrap gap-4 justify-center">
        //                 {showImages ? eventObj.pictures.map((picture_url) => {
        //                     return (
        //                         <div className="rounded-md overflow-clip border-r-[4px] border-b-[2px] border-black">
        //                             <img className="w-[200px]" src={picture_url} alt="" />
        //                         </div>
        //                     );
        //                 })
        //                     : null
        //                 }
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ActiveEvent;