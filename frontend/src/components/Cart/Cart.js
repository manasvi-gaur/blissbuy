import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import RemoveTwoToneIcon from "@mui/icons-material/RemoveTwoTone";
import {
  useGetCartQuery,
  useRemoveCartItemMutation,
  useUpdateCartItemMutation,
} from "../../redux/api/cart.api";
import { useSelector } from "react-redux";
import { LinearProgress } from "@mui/material";

export default function Cart({ open, setOpen }) {
  const loggedIn = useSelector((state) => state.auth.isLogged);
  const [checkLoading, setcheckLoading] = useState();
  const {
    data,
    isSuccess,
    refetch,
    isFetching: isFetchingGetCart,
  } = useGetCartQuery({ skip: !loggedIn });
  const [deleteCartItem, { isLoading: isLoadingDelete }] =
    useRemoveCartItemMutation();
  const [updateCartItem, { isLoading: isLoadingUpdate }] =
    useUpdateCartItemMutation();
  const handleRemoveCartItem = (id) => {
    deleteCartItem(id);
  };
  useEffect(() => {
    if (isSuccess) {
      console.log(data.cartItems);
    }
    if (isFetchingGetCart || isLoadingDelete || isLoadingUpdate) {
      setcheckLoading(true);
    }
    if (
      isFetchingGetCart == false &&
      isLoadingDelete == false &&
      isLoadingUpdate == false
    ) {
      setcheckLoading(false);
    }
    console.log(data);
  }, [data, isSuccess, isFetchingGetCart, isLoadingDelete, isLoadingUpdate]);

  useEffect(() => {
    if (loggedIn) {
      refetch();
    }
  }, [loggedIn]);

  const handleIncDec = (cartId, id, type, quantity) => {
    if (isSuccess) {
      if (type == "inc") {
        updateCartItem({ cartId, id, quantity: 1 });
      } else {
        if (quantity == 1) handleRemoveCartItem(cartId);
        else updateCartItem({ cartId, id, quantity: -1 });
      }
    }
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                          CART
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
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
                            {isSuccess   && data?.cartItem?.length > 0 ? (
                              data.cartItem?.map((cartItem) => (
                                <li
                                  key={cartItem.product._id}
                                  className="flex py-6"
                                >
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={cartItem.product?.imageUrl}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="w-fll grid grid-cols-[75%_25%] text-base font-medium text-gray-900">
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
                                        <p className="ml-2 text-xs">
                                          Rs. {cartItem.price}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex items-end justify-between text-sm">
                                      <div>
                                        {cartItem.size.map((size) => (
                                          <div
                                            className="text-gray-500 mt-2"
                                            style={{ fontFamily: "Courier" }}
                                          >
                                            Size: {size.name}
                                            <button
                                              className="ml-1"
                                              onClick={() =>
                                                handleIncDec(
                                                  cartItem._id,
                                                  size._id,
                                                  "dec",
                                                  size.quantity
                                                )
                                              }
                                            >
                                              <RemoveTwoToneIcon
                                                className="border border-black rounded-md mx-2"
                                                fontSize="small"
                                              />
                                            </button>
                                            {size.quantity}
                                            <button
                                              onClick={() =>
                                                handleIncDec(
                                                  cartItem._id,
                                                  size._id,
                                                  "inc",
                                                  size.quantity
                                                )
                                              }
                                            >
                                              <AddTwoToneIcon
                                                className="border border-black rounded-md mx-2"
                                                fontSize="small"
                                              />
                                            </button>
                                          </div>
                                        ))}
                                      </div>

                                      <div className="flex">
                                        <button
                                          style={{ color: "#9D6134" }}
                                          type="button"
                                          onClick={() =>
                                            handleRemoveCartItem(cartItem._id)
                                          }
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))
                            ) : (
                              <p>No items in cart</p>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      {(isFetchingGetCart || isLoadingDelete || isLoadingUpdate) && <LinearProgress color="secondary" />}
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p style={{ fontFamily: "Times-Italic" }}>Subtotal</p>
                        <p>Rs. {data?.totalPrice ?? 0}</p>
                      </div>
                      <p
                        className="mt-0.5 text-sm text-gray-500"
                        style={{ fontFamily: "Courier-Oblique" }}
                      >
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        {data?.cartItem?.length > 0 ? (
                          <Link
                            to={"/checkout"}
                            onClick={() => setOpen(false)}
                            style={{ backgroundColor: "#BD446B" }}
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            Checkout
                          </Link>
                        ) : (
                          <div className="flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-600 rounded-md shadow-md">
                            <p className="text-lg font-semibold">Cart Empty</p>
                          </div>
                        )}
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{" "}
                          <Link
                            to={"/"}
                            style={{ color: "#9D6134" }}
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </Link>
                        </p>
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
