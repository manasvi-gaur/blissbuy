import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../../Utils/constant"

export const cartItemApi = createApi({
    reducerPath: 'cartItemApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/api/cart_items`,
        credentials: 'include',
    }),
    endpoints: (builder)=>({
        updateCartItem:builder.mutation({
            query:({body, id}) => ({
                url:`/${id}`,
                method:'PUT', 
                body,
            })
        }),
        removeCartItem:builder.mutation({
            query:({body, id}) => ({
                url:`/${id}`,
                method:'DELETE', 
                body,
            })
        }),
    })
})

export const { useUpdateCartItemMutation, useRemoveCartItemMutation } = cartItemApi;