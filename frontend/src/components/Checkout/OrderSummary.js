import React from "react";
import OrderSummaryCard from "./OrderSummaryCard";



export default function OrderSummary() {
  return (
    <div>
      <h2
            className="text-base font-semibold leading-7 text-gray-900 "
            style={{
              textAlign: "center",
              color: "black",
              fontFamily: "Helvetica",
              fontSize: "4.5vmin",
              marginTop: "1.5rem",
            }}
          >
            ORDER SUMMARY
          </h2>
      <div className="space-y-12 " style={{ marginLeft: "2vmin" }}>
        <div className="border-b border-gray-900/10 pb-12">
          <OrderSummaryCard/>
          
        </div>
      </div>
    </div>
  );
}
