import React from "react";
import useInstructorCart from "../../componenets/useInstructorCart";

const Instructors = () => {
  const [instructors] = useInstructorCart();
  console.log(instructors);
  return (
    <div className="font-thin">
      <h1 className="text-white text-center text-3xl py-10 font-thin">
        Popular <span className="text-red-500 ">Instructors</span>
      </h1>{" "}
      <div className="grid md:grid-cols-3 gap-4 p-2 md:px-12">
        {instructors.slice(0, 6).map((instructor) => (
          <div key={instructor._id} className="card shadow-xl image-full">
            <figure>
              <img className="" src={instructor.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{instructor.name}</h2>
              <p>{instructor.email}</p>

              <div className="card-actions justify-end">
                <p className="">
                  <small>
                    Avilable Students: {instructor.numStudent}
                  </small>{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
