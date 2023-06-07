import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div className="hero min-h-screen text-white px-12 py-20 bg-black">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img
              className="w-[600px] rounded-2xl"
              src="https://img.freepik.com/free-vector/hacker-activity-theme_23-2148539946.jpg?w=900&t=st=1686079607~exp=1686080207~hmac=021e57f959bb6031081b29c3c0a2c8175a26f2c43319c8d4f059c24746777025"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full md:max-w-sm   bg-[#01172c]">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered bg-black"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered bg-black"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline btn-primary text-white">
                  Login
                </button>
              </div>
              <div className="mt-4 text-sm text-grey-600">
                New to Photogenic?{" "}
                <span>
                  <Link
                    className=" text-indigo-400 hover:underline"
                    to="/register"
                  >
                    Please Sign-up
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;