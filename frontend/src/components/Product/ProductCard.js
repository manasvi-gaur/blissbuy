import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useGetCategorisedProductsQuery } from '../../redux/api/product.api';

export default function ProductCard() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const [topLevelCategory, secondLevelCategory, thirdLevelCategory] = pathSegments;

  const filters = new URLSearchParams(location.search);

  const { data, isSuccess, isError, error } = useGetCategorisedProductsQuery({
    topLevelCategory,
    secondLevelCategory,
    thirdLevelCategory,
    filters: Object.fromEntries(filters.entries())
  });

  console.log(data);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data?.map((product) => (
            <Link to={`/product/${product._id}`} key={product._id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product?.imageUrl}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h2 className="mt-4 text-sm text-gray-700">{product.title}</h2>
              <h3 className="mt-2 text-sm text-gray-700">{product.brand}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">Rs {product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
