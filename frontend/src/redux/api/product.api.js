import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../../Utils/constant"

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/api/products`,
        credentials: 'include',
    }),
    endpoints:(builder)=>({
        getAllProduct: builder.query({
            query: () => '/',
        }),
        getProductById: builder.query({
            // params in body in product
            query: (id) => `id/${id}`,
        }),
    })

})
 export const {useGetAllProductQuery,useGetProductByIdQuery} = productApi