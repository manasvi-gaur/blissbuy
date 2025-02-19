import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useOrderHistoryQuery } from "../../redux/api/order.api";

export default function OrderList({ open, setOpenOrderList }) {
  const { data, isSuccess } = useOrderHistoryQuery();
  useEffect(() => {
    console.log("here");
    if (isSuccess) {
      console.log(data);
    }
  }, [isSuccess]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenOrderList}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title
                          style={{
                            textAlign: "center",
                            fontSize: "5vmin",
                            fontFamily: "Helvetica-Oblique",
                            color: "#000",
                          }}
                          className="text-lg font-lg text-gray-900 mb-10 mt-10"
                        >
                          ORDER STATUS
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpenOrderList(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {isSuccess ? (
                              data?.map((Order) => (
                                <>
                                  {Order.orderItems?.map((orderItem) => (
                                    <li
                                      key={orderItem.product._id}
                                      className="flex py-6"
                                    >
                                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                          src={orderItem.product.imageUrl}
                                          className="h-full w-full object-cover object-center"
                                        />
                                      </div>

                                      <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                          <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                              <a
                                                href={
                                                  orderItem.product.imageUrl
                                                }
                                                style={{
                                                  fontFamily:
                                                    "Times-BoldItalic",
                                                  color: "black",
                                                }}
                                              >
                                                {orderItem.product.title}
                                              </a>
                                            </h3>
                                          </div>
                                          {/* <p className="mt-1 text-sm text-gray-500" style={{fontFamily:"Courier",color:"gray"}}>{product.color}</p> */}
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                          <p
                                            className="text-gray-500"
                                            style={{ fontFamily: "Courier" }}
                                          >
                                            Qty {orderItem.quantity}
                                          </p>
                                        </div>
                                      </div>
                                    </li>
                                  ))}
                                  {/* <p style={{color:"#BD446B"}} className="ml-4">{orderItem.orderStatus}</p> */}
                                </>
                              ))
                            ) : (
                              <div>No Order Yet</div>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
