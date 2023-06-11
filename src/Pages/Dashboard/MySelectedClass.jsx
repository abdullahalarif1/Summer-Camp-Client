import React from "react";
import { AiTwotoneDelete, AiFillPayCircle } from "react-icons/ai";
import Swal from "sweetalert2";
import useCart from "../../componenets/useCart";
import { Link } from "react-router-dom";

const MySelectedClass = () => {
  const [cart, refetch] = useCart();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_BASE_URL}/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
               window.location.reload();
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((error) => {
            console.error("Error deleting cart item:", error);
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto px-10 mt-20">
        <h1> Booked Class: {cart.length}</h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-white">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Delete & Pay</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="border p-2 rounded-full btn-error btn-outline"
                  >
                    <AiTwotoneDelete />
                  </button>
                  <Link to={`/dashboard/payment/${item._id}`}>
                    <button className="border ms-2 p-2 rounded-full btn-warning btn-outline">
                      <AiFillPayCircle />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClass;
