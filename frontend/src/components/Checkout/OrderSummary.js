import React from "react";
import OrderSummaryCard from "./OrderSummaryCard";
import { useSelector } from "react-redux";
import { useGetCartQuery } from "../../redux/api/cart.api";

export default function OrderSummary() {
  const loggedIn = useSelector((state) => state.auth.isLogged);
  const { data, isSuccess } = useGetCartQuery({ skip: !loggedIn });

  const customScrollbarStyles = {
    height: "auto", // Adjust the height as needed
    overflowY: "auto", // Enable vertical scrolling
    padding: "1rem", // Optional padding for better spacing

    /* Custom Scrollbar */
    scrollbarWidth: "thin", // For Firefox
    scrollbarColor: "#b3b3b3 transparent", // For Firefox
  };

  const webkitScrollbarStyles = `
    &::-webkit-scrollbar {
      width: 8px; /* Width of the scrollbar */
    }
    &::-webkit-scrollbar-track {
      background: transparent; /* Background of the scrollbar track */
    }
    &::-webkit-scrollbar-thumb {
      background-color: #b3b3b3; /* Scrollbar thumb color */
      border-radius: 4px; /* Rounded edges for the scrollbar thumb */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: #888888; /* Darker thumb color on hover */
    }
  `;
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
      <div 
      // className="space-y-12 " style={{ marginLeft: "2vmin" }}
      style={customScrollbarStyles} 
      // style={{
      //   height: "80vh", // Adjust the height as needed
      //   overflowY: "auto", // Enable vertical scrolling
      //   // padding: "1rem", // Optional padding for better spacing
      // }}
      >
         <style>{webkitScrollbarStyles}</style>
        <div className="border-b border-gray-900/10 pb-12">
          <OrderSummaryCard/>
          
        </div>
      </div>
      {/* <div className="flex justify-between text-base font-medium text-gray-900">
            <p style={{ fontFamily: "Times-Italic" }}>Subtotal</p>
            <p style={{ marginLeft: "6rem" }}>Rs. {data?.totalPrice ?? 0}</p>
          </div> */}
          {/* <div className="flex justify-between text-base font-medium text-gray-900">
            <p style={{ fontFamily: "Times-Italic" }}>Estimate Taxes</p>
            <p style={{ marginLeft: "6rem" }}>Rs. 38.00</p>
          </div> */}
          <div className="flex justify-between ">
            <p style={{ fontFamily: "Courier-Bold", fontSize: "4.5vmin"}}>Total</p>
            <p style={{ marginLeft: "6rem", fontSize: "4.5vmin"}}>Rs. {data?.totalPrice}</p>
          </div>
          <div className="mt-0.4 mb-3">
        </div>
    </div>
  );
}
