import React from "react";
import { Link } from "react-router-dom";

const ClassesCart = ({ myClass, updateUserStatus, setUniqueId }) => {
  return (
    <div className="card m-6  bg-[#06213d] shadow-xl">
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
          <label
            onClick={() => setUniqueId(myClass._id)}
            htmlFor="my_modal_6"
            className="btn btn-outline text-white"
          >
            Feedback
          </label>
        </div>
      </div>
    </div>
  );
};

export default ClassesCart;
