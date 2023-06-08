import React from "react";
import useInstructorCart from "../../componenets/useInstructorCart";

const Instructor = () => {
  const [instructors] = useInstructorCart();
  return (
    <div className="bg-black py-32">
      <h1 className="text-white text-center text-3xl font-thin">
        Our All <span className="text-red-500 ">Instructors</span>
      </h1>{" "}
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-white ">
        {instructors.map((instructor) => (
          <div className="card shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={instructor.image}
                alt="Shoes"
                className="rounded-xl  w-96 shadow-2xl border-2 border-red-400 h-72 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{instructor.name}</h2>
              <p>{instructor.email}</p>

              <div className="card-actions"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
