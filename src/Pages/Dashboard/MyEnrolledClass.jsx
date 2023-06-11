
import usePayment from "../../componenets/usePayment";

const MyEnrolledClass = () => {
  const [payment] = usePayment();
  console.log(payment);
  return (
    <div className="px-12">
      <h1 className="text-white text-center py-10 text-3xl font-thin">
        Enrolled <span className="text-red-500 ">Classes </span>
      </h1>{" "}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-white">
              <th></th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payment.map((enrolled, index) => (
              <tr className="">
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={enrolled.image && enrolled.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{enrolled.itemsName}</td>
                <td>{enrolled.email}</td>
                <td>{enrolled.status}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClass;
