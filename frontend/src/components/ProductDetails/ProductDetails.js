import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../redux/api/product.api";
import { useAddProductToCartMutation } from "../../redux/api/cart.api";
import { Alert, Grow, LinearProgress } from "@mui/material";

const callouts = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState();
  const [
    addItemToCart,
    { error: errorCart, isError: isErrorCart, isSuccess: Success },
  ] = useAddProductToCartMutation();
  const {
    data: product,
    isSuccess,
    isError,
    error,
    isFetching,
  } = useGetProductByIdQuery(id);
  useEffect(() => {
    if (isSuccess) {
      setSelectedSize(product.sizes[2]);
      setSelectedColor(product.color[0]);
    }
    if (isError) {
      console.log(error);
    }
  }, [isSuccess]);
  const [isHovered, setIsHovered] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = (productId, size) => {
    setTimeout(() => setShowAlert(false), 2000);
    addItemToCart({ productId, size });
  };

  useEffect(() => {
    if (isErrorCart) {
      console.log(errorCart);
    }
  }, [isErrorCart, isFetching]);
  const [selectedSize, setSelectedSize] = useState();
  return (
    <div className="bg-white">
      <div className="pt-6">
        {isFetching ? (
          <LinearProgress color="secondary" />
        ) : (
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-1 gap-y-2 px4 pt-3">
            {/* Image gallery */}
            {!isFetching && (
              <div className="flex flex-col items-center">
                {/* <div className="overflow-hidden rounded-lg max-w-[50rem] max-h-[57rem]">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div> */}
                {/* {product.images.map((image)=><div className="flex flex-wrap space-x-5 justify-center">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
              <img
                src={image.}
                alt={image.alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            </div>)} */}
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[100vmin] max-h-[100vmin] mt-4">
                  <img
                    src={product?.imageUrl}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            )}

            {/* Product info */}
            {!isFetching && (
              <div
                className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8
        lg:pb-24"
              >
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {product?.title}
                  </h1>
                </div>

                {/* Options */}
                <div className="mt-4 lg:row-span-3 lg:mt-0">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl tracking-tight text-gray-900">
                    Rs {product?.price}
                  </p>

                  {/* Reviews */}
                  {/* <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div> */}

                  <form className="mt-10">
                    {/* Colors  for multiple color*/}
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        Color
                      </h3>

                      <RadioGroup
                        value={selectedColor}
                        onChange={setSelectedColor}
                        className="mt-4"
                      >
                        <RadioGroup.Label className="sr-only">
                          Choose a color
                        </RadioGroup.Label>
                        <div className="flex items-center space-x-3">
                          {product?.color?.map((color) => (
                            <RadioGroup.Option
                              key={color} // Use `color` as the key
                              value={color} // Set the value to `color`
                              className={({ active, checked }) =>
                                classNames(
                                  active && checked ? "ring ring-offset-1" : "",
                                  !active && checked ? "ring-2" : "",
                                  "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                                )
                              }
                            >
                              <RadioGroup.Label as="span" className="sr-only">
                                {color} {/* Display `color` */}
                              </RadioGroup.Label>
                              <span
                                aria-hidden="true"
                                className={classNames(
                                  "h-8 w-8 rounded-full border border-black border-opacity-10"
                                )}
                                style={{ backgroundColor: color }} // Add inline style for color
                              />
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                    {/* 
                <h3 className="text-sm font-medium text-gray-900">
                  {product?.color}
                </h3> */}

                    {/* Sizes */}
                    <div className="mt-10">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-gray-900">
                          Size
                        </h3>
                        <a
                          href="#"
                          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Size guide
                        </a>
                      </div>

                      <RadioGroup
                        value={selectedSize}
                        onChange={setSelectedSize}
                        className="mt-4"
                      >
                        <RadioGroup.Label className="sr-only">
                          Choose a size
                        </RadioGroup.Label>
                        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                          {product?.sizes?.map((size) => (
                            <RadioGroup.Option
                              key={size.name}
                              value={size}
                              disabled={size.quantity <= 0}
                              className={({ active }) =>
                                classNames(
                                  size.quantity > 0
                                    ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                    : "cursor-not-allowed bg-gray-50 text-gray-200",
                                  active ? "ring-2 ring-indigo-500" : "",
                                  "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                                )
                              }
                            >
                              {({ active, checked }) => (
                                <>
                                  <RadioGroup.Label as="span">
                                    {size.name}
                                  </RadioGroup.Label>
                                  {size.quantity > 0 ? (
                                    <span
                                      className={classNames(
                                        active ? "border" : "border-2",
                                        checked
                                          ? "border-indigo-500"
                                          : "border-transparent",
                                        "pointer-events-none absolute -inset-px rounded-md"
                                      )}
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <span
                                      aria-hidden="true"
                                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                    >
                                      <svg
                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                        viewBox="0 0 100 100"
                                        preserveAspectRatio="none"
                                        stroke="currentColor"
                                      >
                                        <line
                                          x1={0}
                                          y1={100}
                                          x2={100}
                                          y2={0}
                                          vectorEffect="non-scaling-stroke"
                                        />
                                      </svg>
                                    </span>
                                  )}
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                    <Button
                      // className="mt-10 flex w-full items-center justify-center border-black px-8 py-3 text-base font-bold"
                      // variant="outlined"
                      // style={{}}
                      className="mt-10 flex w-full items-center justify-center border-black px-8 py-3 text-base font-bold"
                      variant="outlined"
                      style={{
                        backgroundColor: isHovered ? "#BD446B" : "#fff",
                        color: isHovered ? "#000" : "#333",
                        border: "1px solid black",
                        transition:
                          "background-color 0.3s ease, color 0.3s ease",
                      }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      onClick={() => {
                        setShowAlert(true);
                        handleAddToCart(product?._id, {
                          ...selectedSize,
                          quantity: 1,
                        });
                      }}
                    >
                      ADD TO CART
                    </Button>
                    {showAlert && (
                      <Grow in={showAlert} >
                      <div
                        style={{
                          position: "fixed",
                          top: "70px",
                          right: "20px",
                          zIndex: 50,
                          transition: "opacity 2.5s ease",
                          opacity: showAlert ? 1 : 0, // Smooth fade-out
                        }}
                      >
                        <Alert variant="filled" severity="success">
                          Item added to cart successfully!
                        </Alert>
                      </div>
                      </Grow>
                    )}
                  </form>
                </div>
                {/* detail highlight desc */}
                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                  {/* Description and details */}
                  {/* <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">Description</p>
                </div>
              </div> */}
                  {/* Highlighted */}
                  {/* <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.content?.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div> 
              </div> */}
                  {/* Details */}
                  {/* <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div> */}
                </div>
              </div>
            )}
          </section>
        )}

        {/* callout */}
      </div>
      <div className="bg-gray-100 mt-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">
              | YOU MAY ALSO LIKE |
            </h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
