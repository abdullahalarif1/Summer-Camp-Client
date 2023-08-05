import React from "react";
import useInstructorCart from "../../componenets/useInstructorCart";
import useClasses from "../../componenets/useClasses";
import img from "../../assets/logo-removebg-preview-title.png";
import useTitle from "../../Shared/useTitle";

const Instructor = () => {
  const [instructors] = useInstructorCart();
  const [classes] = useClasses();
  useTitle("Instructor");
  return (
    <div className="py-32">
      <img className="mx-auto w-10 animate-spin   " src={img} alt="" />
      {/* <div className="border-b mx-auto w-24 "></div> */}
      <h1 className="text-white uppercase text-center text-3xl md:text-5xl pb-2 font-thin">
        <div className="flex justify-center py-1 opacity-80">
          <div className="border-b w-36 border-2 md:w-52"></div>
          <div className="border-b border-red-500 w-40 md:w-64 border-2"></div>
        </div>
        <span className=" ">Popular</span>{" "}
        <span className="text-red-500 ">Instrctors</span>
      </h1>{" "}
      <p className="text-center pb-4 font-semibold italic text-xs sm:text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </p>
      <img
        className="mx-auto mb-14"
        src="https://redart.wpengine.com/wp-content/uploads/2016/03/title-line.png"
        alt=""
      />
      <div className=" grid px-6 md:grid-cols-3 gap-4 text-white ">
        {instructors.map((instructor) => (
          <>
            <div className=" w-full border-2 border-opacity-80 border-red-500 border-b-0 border-r-0  bg-gradient-to-r from-black to-[#051e37] shadow-xl">
              <figure className="px-10 pt-10 ">
                <img
                  src={instructor.image}
                  alt="Shoes"
                  className="mx-auto w-56 h-56 p-1 border-8 border-white-500  "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{instructor.name}</h2>
                <p className="italic">{instructor.email}</p>
                <div className="card-actions italic">
                  <small>Avilable Students: {instructor.numStudent}</small>{" "}
                </div>
              </div>
            </div>
          </>
          // <div key={instructor._id} className="card shadow-xl">
          //   <figure className="px-10 pt-10">
          //     <img
          //       src={instructor.image}
          //       alt="Shoes"
          //       className="rounded-xl  w-96 shadow-2xl border-2 border-red-400 h-72 object-cover"
          //     />
          //   </figure>
          //   <div className="card-body items-center text-center">
          //     <h2 className="card-title">{instructor.name}</h2>
          //     <p>{instructor.email}</p>

          //     <div className="card-actions"></div>
          //   </div>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
