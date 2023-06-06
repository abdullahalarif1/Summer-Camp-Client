import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen py-20 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img
          className="h-96 rounded-md"
          src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8NDA0JTIwcGFnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt=""
        />
        <div className="max-w-md text-center pb-10">
          <h2 className=" font-semibold text-2xl text-red-600">
            {status || "not available status"}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 text-white font-semibold rounded bg-blue-500 "
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
