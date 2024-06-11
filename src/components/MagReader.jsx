import React, { useState, useEffect, useCallback, forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set the workerSrc for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const MagReader = ({ filePath, handleClickClose }) => {
    const [numPages, setNumPages] = useState(null);
    const [bookWidth, setBookWidth] = useState(window.innerWidth * 0.8);
    const [bookHeight, setBookHeight] = useState(window.innerHeight * 0.9);
    const [isSinglePage, setIsSinglePage] = useState(window.innerWidth < 768);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    // Function to update the book width and page mode based on the window width
    const updateBookSettings = useCallback(() => {
        setBookWidth(window.innerWidth * 0.9);
        setBookHeight(window.innerHeight * 0.9)
        setIsSinglePage(window.innerWidth < 768);
        handleClickClose();
    }, []);

    // Add an event listener to update the width and page mode on window resize
    useEffect(() => {
        window.addEventListener("resize", updateBookSettings);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener("resize", updateBookSettings);
    }, [updateBookSettings]);

    const PageComponent = forwardRef(({ pageNumber }, ref) => (
        <div ref={ref} className="demoPage  p-2 overflow-clip flex justify-center">
            <Page pageNumber={pageNumber} width={isSinglePage ? bookWidth : bookWidth * 0.4} height={bookHeight} />
        </div>
    ));

    return (
        <div className="fixed bottom-0 left-0 w-[100vw] h-[100vh] bg-black bg-opacity-[0.8] z-[100] overflow-hidden flex flex-col justify-center lg:justify-end ">
            <div className="relative flex flex-row justify-center">
                <div className="flex flex-col justify-center lg:justify-end">
                    <Document file={filePath} onLoadSuccess={onDocumentLoadSuccess}>
                        {numPages && (
                            <HTMLFlipBook
                                width={isSinglePage ? bookWidth : (bookWidth * 0.4)}
                                height={isSinglePage ? bookWidth * 1.5 : ((bookHeight > (bookWidth * 0.5 * 1.5)) ? (bookWidth * 0.5 * 1.5) : bookHeight)} // Keeping a 3:4 aspect ratio
                                drawShadow={true}
                                flippingTime={1000}
                                showCover={true}
                                mobileScrollSupport={true}
                                startPage={0}
                                useMouseEvents={true}
                                usePortrait={isSinglePage}
                                clickEventForward={true}
                                pageFlipByClick={true}
                                renderOnlyPageLengthChange={false}
                                swipeDistance={20}
                                size="fixed"
                                maxWidth={1600}
                                maxHeight={900}
                                minWidth={300}
                                minHeight={400}
                                autoSize={true}
                                maxShadowOpacity={0.5}
                                onFlip={() => console.log("Flip")}
                                style={{ margin: "0 auto", userSelect: "none" }}
                                doublePage={!isSinglePage}
                            >
                                {Array.from(new Array(numPages), (el, index) => (
                                    <PageComponent key={`page_${index + 1}`} pageNumber={index + 1} />
                                ))}
                            </HTMLFlipBook>
                        )}
                    </Document>
                </div>
                <div className="absolute top-0 right-0 md:right-5">
                    <div className="flex flex-row justify-center p-2">
                        <button onClick={handleClickClose} className="p-2 bg-white rounded-full text-black"><img className="w-[28px] h-[28px]" src="src/images/icons8-close-48.png" alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MagReader;
