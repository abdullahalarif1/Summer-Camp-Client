import React from "react";
import useClasses from "../../componenets/useClasses";

const ManageClasses = () => {
  const [classes] = useClasses();
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
              <div className="btn btn-outline text-white">Approve</div>
              <div className="btn btn-outline text-white">Deny</div>
            </div>
          </div>
        </div>

        /* <td>{myClass.className}</td>
                  <td>{myClass.instructorName}</td>
                  <td>{myClass.instructorEmail}</td>
                  <td>{myClass.availableSeats}</td>
                  <td>{myClass.price}</td> */
      ))}
    </div>
  );
};

export default ManageClasses;
