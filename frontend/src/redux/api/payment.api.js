import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../Utils/constant";
import { getTokenFromLocalStorage } from "../../Utils/helper/auth";

export const paymentApi = createApi({
  reducerPath: "paymentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/payments`,
    credentials: "include",
    prepareHeaders: (headers) => {
      const token = getTokenFromLocalStorage();
      if (token) {
          headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
  },
  }),
  endpoints: (builder) => ({
    createPaymentLink: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "POST",
      }),
    }),
    // updatePaymentInformation : builder.query({
    //     query : () => '/',
    // })
    updatePaymentInformation: builder.mutation({
      query: ({ payment_id,paymentLinkId}) => ({
        url: "/",
        method: "POST",
        body: { payment_id,paymentLinkId},
      }),
    }),
  }),
});

export const {
  useCreatePaymentLinkMutation,
  useUpdatePaymentInformationMutation,
} = paymentApi;
