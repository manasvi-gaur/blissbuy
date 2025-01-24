import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../../Utils/constant"
import { getTokenFromLocalStorage } from "../../Utils/helper/auth";

export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/api`,
        credentials: 'include',
        prepareHeaders: (headers) => {
            const token = getTokenFromLocalStorage();
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Cart'],
    endpoints:(builder)=>({
        // find user cart
        getCart: builder.query({
            query: () => '/cart/',
            providesTags: ['Cart']
        }),
        // add product to cart
        addProductToCart: builder.mutation({
            query:({productId, size}) => ({
                url: '/cart/add',
                method: 'PUT',
                body : {productId, size}
            }),
            invalidatesTags: ['Cart']
        }),
        // now working with cartItem
        updateCartItem:builder.mutation({
            query:({cartId, id, quantity}) => ({
                url:`/cart_items/${cartId}`,
                method:'PUT', 
                body:{id, quantity}
            }),
            invalidatesTags: ['Cart']
        }),
        // remove product from cart
        removeCartItem:builder.mutation({
            query:(id) => ({
                url:`/cart_items/${id}`,
                method:'DELETE',
            }),
            invalidatesTags: ['Cart']
        }),
        // remove all cart items
        removeAllCartItems:builder.mutation({
            query: () => ({
                url: '/cart/cartEmpty',
                method: 'DELETE',
            }),
            invalidatesTags: ['Cart']
        })
    })
})
export const { useGetCartQuery, useAddProductToCartMutation, useUpdateCartItemMutation, useRemoveCartItemMutation,useRemoveAllCartItemsMutation } = cartApi;