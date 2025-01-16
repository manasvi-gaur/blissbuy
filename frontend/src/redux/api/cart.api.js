import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../../Utils/constant"

export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/api/cart`,
        credentials: 'include',
    }),
    tagTypes: ['Cart'],
    endpoints:(builder)=>({
        // find user cart
        getCart: builder.query({
            query: () => '/',
            providesTags: ['Cart']
        }),
        // add product to cart
        addProductToCart: builder.mutation({
            query:({productId, size}) => ({
                url: '/add',
                method: 'PUT',
                body : {productId, size}
            }),
            invalidatesTags: ['Cart']
        })
    })
})
export const { useGetCartQuery, useAddProductToCartMutation } = cartApi;