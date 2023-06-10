import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import useAdmin from "../../componenets/useAdminInstructor";
import useInstructor from "../../componenets/useInstructor";

const Classes = () => {
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
    // Handle the select button click
    // You can perform actions like checking user login status,
    // available seats, and admin/instructor status here
    // For now, we'll display a message if the user is not logged in
    if (!isLoggedIn) {
      alert("Please log in before selecting the course.");
      return;
    }

    console.log("Selected class:", classItem);
  };

  return (
    <div className="grid md:grid-cols-3 gap-5 px-10 py-32">
      {classes.map((classItem) => (
        <div
          key={classItem._id}
          className={`card card-compact w-96 h-96 bg-base-100 shadow-xl ${
            classItem.availableSeats === 0 ? "bg-red-500" : ""
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
              {classItem.availableSeats === 0 || isAdmin || isInstructor ? (
                <button className="btn" disabled>
                  Select
                </button>
              ) : (
                <button
                  className="btn btn-error btn-outline"
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
