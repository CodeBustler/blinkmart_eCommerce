import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ImageSlider = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const navigateTo = useNavigate();

    // -------------------------------------------------------
    // ***************** SETUP WINDOWS SIZE *****************
    // -------------------------------------------------------
    const handleResize = () => {
        setWindowSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // -------------------------------------------------------
    // ************** HANDLE BANNER ON-CLICKs **************
    // -------------------------------------------------------
    const handleNavigate = (currentImage) => {
        if (windowSize >= 768) {
            // FOR DESKTOP BANNERS
            if (currentImage === 0) {
                navigateTo("/ProductsSubCategory/mobiles");
            } else if (currentImage === 1) {
                navigateTo("/ProductsCategory/womens_fashion");
            } else if (currentImage === 2) {
                navigateTo("/ProductsCategory/electronics_and_devices");
            } else if (currentImage === 3) {
                navigateTo("/ProductsSubCategory/mens_footwear");
            }
        } else {
            // FOR MOBILE BANNERS
            if (currentImage === 0) {
                navigateTo("/ProductDetail/trRr8AmsnyrUZAPOb61d");
            } else if (currentImage === 1) {
                navigateTo("/ProductDetail/kEhohnsvZydxlxhp8lPe");
            } else if (currentImage === 2) {
                window.location.replace("https://www.oneplus.in/12r");
            }
        }
    };
    // -------------------------------------------------------
    // ***************** BANNERS AUTO CHANGE *****************
    // -------------------------------------------------------
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    // -------------------------------------------------------
    // ***************** BANNERS NAVIGATE *****************
    // -------------------------------------------------------
    const goToPrevious = () => {
        setCurrentImage(
            (prevImage) => (prevImage - 1 + images.length) % images.length,
        );
    };

    const goToNext = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    return (
        <>
            <div className="relative flex justify-between w-full h-64 md:h-96 overflow-hidden">
                <button
                    onClick={goToPrevious}
                    className="text-white text-3xl  hover:bg-black hover:bg-opacity-10 p-3 focus:outline-none h-full z-10"
                >
                    &#8249;
                </button>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 cursor-pointer  ${
                            index === currentImage ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                        }}
                        onClick={() => {
                            handleNavigate(currentImage);
                        }}
                    ></div>
                ))}
                <button
                    onClick={goToNext}
                    className="text-white text-3xl hover:bg-transparent  hover:bg-black hover:bg-opacity-10 p-3 focus:outline-none h-full z-10"
                >
                    &#8250;
                </button>
            </div>
        </>
    );
};

export default ImageSlider;
