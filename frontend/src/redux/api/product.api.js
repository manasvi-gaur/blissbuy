import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../../Utils/constant"
import { getTokenFromLocalStorage } from "../../Utils/helper/auth";

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/api/products`,
        credentials: 'include',
        prepareHeaders: (headers) => {
            const token = getTokenFromLocalStorage();
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: () => '/',
        }),
        getProductById: builder.query({
            query: (id) => `id/${id}`,
        }),
        getCategorisedProducts: builder.query({
            query: ({ topLevelCategory, secondLevelCategory, thirdLevelCategory, filters }) => {
                const queryString = new URLSearchParams(filters).toString();
                return `${topLevelCategory}/${secondLevelCategory}/${thirdLevelCategory}?${queryString}`;
            },
        }),
    }),
})

export const { useGetAllProductQuery, useGetProductByIdQuery, useGetCategorisedProductsQuery } = productApi