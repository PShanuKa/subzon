import React, { useState } from 'react';
import { Carousel } from "@material-tailwind/react";
import SliderCard from "./SliderCard";

export default function Slider() {
  const [autoplay, setAutoplay] = useState(true);

  const handleHover = (isHovered) => {
    setAutoplay(!isHovered);
  };

  return (
    <Carousel 
      className="  mt-5  max-w-7xl mx-auto" 
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
  );
}
