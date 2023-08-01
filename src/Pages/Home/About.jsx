import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../assets/logo-removebg-preview-title.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const About = () => {
    return (
      <div className="mt-20 ">
        <img className="mx-auto w-10 animate-spin " src={img} alt="" />
        {/* <div className="border-b mx-auto w-24 "></div> */}
        <h1 className="text-white uppercase text-center text-3xl md:text-5xl pb-2 font-thin">
          <div className="flex justify-center py-1 opacity-80 ">
            <div className="border-b w-24 border-2 md:w-36"></div>
            <div className="border-b border-red-500 w-10 md:w-16 border-2"></div>
          </div>
          <span className=" ">About</span>{" "}
          <span className="text-red-500 ">us</span>
        </h1>{" "}
        <p className="text-center text-xs sm:text-sm pb-4 font-semibold italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
        <img
          className="mx-auto mb-14"
          src="https://redart.wpengine.com/wp-content/uploads/2016/03/title-line.png"
          alt=""
        />
        <div className="hero min-h-screen bg-base-200 md:px-5">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl font-bold">
                {" "}
                A LITTLE INTRO
              </h1>
              <p className="pt-6 pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore
              </p>
              <small className="italic text-slate-500">
                1996 Year - Present
              </small>
              <div className="form-control mt-4">
                <label className="">
                  <input
                    type="text"
                    placeholder="Email"
                    className="py-3 sm:pe-20 ps-2 bg-[rgb(37,37,37)] border border-e-0"
                    title="Enter email in this field"
                  />
                  <span className="bg-red-800 py-3  border-red-800 border-2 sm:px-4 px-2">
                    SUBSCRIBE
                  </span>
                </label>
              </div>
            </div>
            <div className="card  max-w-md shadow-2xl ">
              <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                  <img
                    src=" https://images.pexels.com/photos/594226/pexels-photo-594226.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a
                      href="#slide4"
                      className="btn btn-circle border-2 btn-outline btn-error"
                    >
                      ❮
                    </a>
                    <a
                      href="#slide2"
                      className="btn btn-circle border-2 btn-outline btn-error"
                    >
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <img
                    src="https://images.pexels.com/photos/4947851/pexels-photo-4947851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a
                      href="#slide1"
                      className="btn btn-circle border-2 btn-outline btn-error"
                    >
                      ❮
                    </a>
                    <a
                      href="#slide3"
                      className="btn btn-circle border-2 btn-outline btn-error"
                    >
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                  <img
                    src="https://images.pexels.com/photos/2303337/pexels-photo-2303337.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a
                      href="#slide2"
                      className="btn btn-circle border-2 btn-outline btn-error"
                    >
                      ❮
                    </a>
                    <a
                      href="#slide4"
                      className="btn btn-circle border-2 btn-outline btn-error"
                    >
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                  <img
                    src="https://images.pexels.com/photos/2217660/pexels-photo-2217660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a
                      href="#slide3"
                      className="btn btn-circle border-2 btn-outline btn-error"
                    >
                      ❮
                    </a>
                    <a
                      href="#slide1"
                      className="btn btn-circle border-2 btn-outline btn-error"
                    >
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;