import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <Carousel className="text-center">
      <div>
        <img src="https://redart.wpengine.com/wp-content/uploads/2016/05/photographer.jpg" />
        <div className="legend mb-10">
          <p className="text-3xl font-bold pb-1 pt-10">
            Welcome to our Photography School
          </p>
          <p className="text-xl ">Discover exciting classes and activities</p>
          <div className="divider border-b border-red-500 w-1/2 mx-auto"></div>
          <p className="py-2">Enroll now and explore your passions</p>
          <button className="btn btn-outline btn-error mb-10 text-white">
            Enroll Now
          </button>
        </div>
      </div>
      <div>
        <img src="https://redart.wpengine.com/wp-content/uploads/2016/05/face-art.jpg" />
        <div className="legend mb-10">
          <p className="text-3xl font-bold pb-1 pt-10">
            Welcome to our Photography School
          </p>
          <p className="text-xl ">Discover exciting classes and activities</p>
          <div className="divider border-b border-red-500 w-1/2 mx-auto"></div>
          <p className="py-2">Enroll now and explore your passions</p>
          <button className="btn btn-outline btn-error mb-10 text-white">
            Enroll Now
          </button>
        </div>
      </div>
      <div>
        <img src="https://redart.wpengine.com/wp-content/uploads/2016/05/woman.jpg" />
        <div className="legend mb-10">
          <p className="text-3xl font-bold pb-1 pt-10">
            Welcome to our Photography School
          </p>
          <p className="text-xl ">Discover exciting classes and activities</p>
          <div className="divider border-b border-red-500 w-1/2 mx-auto"></div>
          <p className="py-2">Enroll now and explore your passions</p>
          <button className="btn btn-outline btn-error mb-10 text-white">
            Enroll Now
          </button>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
