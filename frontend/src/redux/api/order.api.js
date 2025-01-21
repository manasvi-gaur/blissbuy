import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../../Utils/constant"

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/api/order`,
        credentials: 'include',
    }),
    endpoints: (builder)=>({
        createOrder : builder.mutation({
            query : (body) => ({
                url: '/',
                method: 'POST',
                body
            })
        }),
        orderHistory:builder.query({
            query:() => '/user'
        }),
        findOrderById:builder.query({
            query:(id) => `/${id}`
        }),
    })
})
export const {useCreateOrderMutation,useOrderHistoryQuery,useFindOrderByIdQuery} = orderApi;