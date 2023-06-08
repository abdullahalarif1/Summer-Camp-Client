import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const ManageUsers = () => {
  const {data: students = [], refetch} = useQuery(["students"], async () => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/students`);
    return res.data

  });

  return (
    <div className="overflow-x-auto p-20 ">
      <table className="table">
        {/* head */}
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
              <td>{student.role === 'admin'}</td>
              <td>Blue</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
