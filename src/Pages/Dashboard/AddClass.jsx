import React from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Routes/AuthProvider";
import useAuth from "../../componenets/useAuth";

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
    };

    reset();
  };

  return (
    <div className="my-10 md:px-8">
      <h2 className="text-4xl text-center font-thin ">
        Add a <span className="text-red-500"> Class</span>
      </h2>
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Name:</span>
            </label>
            <input
              type="text"
              placeholder="Class name"
              className="input input-bordered w-full"
              {...register("className")}
            />
          </div>
          <div className="form-control">
            {" "}
            <label className="label">
              <span className="label-text">Class Image:</span>
            </label>
            <input
              type="photoURL"
              placeholder="Photo URL"
              className="input input-bordered w-full"
              {...register("classImage")}
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {" "}
          <div className="form-control">
            {" "}
            <label className="label">
              <span className="label-text">Instructor Name:</span>
            </label>
            <input
              type="name"
              className="input input-bordered"
              value={user?.displayName}
              readOnly
            />
          </div>
          <div className="form-control">
            {" "}
            <label className="label">
              <span className="label-text">Instructor Email:</span>
            </label>
            <input
              type="email"
              className="input input-bordered"
              value={user?.email}
              readOnly
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {" "}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Seats:</span>
            </label>
            <input
              type="number"
              className="input input-bordered"
              placeholder="Available Seats"
              {...register("availableSeats")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price:</span>
            </label>
            <input
              type="number"
              className="input input-bordered"
              placeholder="price"
              {...register("price")}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-error mt-3 text-white border-2">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddClass;
