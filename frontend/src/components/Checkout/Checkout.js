import React from "react";
import DeliveryAddForm from "./DeliveryAddForm";
import OrderSummary from "./OrderSummary";

export default function () {
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
            <DeliveryAddForm />
          </div>
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
        <div className="mt-0.4 mb-3">
          <button
            style={{ backgroundColor: "#BD446B", width: "90vmin" }}
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-3 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Pay now
          </button>
        </div>
      </section>
    </div>
  );
}
