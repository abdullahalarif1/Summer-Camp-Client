import React from 'react';
import usePayment from '../../componenets/usePayment';

const PaymentHistory = () => {
     const [payment] = usePayment();
     console.log(payment);
    return (
      <div className="px-12">
        <h1 className="text-white text-center py-10 text-3xl font-thin">
          Payment <span className="text-red-500 ">History </span>
        </h1>{" "}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-white">
                <th></th>
                
                <th>Class Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Transaction Id</th>
              </tr>
            </thead>
            <tbody>
              {payment.map((enrolled, index) => (
                <tr className="">
                  <th>{index + 1}</th>
                  <td>{enrolled.itemsName}</td>
                  <td>{enrolled.email}</td>
                  <td>{enrolled.status}</td>
                  <td>{enrolled.transactionId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default PaymentHistory;