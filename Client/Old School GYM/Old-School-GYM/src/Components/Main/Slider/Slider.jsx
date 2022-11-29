import React, { useState, useEffect, useRef } from "react";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const featuredProducts = [
  "/images/Slider1.png",
  "/images/Slider2.png",
  "/images/Slider3.png",
];

let count = 0;
let slideInterval;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };

  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <section>
      <div ref={slideRef} className={"w-full select-none relative"}>
        <div className={"aspect-w-16 aspect-h-9"}>
          <img src={featuredProducts[currentIndex]} alt="" />
        </div>

        <div className={"absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center"}>
          <button
            className={"bg-Primary-color text-Secundary-color p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"}
            onClick={handleOnPrevClick}>
            <FiChevronLeft size={30} />
          </button>
          <button
            className={"bg-Primary-color text-Secundary-color p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"}
            onClick={handleOnNextClick}>
            <FiChevronRight size={30} />
          </button>
        </div>
      </div>
    </section>
  );
}