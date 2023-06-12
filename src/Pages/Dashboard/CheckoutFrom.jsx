import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../componenets/useAxiosSecure";
import useAuth from "../../componenets/useAuth";


const CheckoutFrom = ({ price, cart }) => {
  console.log(cart);
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    if (price) {
      axiosSecure
        .post("/create-payment-intent", { price: price })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, []);

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
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      //   console.log("payment method", paymentMethod);
    }

    setProcessing(true);

    //confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "unknown",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
    } else {
      console.log("paymentIntent", paymentIntent);
    }
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
     
      setTransactionId(paymentIntent.id);
      const transactionId = paymentIntent.id;
      // save payment
      const payment = {
        email: user?.email,
        transactionId: transactionId,
        price,
        date: new Date(),
        itemsName: cart.name,
        cartItems: cart._id,
        courseId: cart.courseId,
        image: cart.image,
        status: "succeeded",
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
        }
      });
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
          disabled={!stripe || !clientSecret || processing}
        >
          Pay ${price}
        </button>
      </form>
      <div className="mt-4 ">
        {cardError && (
          <p className="text-error">
            <small>{cardError}</small>
          </p>
        )}
        {transactionId && (
          <p className="text-success">
            {" "}
            Transaction complete : {transactionId}
          </p>
        )}
      </div>
    </>
  );
};

export default CheckoutFrom;
