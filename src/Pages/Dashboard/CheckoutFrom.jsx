import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutFrom = () => {
  const stripe = useStripe();
  const elements = useElements();
   const [cardError, setCardError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    })

      if (error) {
        console.log("error", error);
        setCardError(error.message);
      } else {
        setCardError("");
        console.log('payment method', paymentMethod)
      }
  };
  return (
    <>
      <form className="md:w-2/3  mx-auto" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424778",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-outline mt-4 btn-sm btn-primary"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-error"><small>{cardError}</small></p>}
    </>
  );
};

export default CheckoutFrom;
