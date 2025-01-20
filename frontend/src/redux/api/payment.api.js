import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../../Utils/constant"

export const paymentApi = createApi({
    reducerPath: 'paymentApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/api/payment`,
        credentials: 'include',
    }),
    endpoints: (builder)=>({
        createPaymentLink : builder.mutation({
            query : (id) => `/${id}`,
        }),
        updatePaymentInformation : builder.query({
            query : () => '/',
        })
    })
})

export const {useCreatePaymentLinkMutation,useUpdatePaymentInformationQuery} = paymentApi;
