import React, { useState } from "react";
import useClasses from "../../componenets/useClasses";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../componenets/useAxiosSecure";

const ManageClasses = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [axiosSecure] = useAxiosSecure();

  const updateUserStatus = async (userId, status) => {
    setIsLoading(true);
    const res = await axiosSecure.patch(
      `https://summer-camp-server-gamma-bay.vercel.app/instructors/approveDeny/${userId}`,
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
      <h2 className="text-4xl text-center font-thin py-20">
        Manage <span className="text-red-500"> Classes</span>
      </h2>

      {classes.map((myClass) => (
        <div
          key={myClass._id}
          className="card lg:card-side  m-3 md:m-6  bg-[#06213d] shadow-xl"
        >
          <figure>
            <img
              className="w-full h-80 md:w-96 md:h-72 p-2 mx-4 rounded-2xl my-4 border"
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
            <div className="card-actions md:justify-end pt-4 md:pt-p0">
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
              <Link to={`/dashboard/feedback/${myClass._id}`}>
                <label
                  htmlFor="my_modal_6"
                  className="btn btn-outline text-white"
                >
                  Feedback
                </label>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageClasses;
