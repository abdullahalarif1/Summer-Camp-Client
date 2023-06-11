import React, { useEffect, useState } from "react";
import photo from '../../assets/pexels-photo-235986.jpeg'

const Feature = () => {
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    fetch("gallary.json")
      .then((res) => res.json())
      .then((data) => setFeature(data));
  }, []);

  return (
    <div>
      <h1 className="text-white text-center text-3xl py-20  font-thin">
        Our <span className="text-red-500 ">Gallery</span>
      </h1>{" "}
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
                <img
                  className="border-8"
                  src={item.image}
                  alt={item.title}
                />
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
