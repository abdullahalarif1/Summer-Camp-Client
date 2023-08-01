import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../componenets/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../componenets/useAxiosSecure";

const ManageUsers = () => {
  const { loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  //   const { data: students = [], refetch } = useQuery(["students"], async () => {
  //     const res = await axios.get(`http://localhost:5000/students`);
  //     return res.data;
  //   });

  const { data: students = [], refetch } = useQuery({
    enabled: !loading,
    queryKey: ["students"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/students/`);
      return res.data;
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const updateUserRole = async (userId, role) => {
    const res = await axios.patch(
      `http://localhost:5000/students/adminInstructor/${userId}`,
      { role }
    );

    if (res.data.modifiedCount) {
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `User Successfully become an ${role}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="overflow-x-auto md:p-20 mx-5">
      <h2 className="text-4xl text-center pb-10 font-thin ">
        Manage <span className="text-red-500"> Classes</span>
      </h2>
      <table className="table">
        <thead>
          <tr className="text-white">
            <th></th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student._id}>
              <th>{index + 1}</th>
              <td>{student.email}</td>
              <td>
                {student.role === "admin"
                  ? "admin"
                  : student.role === "instructor"
                  ? "instructor"
                  : "student"}
              </td>
              <td>
                <button
                  className="btn-error btn text-white"
                  onClick={() => updateUserRole(student._id, "instructor")}
                  disabled={student.role === "instructor"}
                >
                  Make Instructor
                </button>
              </td>
              <td>
                <button
                  className="btn-error btn text-white"
                  onClick={() => updateUserRole(student._id, "admin")}
                  disabled={student.role === "admin"}
                >
                  Make Admin
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
