import React from "react";

const GalleryBanner = ({ title, bg_url, buttonOnClick, subtitle, img_urls }) => {
    return (
        <div className="h-[100vh] w-[100vw] overflow-clip" style={{
            background: `url(${bg_url})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <div className="h-full w-full mr-0 my-auto p-4 md:pr-0">
                <div className="h-full p-2 md:pr-0 flex flex-row justify-between ">
                    <div className="mt-[15vh] md:ml-10 ">
                        <div className="flex flex-col md:w-[45vw] lg:w-[40vw] justify-start text-white">
                            <h1 className="font-Montserrat text-4xl lg:text-5xl font-semibold tracking-[0.1em] md:tracking-[0.2em] lg:tracking-[0.3em] xl:tracking-[0.7em] py-8 px-2 mb-4 text-center md:text-left">{title}</h1>
                            <section className="p-3 md:p-4 lg:p-6 font-bold">
                                <p className="text-wrap text-center md:text-left text-base tracking-wide w-[90%] mx-auto md:mx-0">{subtitle}</p>
                            </section>
                        </div>
                        <div className="mt-[5vh] md:mt-[2vh] xl:mt-[10vh] flex flex-row justify-center">
                            <div>
                                <button className="button p-4 bg-purple-800 rounded-xl font-bold font-Montserrat hover:bg-purple-500" onClick={buttonOnClick}>Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryBanner;
