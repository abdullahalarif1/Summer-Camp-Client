import React, { useEffect, useState } from "react";
import photo from '../../assets/pexels-photo-235986.jpeg'
import img from '../../assets/logo-removebg-preview-title.png'

const Feature = () => {
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    fetch("gallary.json")
      .then((res) => res.json())
      .then((data) => setFeature(data));
  }, []);

  return (
    <div>
      <img className="mx-auto w-10 animate-spin   " src={img} alt="" />
      {/* <div className="border-b mx-auto w-24 "></div> */}
      <h1 className="text-white uppercase text-center text-3xl md:text-5xl pb-2 font-thin">
        <div className="flex justify-center py-1 opacity-80">
          <div className="border-b w-16 border-2 md:w-24"></div>
          <div className="border-b border-red-500 w-28 md:w-48 border-2"></div>
        </div>
        <span className=" ">Our</span>{" "}
        <span className="text-red-500 ">Gallery</span>
      </h1>{" "}
      <p className="text-center pb-4 font-semibold italic text-xs sm:text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </p>
      <img
        className="mx-auto mb-14"
        src="https://redart.wpengine.com/wp-content/uploads/2016/03/title-line.png"
        alt=""
      />
      <div className="featured-item bg-fixed text-white ">
        <div className="grid md:grid-cols-3">
          {feature.map((item) => (
            <div
              key={item.id}
              className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 p-12 "
              style={{
                backgroundImage: `url(${photo})`,
                backgroundAttachment: "fixed",
                opacity: "80%",
              }}
            >
              <div className="">
                <img className="border-8" src={item.image} alt={item.title} />
              </div>
              {/* Additional content */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
