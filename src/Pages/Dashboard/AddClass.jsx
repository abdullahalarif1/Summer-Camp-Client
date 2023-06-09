import React from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Routes/AuthProvider";
import useAuth from "../../componenets/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

function AddClass() {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // Create a new class object with the form data
    const newClass = {
      className: data.className,
      classImage: data.classImage,
      instructorName: user.displayName,
      instructorEmail: user.email,
      availableSeats: data.availableSeats,
      price: data.price,
      status: "pending",
      enrolledStudents: 0,
      feedback: "",
    };

    //TODO
    // reset();

    fetch(`${import.meta.env.VITE_BASE_URL}/instructors`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
        }
    })

    // const res = axios.post(`${import.meta.env.VITE_BASE_URL}/instructors`, {
    //   newClass,
    // });
    // console.log(res.data);
    // return res.data;
  };

  return (
    <div className="my-10 md:px-8 ">
      <h2 className="text-4xl text-center font-thin ">
        Add a <span className="text-red-500"> Class</span>
      </h2>
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Class Name:</span>
            </label>
            <input
              type="text"
              placeholder="Class name"
              className="input input-bordered w-full bg-[#06213d]"
              {...register("className")}
            />
          </div>
          <div className="form-control">
            {" "}
            <label className="label">
              <span className="label-text text-white">Class Image:</span>
            </label>
            <input
              type="photoURL"
              placeholder="Photo URL"
              className="input input-bordered w-full bg-[#06213d]"
              {...register("classImage")}
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {" "}
          <div className="form-control">
            {" "}
            <label className="label">
              <span className="label-text text-white">Instructor Name:</span>
            </label>
            <input
              type="name"
              className="input input-bordered bg-[#06213d]"
              value={user?.displayName}
              readOnly
            />
          </div>
          <div className="form-control">
            {" "}
            <label className="label">
              <span className="label-text text-white">Instructor Email:</span>
            </label>
            <input
              type="email"
              className="input input-bordered  bg-[#06213d]"
              value={user?.email}
              readOnly
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {" "}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Available Seats:</span>
            </label>
            <input
              type="number"
              className="input input-bordered bg-[#06213d]"
              placeholder="Available Seats "
              {...register("availableSeats")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Price:</span>
            </label>
            <input
              type="number"
              className="input input-bordered bg-[#06213d]"
              placeholder="price"
              {...register("price")}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-error mt-3 text-white border-2"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddClass;
