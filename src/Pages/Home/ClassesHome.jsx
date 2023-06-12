import React from "react";
import useClasses from "../../componenets/useClasses";

const ClassesHome = () => {
  const [classes] = useClasses();
  return (
    <>
      <h1 className="text-white text-center text-3xl py-10 font-thin">
        Popular <span className="text-red-500 ">Classes</span>
      </h1>{" "}
      <div className="grid md:grid-cols-3 gap-4   px-12">
        {classes.slice(0, 6).map((classItem) => (
          <div
            key={classItem._id}
            className="card  border-r-8 border-t-8  md:w-[350px] h-[300px] \ bg-gradient-to-r from-black to-[#06213d] m-5 border-red-400 text-white shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title font-thin">{classItem.className}</h2>
            </div>
            <figure>
              <img src={classItem.classImage} alt="Shoes" />
            </figure>
          </div>
        ))}
      </div>
    </>
  );
};

export default ClassesHome;
