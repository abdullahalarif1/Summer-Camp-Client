import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <Carousel className="text-center  bg-black">
      <div>
        <img src="https://redart.wpengine.com/wp-content/uploads/2016/05/photographer.jpg" />
      </div>
      <div>
        <img src="https://redart.wpengine.com/wp-content/uploads/2016/05/face-art.jpg" />
      </div>
      <div>
        <img src="https://redart.wpengine.com/wp-content/uploads/2016/05/woman.jpg" />
      </div>
    </Carousel>
  );
};

export default Banner;
