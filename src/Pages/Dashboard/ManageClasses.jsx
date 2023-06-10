import React, { useState } from "react";
import useClasses from "../../componenets/useClasses";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import ClassesCart from "./ClassesCart";

const ManageClasses = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);

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
        <>
          <ClassesCart
            key={myClass._id}
            myClass={myClass}
            updateUserStatus={updateUserStatus}
            setUniqueId={setUniqueId}
          ></ClassesCart>
          <Modal uniqueId={uniqueId} myClass={myClass}></Modal>
        </>
      ))}
    </div>
  );
};

export default ManageClasses;
