import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../../Utils/constant"

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/api/user`,
        credentials: 'include',
    }),
    endpoints: (builder)=>({
        getUser : builder.query({
            query : () => '/profile',
        }),
        getAllUser:builder.query({
            query:() => '/'
        }),
    })
})

export const { useGetUserQuery, useGetAllUserQuery } = userApi;
