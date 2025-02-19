import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../../Utils/constant"
import { getTokenFromLocalStorage } from "../../Utils/helper/auth";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/api/user`,
        credentials: 'include',
        prepareHeaders: (headers) => {
            const token = getTokenFromLocalStorage();
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
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
