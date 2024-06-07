import React from "react";
import { useState, useEffect } from "react";

const Resources = () => {
    return (
        <>
            <ResourcesBanner />
            <Session />
            <AboutTelescope />
            <MagazineSection />
        </>
    )
}

const ResourcesBanner = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const backgroundPath = 'src/images/resources_background.png';
    const title = 'Resources';
    const subtitle = 'Images that tell story'
    const title2 = 'Articles'

    useEffect(() => {
        fetch('src/assets/resource_details.json') // Ensure this path is correct
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setData(data.resource);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="w-full h-full overflow-hidden z-0 m-0 p-0" style={{
            background: `url(${backgroundPath})`,
            backgroundPosition: 'center',
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
        }}>
            <div className="bg-black bg-opacity-[0.0]">
                <div className="mt-[10vh] p-2">
                    <div className="flex flex-col gap-10 p-4">
                        <div className="p-1">
                            <div className="flex flex-row justify-center">
                                <h1 className="font-bold text-center text-4xl tracking-wider text-gradient">
                                    {title}
                                </h1>
                            </div>
                            <p className="p-1 text-center tracking-widest text-white text-lg">
                                {subtitle}
                            </p>
                        </div>
                        <div className=" p-0 flex flex-col justify-center h-[60%]">
                            <div className=" p-1">
                                <h1 className="text-white font-Montserrat text-3xl font-bold tracking-wider p-4 mb-5 text-center">{title2}</h1>
                            </div>
                            <div className="relative  p-2">
                                {loading ? (
                                    <div>Loading...</div>
                                ) : error ? (
                                    <div>Error: {error.message}</div>
                                ) :
                                    <Carousal data={data} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Carousal = ({ data }) => {
    const [visibleIndex, setVisibleIndex] = useState(0);
    const pages = data.length;

    const slides = Array.from({ length: pages }, (_, index) => {
        return (index === visibleIndex)
            ? <div className="flex flex-col justify-end"><div className="bg-white w-10 h-2 p-1 rounded-sm"></div></div>
            : <div className="flex flex-col justify-end"><div className="bg-slate-400 w-10 h-2 p-1 rounded-sm"></div></div>
    })

    const handleClickNext = () => {
        setVisibleIndex((visibleIndex + 1 < pages) ? visibleIndex + 1 : pages - 1);
    }
    const handleClickPrev = () => {
        setVisibleIndex((visibleIndex > 0) ? visibleIndex - 1 : 0);
    }

    return (
        <div className="">
            <div className="relative flex flex-row justify-center p-8">
                <div className="w-[256px] md:w-[300px] h-[256px] md:h-[300px] overflow-clip p-0 m-0 hover:cursor-pointer hover:animate-border-glow rounded-lg">
                    <div className="flex transition-all duration-200" style={{ transform: `translateX(-${(visibleIndex) * 100}%)` }}>
                        {data.map((cur, idx, arr) => {
                            return (
                                <ArticleCard title={cur.title} img_url={cur.img} desc={cur.desc} key={cur.id} />
                            )
                        })}
                    </div>
                </div>
                {(visibleIndex > 0) && <div className="absolute left-0 top-[40%]">
                    <button onClick={handleClickPrev} className="rounded-full bg-white bg-opacity-[0.5] w-[36px]"><img src="/src/images/icons8-left-arrow-50.png" alt="" /></button>
                </div>}
                {(visibleIndex < pages - 1) && <div className="absolute right-0 top-[40%]">
                    <button onClick={handleClickNext} className="rounded-full bg-white bg-opacity-[0.5] w-[36px]"><img src="/src/images/icons8-right-arrow-50.png" alt="" /></button>
                </div>}
                <div className="absolute bottom-0 p-2">
                    <div className="flex flex-row justify-center gap-2">
                        {slides}
                    </div>
                </div>
            </div>
        </div>
    )
}

const ArticleCard = ({ title, img_url, id }) => {
    return (
        <div className="relative rounded-lg overflow-hidden w-[256px] md:w-[300px] h-[256px] md:h-[300px] flex-shrink-0">
            <div className="justify-center">
                <img src={img_url} alt="" />
                <div className="absolute bottom-0 w-full p-4 bg-black rounded-b-lg">
                    <p className="text-center text-white font-bold tracking-wide font-Mono">{title}</p>
                </div>
            </div>
        </div>
    )
}

const Session = () => {
    const bgImagePath = 'src/images/resources_background.png';
    const title = "Our Sessions"
    const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    const imagePath = "src/images/blank_image.png";
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('src/assets/sessions_details.json') // Ensure this path is correct
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setData(data.sessions);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);


    return (
        <div className="w-full h-fit overflow-clip" style={{
            background: `url(${bgImagePath})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <div className="flex flex-row justify-center md:my-auto h-full py-16 bg-black bg-opacity-[0.4]">
                <div className=" p-2 flex flex-col justify-center w-[90%] gap-5">
                    <div className="p-2 flex flex-row justify-center">
                        <h1 className="font-bold text-4xl text-gradient tracking-widest text-center w-fit">{title}</h1>
                    </div>
                    <div className="flex flex-row justify-center">
                        <div className=" p-4 flex flex-col flex-wrap justify-center md:flex-row gap-10">
                            {loading ? (
                                <div>Loading...</div>
                            ) : error ? (
                                <div>Error: {error.message}</div>
                            ) : (
                                data.map((cur, idx, arr) => {
                                    return (
                                        <SessionCard title={cur.title} img={cur.img} desc={cur.desc} key={cur.id} />
                                    )
                                }
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SessionCard = ({ title, img, desc }) => {

    return (
        <div className="">
            <div className=" p-4 flex flex-col bg-black rounded-3xl w-[256px] hover:shadow-[0px_0px_30px_15px_rgba(255,255,255,0.5)] hover:cursor-pointer">
                <div className="w-[220px] p-2">
                    <img src={img} alt="" />
                </div>
                <div className="p-2">
                    <div className="flex flex-col p-2">
                        <h1 className="font-Cutive font-bold text-lg text-white">{title}</h1>
                    </div>
                    <div>
                        <p className="font-Mono font-bold text-sm">{desc}</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row justify-center p-2">
                        <button className="bg-white text-black rounded-full text-sm px-2 py-1 font-bold">SESSION DETAILS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AboutTelescope = () => {
    const [readMore, setReadMore] = useState(false);
    const title = "About Our Telescopes";
    const text = "Optical Tube Length: 610 millimetre\nMagnification: x 130\nFocal length: 650 millimetre\nFaintest Steller Magnitude: 12.2\nDiameter / Aperture: 130 millimetre\nTelescope Type: Reflecting\nMount Type: Equatorial\nEyepieces: - 20mm (yielding 32.5x magnification) \n- 10mm (yielding 65x magnification)\nDigital Eyepiece: SVBONY SV105 Digital Telescope Camera (1.25, 2 Mega Pixels)\nFilters: 80A Blue Planetary Filter, 25 Red Planetary Filter, Moon Filter";
    const initLen = 400;

    const handleClickReadMore = () => {
        setReadMore(!readMore);
    }

    return (
        <div className="bg-black  w-full overflow-clip">
            <div className="p-2 h-full w-full py-16">
                <div className="flex flex-col justify-center">
                    <div className="p-2 flex flex-row justify-center md:justify-start md:ml-16">
                        <h1 className="font-bold text-3xl text-gradient-2 tracking-widest text-center md:text-left w-fit">{title}</h1>
                    </div>
                    <div className=" p-2">
                        <div className="  p-2 flex flex-col md:flex-row justify-center">
                            <div className=" order-2 lg:order-1 p-2 lg:w-[40%] flex flex-col justify-start">
                                {readMore ?
                                    <p className="font-bold font-Mono text-justify text-white opacity-[0.9] p-2">{text}</p>
                                    :
                                    <p className="font-bold font-Mono text-justify text-gradient-3 p-2">{text.substring(0, (text.length > initLen) ? initLen : text.length)}</p>
                                }
                                <div className="flex flex-row justify-center my-6">
                                    {readMore ?
                                        <button className="text-white font-bold" onClick={handleClickReadMore}>Read Less</button>
                                        :
                                        <button className="text-white font-bold" onClick={handleClickReadMore}>Read More</button>
                                    }
                                </div>
                            </div>
                            <div className=" order-1 lg:order-2 flex flex-row justify-center md:mx-8 lg:w-[50%]">
                                <div className="relative  h-[320px] w-[230px] lg:w-[320px] md:h-[445px]">
                                    <img className="absolute w-[220px] md:w-[320px] left-[15px] z-10" src="src/images/telescope.png" alt="" />
                                    <img className="absolute w-[220px] md:w-[320px] top-[60%] md:top-[45%] lg:top-[60%] z-[0]" src="src/images/telescope_bottom.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const MagazineSection = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibleItems, setVisibleItems] = useState(1);
    const [seeMore, setSeeMore] = useState(false);

    const bgImagePath = 'src/images/resources_background.png';
    const title = "OUR MAGAZINE";

    useEffect(() => {
        fetch('src/assets/magazine_details.json') // Ensure this path is correct
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setData(data.items);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });

        handleVisibility();

        window.addEventListener('resize', handleVisibility);
        return () => {
            window.removeEventListener('resize', handleVisibility);
        };
    }, []);

    const handleVisibility = () => {
        if (window.innerWidth >= 1024) {
            setVisibleItems(2); // Display 2 magazine on desktop
        } else if (window.innerWidth >= 768) {
            setVisibleItems(2); // Display 2 magazine on tablet
        } else {
            setVisibleItems(1); // Display 1 magazine on mobile
        }
    }

    const handleClickSeeMore = () => {
        setSeeMore(!seeMore);
    }

    return (
        <div className="w-full  overflow-clip" style={{
            background: `url(${bgImagePath})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
        }}>
            <div className="w-full p-2 py-16 bg-black bg-opacity-[0.3]">
                <div className=" p-2 flex flex-col justify-center">
                    <div className="p-2 flex flex-row justify-center md:ml-16">
                        <div className="flex flex-col justify-center gap-3">
                            <h1 className="font-bold text-3xl text-gradient tracking-widest text-center md:text-left">{title}</h1>
                            <p className="font-bold text-white font-Mono tracking-wide text-center">Check out the magazine here</p>
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className=" p-4 py-8 lg:mx-[10vw]">
                        <div className=" p-2 flex flex-col md:flex-row flex-wrap gap-[10vw] justify-around">
                            {loading ? (
                                <div>Loading...</div>
                            ) : error ? (
                                <div>Error: {error.message}</div>
                            ) : (
                                data.map((cur, idx, arr) => {
                                    return (seeMore || (idx < visibleItems))
                                        ? <MagazineCard imgPath={cur.img} key={cur.id} title={cur.title} cImgPath={cur.content} />
                                        : null;
                                })
                            )}
                        </div>
                        <div className='mt-16 flex flex-row justify-center'>
                            <button onClick={handleClickSeeMore} className='flex flex-row justify-center gap-3 w-[156px] rounded-lg text-white text-lg font-bold text-nowrap p-[16px] bg-[#520000] tracking-wider'>
                                <span className='my-auto'>{seeMore ? "See Less" : "See More"}</span>
                                {!seeMore ? <img className='my-auto' src="src/images/down_arrow.png" alt="" /> : null}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MagazineCard = ({ title, imgPath, cImgPath, onClickListener }) => {
    return (
        <div className="">
            <div className=" flex flex-col justify-center">
                <div className="flex flex-row justify-center">
                    <div className="border-2 border-white px-1 py-1 rounded-full w-[300px] lg:w-[350px]">
                        <h1 className="text-white font-bold font-Mono tracking-wide text-center">{title}</h1>
                    </div>
                </div>

                <div className="p-2 flex flex-row justify-center">
                    <div className="w-[300px] lg:w-[350px]">
                        <div className="cursor-pointer group perspective">
                            <div className="relative preserve-3d group-hover:my-rotate-y-180 duration-500">
                                <div className="absolute backface-hidden">
                                    <img src={imgPath} alt="" />
                                </div>
                                <div className="my-rotate-y-180 backface-hidden overflow-hidden" >
                                    <img src={cImgPath} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=" p-2 flex flex-row justify-center">
                    <div className="cursor-pointer rounded-xl  bg-white hover:bg-slate-200 px-2 py-1 w-[250px] lg:w-[300px] flex flex-row justify-evenly">
                        <img className="w-[20px] my-auto mr-1" src="src/images/left_dir.png" alt="" />
                        <img className="w-[20px] my-auto mr-1" src="src/images/right_dir.png" alt="" />
                        <img className="w-[50px] my-auto mr-1" src="src/images/download.png" alt="" />
                        <img className="w-[20px] my-auto mr-1" src="src/images/full_screen.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Resources