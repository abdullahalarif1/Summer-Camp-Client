import React from "react";
import CheckoutFrom from "./CheckoutFrom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData, useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const { cart } = useLoaderData();
  console.log(cart.price);
  //TODO publish key

  return (
    <div className="px-10">
      <h2 className="text-4xl text-center py-10 font-thin ">
        Please <span className="text-red-500"> Pay </span>
      </h2>
      <Elements stripe={stripePromise}>
        <CheckoutFrom cart={cart} price={parseFloat(cart.price)}></CheckoutFrom>
      </Elements>
    </div>
  );
};

export default Payment;
