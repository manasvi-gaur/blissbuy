import React, { useEffect, useRef, useState } from "react";
import DeliveryAddForm from "./DeliveryAddForm";
import OrderSummary from "./OrderSummary";
import { useCreateOrderMutation } from "../../redux/api/order.api";
import {
  useCreatePaymentLinkMutation,
  useUpdatePaymentInformationMutation,
} from "../../redux/api/payment.api";
import { useLocation } from "react-router-dom";
import { useRemoveAllCartItemsMutation } from "../../redux/api/cart.api";
export default function () {
  const formRef = useRef(null);
  const [createOrder] = useCreateOrderMutation();
  const [createPaymentLink,{isLoading}] = useCreatePaymentLinkMutation();
  const [clearCart] = useRemoveAllCartItemsMutation();
  const location = useLocation();
  const handlePayment = async (event) => {
    const data = new FormData(formRef.current);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      mobileNo: data.get("mobileNo"),
      streetAddress: data.get("streetAddress"),
      city: data.get("city"),
      state: data.get("state"),
      zipcode: data.get("postal-code"),
    };
    const isValid = Object.values(userData).every(
      (value) => value && value.trim() !== ""
    );

    if (!isValid) {
      console.error("Please fill all the fields.");
      return;
    }

    const response = await createOrder(userData).unwrap();
    const payResonse = await createPaymentLink(response._id).unwrap();
    window.location.href = `${payResonse.paymentLinkUrl}`;
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const paymentLinkStatus = queryParams.get("razorpay_payment_link_status");
    if (paymentLinkStatus === "paid") {
      clearCart();
    }
  }, [location, clearCart]); 
  return (
    <div style={{ backgroundColor: "white", padding: "1rem" }}>
      <h1
        style={{
          backgroundColor: "bisque",
          textAlign: "center",
          fontFamily: "Helvetica-BoldOblique",
          fontSize: "9vmin",
          color: "#414143",
          paddingTop: "3vmin",
          paddingBottom: "1vmin",
        }}
      >
        || BLISS ||
      </h1>
      <section
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        style={{
          padding: "1rem",
          marginTop: "2rem",
        }}
      >
        {/* {isLoading && <ClipLoader/>} */}
        {/* Delivery Address Form */}
        <div className="flex flex-col items-center w-full">
          <div
            style={{
              width: "100%",
              maxWidth: "600px",
              padding: "1rem",
              backgroundColor: "#f9f9f9",
              borderRadius: "1rem",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <DeliveryAddForm formRef={formRef} />
          </div>
          <button
            onClick={handlePayment}
            style={{
              backgroundColor: "#BD446B",
              width: "70vmin",
              marginTop: "3vmin",
            }}
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-3 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Pay now
          </button>
        </div>

        {/* Order Summary */}
        <div
          style={{
            backgroundColor: "bisque",
            borderRadius: "3rem",
            padding: "2rem",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            height: "fit-content", // Ensures the height adjusts to content
          }}
          className="flex flex-col items-center w-full lg:max-w-2xl mx-auto"
        >
          <OrderSummary />
        </div>
      </section>
    </div>
  );
}
