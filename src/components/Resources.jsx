import React from "react";
import { useState, useEffect } from "react";

const Resources = () => {
    return (
        <div className="overflow-clip mt-[-1vh]">
            <ResourcesBanner />
            <Session />
            <AboutTelescope />
            <MagazineSection />
        </div>
    )
}

const ResourcesBanner = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibilityRange, setVisibilityRange] = useState([0, 0]);

    const backgroundPath = 'src/images/resources1_background.png';
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
        handleVisibility();

        window.addEventListener('resize', handleVisibility);
        return () => {
            window.removeEventListener('resize', handleVisibility);
        };
    }, []);

    const handleVisibility = () => {
        if (window.innerWidth >= 1024) {
            setVisibilityRange([0, 2]); // Display 3 posts on desktop
        } else if (window.innerWidth >= 768) {
            setVisibilityRange([0, 1]); // Display 2 posts on tablet
        } else {
            setVisibilityRange([0, 0]); // Display 1 posts on mobile
        }
    }

    const handleClickNext = () => {
        if (visibilityRange[1] + 1 < data.length)
            setVisibilityRange([visibilityRange[0] + 1, visibilityRange[1] + 1]);
    }
    const handleClickPrev = () => {
        if (visibilityRange[0] > 0) {
            setVisibilityRange([visibilityRange[0] - 1, visibilityRange[1] - 1]);
        }
    }

    return (
        <div className="w-[100vw] h-[100vh]  overflow-clip" style={{
            background: `url(${backgroundPath})`,
            backgroundPosition: 'center',
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
        }}>
            <div className=" mt-[10vh] p-2 w-full h-full">
                <div className=" flex flex-col gap-10 p-4 h-full">
                    <div className=" p-1">
                        <h1 className="font-bold text-center text-4xl tracking-wider text-gradient">
                            {title}
                        </h1>
                        <p className="p-1 text-center tracking-widest text-white text-lg">
                            {subtitle}
                        </p>
                    </div>
                    <div className=" p-0 flex flex-col justify-center h-[60%]">
                        <div className=" p-1">
                            <h1 className="text-white font-Montserrat text-3xl font-bold tracking-wider p-4 mb-5 text-center">{title2}</h1>
                        </div>
                        <div className="relative  p-2">
                            <div className="absolute left-0 top-[15vh]">
                                <div onClick={handleClickPrev} className="rounded-full bg-white">
                                    <img className="h-[32px] md:h-[40px] w-[32px] md:w-[40px]" src="src/images/icons8-left-arrow-50.png" alt="" />
                                </div>
                            </div>
                            <div className="absolute right-0 top-[15vh]">
                                <div onClick={handleClickNext} className="rounded-full bg-white">
                                    <img className="h-[32px] md:h-[40px] w-[32px] md:w-[40px]" src="src/images/icons8-right-arrow-50.png" alt="" />
                                </div>
                            </div>
                            <div className=" p-2 flex flex-row justify-evenly flex-nowrap my-auto">
                                {loading ? (
                                    <div>Loading...</div>
                                ) : error ? (
                                    <div>Error: {error.message}</div>
                                ) : (
                                    data.map((cur, idx, arr) => {
                                        return ((idx >= visibilityRange[0]) && (idx <= visibilityRange[1]))
                                            ? <ArticleCard title={cur.title} img_url={cur.img} key={cur.id} />
                                            : null;
                                    })
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ArticleCard = ({ title, img_url, id }) => {
    return (
        <div className="relative rounded-lg overflow-clip w-[256px] md:w-[300px] h-[256px] md:h-[300px] flex-shrink-0 my-auto border-4 border-transparent hover:cursor-pointer hover:animate-border-glow">
            <div className="justify-center">
                <img src={img_url} alt="" />
                <div className="absolute bottom-0 w-full p-4 bg-[#333333] rounded-b-lg">
                    <p className="text-center text-white font-bold tracking-wide font-Montserrat">{title}</p>
                </div>
            </div>
        </div>
    )
}

const Session = () => {
    const bgImagePath = 'src/images/event_star_background.png';
    const title = "Our Sessions"
    const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    const imagePath = "src/images/blank_image.png";

    return (
        <div className="w-full h-fit overflow-clip" style={{
            background: `url(${bgImagePath})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <div className="flex flex-row justify-center md:my-auto h-full py-16">
                <div className=" p-2 flex flex-col justify-center w-[90%]">
                    <div className="p-2  flex flex-row justify-center md:justify-start">
                        <h1 className="font-bold text-3xl text-gradient-2 tracking-widest text-center md:text-left w-fit">{title}</h1>
                    </div>
                    <ul className=" p-4 flex flex-col lg:flex-row gap-5 lg:gap-10">
                        <li className="order-2 lg:order-1 ">
                            <p className="font-bold font-Montserrat p-2 text-white opacity-[0.9] text-justify">{text}</p>
                        </li>
                        <li className="order-1 lg:order-2 p-2 flex flex-row justify-center">
                            <img className="w-[70%] md:w-[40%] lg:w-[100%] aspect-auto" src={imagePath} alt="" />
                        </li>
                    </ul>

                    <div className="flex flex-row justify-center">
                        <div className="bg-">
                            <button className="bg-[#520000]  p-2 rounded-lg flex flex-row justify-center gap-2">
                                <span className="text-white font-bold font-Montserrat text-sm my-auto">Get the Slides</span>
                                <img className="bg-white w-[28px] rounded-full p-1" src="src/images/play.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AboutTelescope = () => {
    const [readMore, setReadMore] = useState(false);
    const title = "About Our Telescopes";
    const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
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
                                    <p className="font-bold font-Montserrat text-justify text-white opacity-[0.9] p-2">{text}</p>
                                    :
                                    <p className="font-bold font-Montserrat text-justify text-gradient-3 p-2">{text.substring(0, (text.length > initLen) ? initLen : text.length)}</p>
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

    const bgImagePath = 'src/images/event_star_background.png';
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
            <div className="w-full  p-2 py-16">
                <div className=" p-2 flex flex-col justify-center">
                    <div className="p-2 flex flex-row justify-center md:ml-16">
                        <h1 className="font-bold text-3xl text-gradient-2 tracking-widest text-center md:text-left w-fit">{title}</h1>
                    </div>
                    <div className=" p-4 py-14">
                        <div className=" p-2 flex flex-col md:flex-row flex-wrap gap-6 justify-evenly">
                            {loading ? (
                                <div>Loading...</div>
                            ) : error ? (
                                <div>Error: {error.message}</div>
                            ) : (
                                data.map((cur, idx, arr) => {
                                    return (seeMore || (idx < visibleItems))
                                        ? <MagazineCard imgPath={cur.img} key={cur.id} />
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

const MagazineCard = ({ imgPath, onClickListener }) => {
    return (
        <div className="">
            <div className=" flex flex-col justify-center">
                <div className=" p-2 flex flex-row justify-center">
                    <div className="w-[250px] lg:w-[300px] hover:animate-border-glow border-4 border-transparent">
                        <img src={imgPath} alt="" />
                    </div>
                </div>
                <div className=" p-2 flex flex-row justify-center">
                    <div className="cursor-pointer rounded-3xl  bg-white hover:bg-slate-200 px-4 py-2 w-fit flex flex-row justify-center">
                        <img className="w-[28px] my-auto mr-1" src="src/images/paper.png" alt="" />
                        <p className="text-black text-sm my-auto font-bold tracking-wide font-Montserrat">Download</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Resources