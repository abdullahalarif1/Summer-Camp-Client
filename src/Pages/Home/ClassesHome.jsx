import React from "react";
import useClasses from "../../componenets/useClasses";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import img from "../../assets/logo-removebg-preview-title.png";

// import required modules
import { Pagination } from "swiper/modules";

const ClassesHome = () => {
  const [classes] = useClasses();

  // Map the classes array outside the Swiper component
  const classSlides = classes.slice(0, 6).map((classItem) => (
    <SwiperSlide className="mb-12 border-2 border-red-500 border-b-0">
      <img className="md:h-80 sm:h-60 h-36 p-1" src={classItem.classImage} alt="" />
      <h3 className="text-xs  md:text-xl font-serif uppercase text-center -mt-9 md:-mt-12 text-white font-bold">
        {classItem.className}
      </h3>
    </SwiperSlide>
  ));

  return (
    <div className="mt-20">
      <img className="mx-auto w-10 animate-spin   " src={img} alt="" />
      {/* <div className="border-b mx-auto w-24 "></div> */}
      <h1 className="text-white uppercase text-center text-3xl md:text-5xl pb-2 font-thin">
        <div className="flex justify-center py-1 opacity-80">
          <div className="border-b w-32 border-2 md:w-48"></div>
          <div className="border-b border-red-500 w-28 md:w-48 border-2"></div>
        </div>
        <span className=" ">Popular</span>{" "}
        <span className="text-red-500 ">Classes</span>
      </h1>{" "}
      <p className="text-center pb-4 font-semibold italic text-xs sm:text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </p>
      <img
        className="mx-auto mb-14"
        src="https://redart.wpengine.com/wp-content/uploads/2016/03/title-line.png"
        alt=""
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* Render the mapped class slides */}
        {classSlides}
      </Swiper>
    </div>
  );
};

export default ClassesHome;
