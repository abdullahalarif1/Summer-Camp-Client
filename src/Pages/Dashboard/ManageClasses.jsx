import React, { useState } from "react";
import useClasses from "../../componenets/useClasses";
import axios from "axios";

const ManageClasses = () => {
  const [isLoading, setIsLoading] = useState(false);


  const updateUserStatus = async (userId, status) => {
    setIsLoading(true);
    const res = await axios.patch(
      `${import.meta.env.VITE_BASE_URL}/instructors/approveDeny/${userId}`,
      { status }
    );

    if (res.data.modifiedCount) {
      refetch();
    }
  };

  const [classes, refetch] = useClasses();
  console.log(classes);
  return (
    <div>
      <h2 className="text-4xl text-center font-thin ">
        Manage <span className="text-red-500"> Classes</span>
      </h2>
      {classes.map((myClass) => (
        <div key={myClass._id} className="card m-6  bg-[#06213d] shadow-xl">
          <figure>
            <img
              className="w-[300px] p-4 rounded-2xl my-4 border"
              src={myClass.classImage}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {myClass.className}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{myClass.instructorName}</p>
            <p>{myClass.instructorEmail}</p>
            <p>Available Seats: {myClass.availableSeats}</p>
            <p>Price: ${myClass.price}</p>
            <p>Status: {myClass.status}</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => updateUserStatus(myClass._id, "approved")}
                disabled={
                  myClass.status === "approved" || myClass.status === "denied"
                }
                className="btn btn-outline text-white"
              >
                Approve
              </button>
              <button
                onClick={() => updateUserStatus(myClass._id, "denied")}
                disabled={
                  myClass.status === "approved" || myClass.status === "denied"
                }
                className="btn btn-outline text-white"
              >
                Deny
              </button>
              <button className="btn btn-outline  text-white">Send Feedback</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageClasses;
