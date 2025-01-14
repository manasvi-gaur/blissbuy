import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../../Utils/constant"

export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/api/cart`,
        credentials: 'include',
    }),
    endpoints:(builder)=>({
        // find user cart
        getCart: builder.query({
            query: () => '/',
        }),
        // add product to cart
        addProduct: builder.mutation({
            query:() => ({
                url: '/add',
                method: 'POST',
            })
        })
    })
})
export const { useGetCartQuery, useAddProductMutation } = cartApi;