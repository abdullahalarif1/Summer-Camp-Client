import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import useAdmin from "../../componenets/useAdminInstructor";
import useInstructor from "../../componenets/useInstructor";
import useAuth from "../../componenets/useAuth";
import Swal from "sweetalert2";
import img from "../../assets/logo-removebg-preview-title.png";

const Classes = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios.get(
        `https://summer-camp-server-gamma-bay.vercel.app/instructors?text=approved`
      );
      return res.data;
    },
  });

  const handleSelect = (classItem) => {
    if (user) {
      const courseItem = {
        courseId: classItem._id,
        name: classItem.className,
        image: classItem.classImage,
        price: classItem.price,
        email: user.email,
      };

      fetch(`https://summer-camp-server-gamma-bay.vercel.app/carts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(courseItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your are selected the course",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Please log in before selecting the course.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    // Handle the select button click
    // You can perform actions like checking user login status,
    // available seats, and admin/instructor status here
    // For now, we'll display a message if the user is not logged in

    console.log("Selected class:", classItem);

    // if (!user) {
    //   Swal.fire({
    //     position: "top-end",
    //     icon: "warning",
    //     title: "Please login",
    //     showConfirmButton: false,
    //     timer: 1500,
    //   });
    // }
  };

  return (
    <div className=" pt-24 bg-gradient-to-r from-black to-[#06213d]">
      <img className="mx-auto w-10 animate-spin " src={img} alt="" />
      {/* <div className="border-b mx-auto w-24 "></div> */}
      <h1 className="text-white uppercase text-center text-3xl md:text-5xl pb-2 font-thin">
        <div className="flex justify-center py-1 opacity-80">
          <div className="border-b w-32 border-2 md:w-48"></div>
          <div className="border-b border-red-500 w-28 md:w-48 border-2"></div>
        </div>
        <span className=" ">Approved</span>{" "}
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
      <div className="grid md:grid-cols-3 gap-5 px-10  ">
        {classes.map((classItem) => (
          <div
            key={classItem._id}
            className={`border-2 border-r-0 m-2 border-b-0 shadow-2xl  bg-[#06213d] text-white card-compact md:w-96   ${
              parseFloat(classItem.availableSeats) === 0 ? "bg-red-500" : ""
            }`}
          >
            <figure>
              <img
                className="w-full p-2 md:h-52 h-72 border-b-2 "
                src={classItem.classImage}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{classItem.className}</h2>
              <p>Instructor: {classItem.instructorName}</p>
              <p>Available Seats: {classItem.availableSeats}</p>
              <p>Price: ${classItem.price}</p>
              <div className="card-actions justify-end">
                {parseFloat(classItem.availableSeats === 0) ||
                isAdmin ||
                isInstructor ? (
                  <button className="btn" disabled>
                    Select
                  </button>
                ) : (
                  <button
                    className={` btn btn-error btn-outline ${
                      parseFloat(classItem.availableSeats) === 0 ? "hidden" : ""
                    }`}
                    onClick={() => handleSelect(classItem)}
                  >
                    Select
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
