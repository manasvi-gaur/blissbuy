import React from 'react';
import { useGetCartQuery } from "../../redux/api/cart.api";
import { useSelector } from "react-redux";

export default function OrderSummaryCard() {
  const loggedIn = useSelector((state) => state.auth.isLogged);
  const { data, isSuccess } = useGetCartQuery({ skip: !loggedIn });

  return (
    <div>
      <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          {isSuccess && data?.cartItem?.map((cartItem) => (
            <li key={cartItem.product._id} className="flex py-2">
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={cartItem.product.imageUrl}
                  alt={cartItem.product.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="ml-2 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <a
                        href={cartItem.product.imageUrl}
                        style={{
                          fontFamily: "Times-BoldItalic",
                          color: "black",
                        }}
                      >
                        {cartItem.product.title}
                      </a>
                    </h3>
                    <p className="ml-10 justify-end">Rs. {cartItem.price}</p>
                  </div>
                 
                </div>
                
                <div className="flex flex-1 items-end justify-between text-sm">
                  <p
                    className="text-gray-500"
                    style={{ fontFamily: "Courier" }}
                  >
                    Qty {cartItem.size.reduce((acc, size) => acc + size.quantity, 0)}
                  </p>
                </div>
                <div className="border-b border-gray-900/10 pb-4"></div>
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
