import React, { useState } from 'react';
import { Carousel } from "@material-tailwind/react";
import SliderCard from "./SliderCard";

export default function Slider() {
  const [autoplay, setAutoplay] = useState(true);

  const handleHover = (isHovered) => {
    setAutoplay(!isHovered);
  };

  return (
    <div className='max-w-7xl mx-auto px-3'>
    <Carousel 
      className="  mt-5  " 
      transition={{ type: "fade" }} 
      autoplay={autoplay} 
      loop={true} 
      autoplayDelay={5000}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <SliderCard/>
      <SliderCard/>
      <SliderCard/>
      <SliderCard/>
    </Carousel>
      </div>
  );
}
