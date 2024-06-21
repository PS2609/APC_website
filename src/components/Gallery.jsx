import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import GalleryBanner from "./GalleryBanner";
import GalleryCardDeck from "./GalleryCardDeck";

const Gallery = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [fade, setFade] = useState(false);
    const [swipeDelta, setSwipeDelta] = useState(0);
    const [isSwiping, setIsSwiping] = useState(false);

    const pages = [
        {
            title: "COSMOFLARE",
            bg_url: "src/images/cosmoflare_background.png",
            img_urls: [
                "src/images/event_images/IMG20240309125348.jpg",
                "src/images/event_images/IMG20240309125348.jpg",
                "src/images/event_images/IMG20240309133941.jpg"
            ],
            subtitle: "Cosmoflare is the annual fest of the Astronomy and Particle Physics Club at IIT Patna. It is a festival full of enjoyment and entertainment. It includes exhibitions, quizzes, guest lectures, practical sessions, and much more.",
            access_url: "gallery_cosmoflare",
        },
        {
            title: "LECTURE",
            bg_url: "src/images/lecture_banner.png",
            img_urls: [
                "src/images/event_images/IMG20240309125348.jpg",
                "src/images/event_images/IMG20240309125348.jpg",
                "src/images/event_images/IMG20240309133941.jpg"
            ],
            subtitle: "Cosmoflare is the annual fest of the Astronomy and Particle Physics Club at IIT Patna. It is a festival full of enjoyment and entertainment. It includes exhibitions, quizzes, guest lectures, practical sessions, and much more.",
            access_url: "gallery_lecture"
        },
        {
            title: "EVENTS",
            bg_url: "src/images/resources_background.png",
            img_urls: [
                "src/images/event_images/IMG20240309125348.jpg",
                "src/images/event_images/IMG20240309125348.jpg",
                "src/images/event_images/IMG20240309133941.jpg"
            ],
            subtitle: "Cosmoflare is the annual fest of the Astronomy and Particle Physics Club at IIT Patna. It is a festival full of enjoyment and entertainment. It includes exhibitions, quizzes, guest lectures, practical sessions, and much more.",
            access_url: "gallery_events"
        }
    ];

    const handleIndicatorClick = (pageNumber) => {
        setFade(true);
        setTimeout(() => {
            setCurrentPage(pageNumber);
            setFade(false);
        }, 300);
    };

    const handleExploreButtonClick = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        if (!isSwiping) {
            setSwipeDelta(0);
        }
    }, [isSwiping]);

    const handleSwiping = (e) => {
        let deltaX = e.deltaX;
        if (deltaX > 340) {
            deltaX = 340;
        } else if (deltaX < -340) {
            deltaX = -340;
        }
        setSwipeDelta(deltaX);
        setIsSwiping(true);
        console.log(deltaX);
    };

    const handleSwipedLeft = () => {
        if (swipeDelta < -100) {
            setFade(true);
            setTimeout(() => {
                setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
                setFade(false);
                setSwipeDelta(0);
                setIsSwiping(false);
            }, 200);
        } else {
            setSwipeDelta(0);
            setIsSwiping(false);
        }
    };

    const handleSwipedRight = () => {
        if (swipeDelta > 100) {
            setFade(true);
            setTimeout(() => {
                setCurrentPage((prevPage) => (prevPage - 1 + pages.length) % pages.length);
                setFade(false);
                setSwipeDelta(0);
                setIsSwiping(false);
            }, 200);
        } else {
            setSwipeDelta(0);
            setIsSwiping(false);
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleSwipedLeft,
        onSwipedRight: handleSwipedRight,
        onSwiping: handleSwiping,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return (
        <>
            <div {...(window.innerWidth <= 768 ? handlers : null)} className="relative w-full h-full">
                <div className="relative w-full h-full overflow-clip z-0 m-0 p-0">
                    <div className={`flex transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                        <div key={currentPage} className="w-full flex-shrink-0 overflow-clip">
                            <GalleryBanner
                                title={pages[currentPage].title}
                                bg_url={pages[currentPage].bg_url}
                                subtitle={pages[currentPage].subtitle}
                                img_urls={pages[currentPage].img_urls}
                                page_index={currentPage}
                                buttonOnClick={handleExploreButtonClick}
                            />
                        </div>
                    </div>
                    <div className="absolute bottom-[10vh] flex justify-center w-full">
                        {pages.map((_, pageNumber) => (
                            <div
                                key={pageNumber}
                                className={`w-4 h-4 mx-1 rounded-full ${pageNumber === currentPage ? 'bg-white' : 'bg-gray-500'}`}
                                onClick={() => handleIndicatorClick(pageNumber)}
                            ></div>
                        ))}
                    </div>
                </div>
                <div className="absolute z-10 hidden md:block bottom-[10vh] right-[5vw]  w-[500px] xl:w-[670px] h-[500px] overflow-clip">
                    <div className="flex flex-col justify-center h-[100%]">
                        <div {...handlers} className={`flex flex-row justify-start  gap-[20px] transition-transform ${fade ? "duration-300" : "duration-200"}`} style={{ transform: `translateX(${isSwiping ? swipeDelta / 1.2 - currentPage * 340 : -currentPage * 340}px)` }}>
                            {pages.map((card, idx) => (
                                <div
                                    key={idx}
                                    className={`transition-opacity duration-300 ${idx === currentPage ? 'opacity-100' : 'opacity-90'} flex flex-col justify-end`}
                                >
                                    <div className={`w-[320px] h-[400px] overflow-clip flex flex-col justify-end`}>
                                        <img className={`w-[320px] h-[${idx === currentPage ? '400px' : '390px'}] rounded-2xl object-cover`}
                                            style={{ height: idx === currentPage ? `${(400 - ((swipeDelta * (currentPage - idx) >= 0) && (Math.abs(currentPage - idx) <= 1)) * 80 * Math.abs(swipeDelta) / 340)}px` : `${320 + ((swipeDelta * (currentPage - idx) >= 0) && (Math.abs(currentPage - idx) <= 1)) * 80 * Math.abs(swipeDelta) / 340}px` }}
                                            src={card.img_urls[0]} alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <GalleryCardDeck title={"Gallery"} subtitle={"Images that tell story"} />
            <GalleryCardDeck title={"Astrophotography Gallery"} />
        </>
    );
};

export default Gallery;
