import React from "react";

const GallaryBanner = ({ title, bg_url, buttonOnClick, subtitle, img_urls }) => {
    return (
        <div className="h-[100vh] w-[100vw] overflow-clip" style={{
            background: `url(${bg_url})`,
            backgroundPosition: "center"
        }}>
            <div className="h-full w-full mr-0 my-auto p-4 md:pr-0 ">
                <div className="h-full p-2 md:pr-0 flex flex-row justify-between ">
                    <div className="mt-[20vh] md:ml-10 ">
                        <div className="flex flex-col md:w-[45vw] lg:w-[40vw]  justify-start text-white">
                            <h1 className="font-Montserrat text-4xl lg:text-5xl font-semibold tracking-[0.1em] md:tracking-[0.2em] lg:tracking-[0.3em] xl:tracking-[0.7em] py-8 px-2 mb-4 text-center md:text-left">{title}</h1>
                            <section className="p-3 md:p-4 lg:p-6 font-bold">
                                <p className=" text-wrap text-center md:text-left text-base tracking-wide w-[90%] mx-auto md:mx-0">{subtitle}</p>
                            </section>
                        </div>
                        <div className="mt-[5vh] md:mt-[2vh] xl:mt-[10vh] flex flex-row justify-center">
                            <div>
                                <button className="button p-4 bg-purple-800 rounded-xl font-bold font-Montserrat hover:bg-purple-500" onClick={buttonOnClick}>Explore</button>
                            </div>
                        </div>
                    </div>
                    <div className=" hidden md:block mt-[20vh] md:mb-5 xl:mb-0">
                        <div className=" pr-0 h-[100%] flex flex-col xl:flex-row justify-end">
                            <ul className="flex flex-col xl:flex-row justify-end xl:mb-[15vh]">
                                <li className="p-0 h-[25vh] xl:h-auto mr-[1vw] xl:mr-[1vw] flex flex-row xl:flex-col justify-center xl:justify-end w-[30vw] lg:w-[30vw] xl:w-[20vw]"><div className="opacity-[1] xl:h-[80%] w-[40vw] xl:w-auto border-r-[0.6em] xl:border-r-[1em] border-b-[0.7em] xl:border-b-[1em] border-black rounded-br-3xl overflow-clip"><img className="h-full w-full object-cover" src={img_urls[0]} alt="" /></div></li>
                                <li className="p-0 mt-5 h-[20vh] xl:h-auto xl:mt-0 xl:mr-[1vw] flex flex-row xl:flex-col justify-center xl:justify-end   w-[30vw] lg:w-[30vw] xl:w-[12vw]"><div className="opacity-[0.9] xl:h-[60%] w-[20vw] xl:w-auto rounded-xl xl:rounded-3xl overflow-clip"><img className="h-full w-full object-cover" src={img_urls[1]} alt="" /></div></li>
                                <li className="p-0 mt-5 h-[20vh] xl:h-auto xl:mt-0 xl:mr-[-4vw] flex flex-row xl:flex-col justify-center xl:justify-end  w-[30vw] lg:w-[30vw] xl:w-[12vw]"><div className="opacity-[0.9] xl:h-[60%] w-[20vw] xl:w-auto rounded-xl xl:rounded-3xl overflow-clip"><img className="h-full w-full object-cover" src={img_urls[2]} alt="" /></div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GallaryBanner;