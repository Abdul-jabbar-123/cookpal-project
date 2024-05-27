
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from "react-responsive-carousel";

const ImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        '/images/food1.jpg',
        '/images/food2.jpg',
        '/images/food3.jpg',
        '/images/food4.jpg'
    ];

    const texts = [
        "Our restaurant offers a unique experience where taste, quality, and ambiance come together seamlessly.",
        "Our expert chefs create enticing and flavorful dishes using the finest ingredients from around the world, offering a culinary journey that tantalizes your taste buds. ",
        "Whether it's our signature local cuisine or international fare, each dish is crafted with love and skill, promising a delightful experience with every bite.",
        "We are confident that once you taste the flavors of our restaurant, you'll be compelled to return again and again."
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000); // Change image and text every 5 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [images.length]);

    const handleDotClick = (index) => {
        setCurrentImage(index);
    };

    return (
        <div className="slider-container">
            <Carousel selectedItem={currentImage} showThumbs={false} showIndicators={false} showStatus={false}>
                {images.map((image, index) => (
                    <div key={index} className="image-container">
                        <img src={image} alt={`slider image ${index + 1}`} className="image" />
                        <div className="text-overlay">{texts[index]}</div>
                    </div>
                ))}
            </Carousel>
            <div className="dot-container">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentImage === index ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
