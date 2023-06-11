import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import useAdmin from "../../componenets/useAdminInstructor";
import useInstructor from "../../componenets/useInstructor";
import useAuth from "../../componenets/useAuth";
import Swal from "sweetalert2";

const Classes = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/instructors?text=approved`
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
      fetch(`${import.meta.env.VITE_BASE_URL}/carts`, {
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
  };

  return (
    <div className="grid md:grid-cols-3 gap-5 px-10 py-32 bg-gradient-to-r from-black to-[#06213d]">
      {classes.map((classItem) => (
        <div
          key={classItem._id}
          className={`card bg-[#06213d] text-white card-compact md:w-96 h-96  shadow-xl ${
            parseFloat(classItem.availableSeats) === 0 ? "bg-red-500" : ""
          }`}
        >
          <figure>
            <img src={classItem.classImage} alt="Shoes" />
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
                    parseFloat(classItem.availableSeats) === 0
                      ? "bg-white "
                      : ""
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
  );
};

export default Classes;
