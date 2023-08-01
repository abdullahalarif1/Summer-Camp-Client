import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../Pages/Css/AllCss.module.css'

const Banner = () => {
  return (
    <>
      <Carousel className=''>
        <div className="">
          <img src="https://redart.wpengine.com/wp-content/uploads/2016/05/face-art.jpg" />
          <div className="legend md:mb-10">
            <p className="md:text-3xl text-sm font-sans font-bold pb-1 md:pt-10 uppercase">
              Welcome to our Photography School
            </p>
            <p className="md:text-xl text-xs">
              Discover exciting classes and activities
            </p>
            <img
              className="mx-auto py-2 md:py-4"
              src="https://redart.wpengine.com/wp-content/uploads/2016/03/title-line.png"
              alt=""
            />
            <p className="py-2 text-xs">Enroll now and explore your passions</p>
            <button className="btn-sm btn btn-outline btn-error  md:mb-10 ">
              Enroll Now
            </button>
          </div>
        </div>
        <div>
          <img src="https://redart.wpengine.com/wp-content/uploads/2016/05/photographer.jpg" />
          <div className="legend md:mb-10">
            <p className="md:text-3xl text-sm font-sans font-bold pb-1 md:pt-10">
              Welcome to our Photography School
            </p>
            <p className="md:text-xl text-xs  ">
              Discover exciting classes and activities
            </p>
            <img
              className="mx-auto py-2 md:py-4"
              src="https://redart.wpengine.com/wp-content/uploads/2016/03/title-line.png"
              alt=""
            />
            <p className="py-1 md:py-2 text-xs">
              Enroll now and explore your passions
            </p>
            <button className="btn-sm btn btn-outline btn-error  md:mb-10 ">
              Enroll Now
            </button>
          </div>
        </div>

        <div>
          <img src="https://redart.wpengine.com/wp-content/uploads/2016/05/woman.jpg" />
          <div className="legend md:mb-10">
            <p className="md:text-3xl text-sm font-sans font-bold pb-1 md:pt-10">
              Welcome to our Photography School
            </p>
            <p className="md:text-xl text-xs  ">
              Discover exciting classes and activities
            </p>
            <div className=" border-b pt-3 md:pt-8 border-red-500 w-1/2 mx-auto"></div>
            <p className="py-2 text-xs">Enroll now and explore your passions</p>
            <button className="btn-sm btn btn-outline btn-error  md:mb-10 ">
              Enroll Now
            </button>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
