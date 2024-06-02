import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';

const GallaryCardDeck = ({ title, subtitle }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visiblePosts, setVisiblePosts] = useState(2);
    const [seeMoreButtonState, setSeeMoreButtonState] = useState(false);

    useEffect(() => {
        fetch('src/assets/events_details.json') // Ensure this path is correct
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setData(data.events);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
        handleVisibility();
    }, []);

    const handleVisibility = () => {
        if (window.innerWidth >= 1024) {
            setVisiblePosts(8); // Display 8 posts on desktop
        } else if (window.innerWidth >= 768) {
            setVisiblePosts(6); // Display 6 posts on tablet
        } else {
            setVisiblePosts(2); // Display 2 posts on mobile
        }
    }

    const handleClickSeeMore = () => {
        if (seeMoreButtonState) {
            setSeeMoreButtonState(false);
            if (window.innerWidth >= 1024) {
                setVisiblePosts(8); // Display 8 posts on desktop
            } else if (window.innerWidth >= 768) {
                setVisiblePosts(6); // Display 6 posts on tablet
            } else {
                setVisiblePosts(2); // Display all posts on mobile
            }
        } else {
            setSeeMoreButtonState(true);
            setVisiblePosts(data.length);
        }
    }

    const backgroundUrl = "src/images/event_background.png";
    const backgroundSvg = "src/images/pink_square.svg";

    return (
        <div className="bg-[#12041e]">
            <div className="flex flex-col justify-center pt-[10vh] md:pt-[15vh] pb-5">
                <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-center text-4xl tracking-wider text-gradient">
                        {title}
                    </h1>
                    <p className="p-1 text-center tracking-widest text-white text-lg">
                        {subtitle}
                    </p>
                </div>
                <div className="">
                    <div className="flex flex-row flex-wrap justify-center gap-10 p-10 xl:px-[16vw]">
                        {loading ? (
                            <div>Loading...</div>
                        ) : error ? (
                            <div>Error: {error.message}</div>
                        ) : (
                            data.slice(0, visiblePosts).map((item) => {
                                console.log(item);
                                return (
                                    <EventCard
                                        key={item.key}
                                        title={item.event}
                                        imageUrl={item.image}
                                        date={item.date}
                                        text={item.text}
                                        backgroundSvg={backgroundSvg}
                                        backgroundUrl={backgroundUrl}
                                    />
                                )
                            })
                        )}
                    </div>
                </div>
                <div className='mt-16 flex flex-row justify-center'>
                    <button onClick={() => handleClickSeeMore()} className='flex flex-row justify-center gap-3 w-[156px] rounded-lg text-white text-lg font-bold text-nowrap p-[16px] bg-[#520000] tracking-wider'>
                        <span className='my-auto'>{seeMoreButtonState ? "See Less" : "See More"}</span>
                        {!seeMoreButtonState ? <img className='my-auto' src="src/images/down_arrow.png" alt="" /> : null}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GallaryCardDeck;
