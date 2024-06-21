import React from "react";
import { useState, useEffect } from "react";
import GalleryBanner from "./GalleryBanner";
import GalleryCardDeck from "./GalleryCardDeck";

const Gallery = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pages = [
        {
            title: "COSMOFLARE",
            bg_url: "src/images/cosmoflare_background.png",
            img_urls: ["src/images/event_images/IMG20240309125348.jpg",
                "src/images/event_images/IMG20240309125348.jpg",
                "src/images/event_images/IMG20240309133941.jpg"
            ],
            subtitle: "Cosmoflare is the annual fest of the Astronomy and Particle Physics Club at IIT Patna. It is a festival full of enjoyment and entertainment. It includes exhibitions, quizzes, guest lectures, practical sessions, and much more.",
            access_url: "gallary_cosmoflare",
        },
        {
            title: "LECTURE",
            bg_url: "src/images/lecture_astr_background.png",
            img_urls: ["src/images/event_images/IMG20240309125348.jpg",
                "src/images/event_images/IMG20240309125348.jpg",
                "src/images/event_images/IMG20240309133941.jpg"
            ],
            subtitle: "Cosmoflare is the annual fest of the Astronomy and Particle Physics Club at IIT Patna. It is a festival full of enjoyment and entertainment. It includes exhibitions, quizzes, guest lectures, practical sessions, and much more.",
            access_url: "gallary_lecture"
        },
        {
            title: "EVENTS",
            bg_url: "src/images/event_star_background.png",
            img_urls: ["src/images/event_images/IMG20240309125348.jpg",
                "src/images/event_images/IMG20240309125348.jpg",
                "src/images/event_images/IMG20240309133941.jpg"
            ],
            subtitle: "Cosmoflare is the annual fest of the Astronomy and Particle Physics Club at IIT Patna. It is a festival full of enjoyment and entertainment. It includes exhibitions, quizzes, guest lectures, practical sessions, and much more.",
            access_url: "gallary_events"
        }
    ];

    const handleIndicatorClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleExploreButtonClick = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentPage((prevPage) => (1 + prevPage % 3));
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="relative w-full h-full overflow-hidden z-0 m-0 p-0">
                <div className="flex transition-all duration-200" style={{ transform: `translateX(-${(currentPage - 1) * 100}%)` }}>
                    {/* Render all pages and position them horizontally */}
                    <div className="w-full flex-shrink-0">
                        <GalleryBanner title={pages[0].title} bg_url={pages[0].bg_url} subtitle={pages[0].subtitle} img_urls={pages[0].img_urls} page_index={0} buttonOnClick={handleExploreButtonClick} />
                    </div>
                    <div className="w-full flex-shrink-0">
                        <GalleryBanner title={pages[1].title} bg_url={pages[1].bg_url} subtitle={pages[1].subtitle} img_urls={pages[1].img_urls} page_index={1} buttonOnClick={handleExploreButtonClick} />
                    </div>
                    <div className="w-full flex-shrink-0">
                        <GalleryBanner title={pages[2].title} bg_url={pages[2].bg_url} subtitle={pages[2].subtitle} img_urls={pages[2].img_urls} page_index={2} buttonOnClick={handleExploreButtonClick} />
                    </div>
                </div>
                {/* Indicator */}
                <div className="absolute bottom-[10vh] flex justify-center w-full">
                    {[1, 2, 3].map((pageNumber) => (
                        <div
                            key={pageNumber}
                            className={`w-4 h-4 mx-1 rounded-full ${pageNumber === currentPage ? 'bg-white' : 'bg-gray-500'
                                }`}
                            onClick={() => handleIndicatorClick(pageNumber)}
                        ></div>
                    ))}
                </div>
            </div>
            <GalleryCardDeck title={"Gallery"} subtitle={"Images that tell story"} />
            {/* <GalleryCardDeck title={"Astrophotography Gallery"} /> */}
        </>
    );
}
export default Gallery;