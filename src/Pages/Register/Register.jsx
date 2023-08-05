import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../componenets/useAuth";
import Swal from "sweetalert2";
import Google from "../../Layouts/Google";
import useTitle from "../../Shared/useTitle";

const Register = () => {
   useTitle("Sign Up");
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      // update profile
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const savedStudent = { name: data.name, email: data.email };
          fetch(`https://summer-camp-server-gamma-bay.vercel.app/students`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(savedStudent),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                reset();
                Swal.fire({
                  title: "User Updated successful",
                  showClass: {
                    popup: "animate__animated animate__fadeInDown",
                  },
                  hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                  },
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error.message));
    });
  };

  const passwordMatch = (value) => {
    const { password, confirmPassword } = getValues();
    return password === confirmPassword || "Passwords do not match";
  };
  return (
    <div className="hero min-h-screen text-white md:p-12 py-20 bg-black">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img
            className="w-[600px] rounded-2xl"
            src="https://img.freepik.com/free-vector/hacker-activity-theme_23-2148539946.jpg?w=900&t=st=1686079607~exp=1686080207~hmac=021e57f959bb6031081b29c3c0a2c8175a26f2c43319c8d4f059c24746777025"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full md:max-w-sm   bg-[#01172c]">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                {...register("name", { required: true })}
                className="input input-bordered bg-black"
              />
              {errors.name && (
                <small className="text-error">Name field is required</small>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">PhotoURL</span>
              </label>
              <input
                type="photoURL"
                placeholder="photoURL"
                name="photoURL"
                {...register("photoURL")}
                className="input input-bordered bg-black"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered bg-black"
              />
              {errors.email && (
                <small className="text-error">Email field is required</small>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s]).*$/,
                })}
                name="password"
                placeholder="password"
                className="input input-bordered bg-black"
              />
              {errors.password?.type === "required" && (
                <small className="text-error pt-1">
                  Password field is required
                </small>
              )}
              {errors.password?.type === "minLength" && (
                <small className="text-error pt-1">
                  Password must be 6 character
                </small>
              )}
              {errors.password?.type === "maxLength" && (
                <small className="text-error pt-1">
                  Password must be less than 20 characters
                </small>
              )}
              {errors.password?.type === "pattern" && (
                <small className="text-error pt-1">
                  password must have one uppercase, one lowercase, one number
                  and one special characters.
                </small>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Confirm Password</span>
              </label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: true,
                  validate: passwordMatch,
                })}
                name="confirmPassword"
                placeholder="Confirm Password"
                className="input input-bordered bg-black"
              />
              {errors.confirmPassword?.type === "required" && (
                <small className="text-error pt-1">
                  Confirm Password field is required
                </small>
              )}
              {errors.confirmPassword?.message && (
                <small className="text-error pt-1">
                  {errors.confirmPassword.message}
                </small>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline btn-error text-white">
                register
              </button>
            </div>
            <div className="mt-4 text-sm text-grey-600">
              Already have an account?{" "}
              <span>
                <Link className=" text-error hover:underline" to="/login">
                  Please login
                </Link>
              </span>
            </div>
          </form>
          <Google></Google>
        </div>
      </div>
    </div>
  );
};

export default Register;
