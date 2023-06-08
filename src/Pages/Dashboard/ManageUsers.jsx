import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../componenets/useAuth";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { loading } = useAuth();
  //   const { data: students = [], refetch } = useQuery(["students"], async () => {
  //     const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/students`);
  //     return res.data;
  //   });

  const { data: students = [], refetch } = useQuery({
    enabled: !loading,
    queryKey: ["students"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/students`);
      return res.data;
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const updateUserRole = async (userId, role) => {
    setIsLoading(true);
    const res = await axios.patch(
      `${import.meta.env.VITE_BASE_URL}/students/adminInstructor/${userId}`,
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
       window.location.reload();
    }
  };

  return (
    <div className="overflow-x-auto p-20">
      <table className="table">
        <thead>
          <tr>
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
                  disabled={student.role === "instructor" || isLoading}
                >
                  Make Instructor
                </button>
              </td>
              <td>
                <button
                  className="btn-error btn text-white"
                  onClick={() => updateUserRole(student._id, "admin")}
                  disabled={student.role === "admin" || isLoading}
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
