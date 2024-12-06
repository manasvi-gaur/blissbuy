import React from 'react'

const products = [
    {
      id: 1,
      name: 'Throwback Hip Bag',
      href: '#',
      color: 'Salmon',
      price: '$90.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 2,
      name: 'Medium Stuff Satchel',
      href: '#',
      color: 'Blue',
      price: '$32.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    }
    // More products...
  ]

export default function OrderSummaryCard
() {
  return (
    <div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              {products.map((product) => (
                <li key={product.id} className="flex py-4">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a
                            href={product.href}
                            style={{
                              fontFamily: "Times-BoldItalic",
                              color: "black",
                            }}
                          >
                            {product.name}
                          </a>
                        </h3>
                        <p className="ml-20">{product.price}</p>
                      </div>
        
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p
                        className="text-gray-500"
                        style={{ fontFamily: "Courier" }}
                      >
                        Qty {product.quantity}
                      </p>
                    </div>
                    <div className="border-b border-gray-900/10 pb-9"></div>
                  </div>
                </li>
              ))}
              <div className="flex justify-between text-base font-medium text-gray-900">
                        <p style={{fontFamily:"Times-Italic"}}>Subtotal</p>
                        <p style={{marginLeft:"6rem"}}>$262.00</p>
                      </div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                        <p style={{fontFamily:"Times-Italic"}}>Estimate Taxes</p>
                        <p style={{marginLeft:"6rem"}}>$38.00</p>
                      </div>
              <div className="flex justify-between ">
                        <p style={{fontFamily:"Courier-Bold",fontSize:"4.5vmin",marginTop:"2rem"}}>Total</p>
                        <p style={{marginLeft:"6rem",fontSize:"4.5vmin",marginTop:"2rem"}}>$300.00</p>
                      </div>
            </div>
          </div>
    </div>
  )
}
