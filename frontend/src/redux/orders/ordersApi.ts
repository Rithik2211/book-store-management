import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../utils/baseUrl';

const baseQuery = fetchBaseQuery({
    baseUrl : `${getBaseUrl()}/api/orders`,
    credentials: 'include',
    prepareHeaders  : (Headers) => {
        const token = localStorage.getItem('token');
        if (token){
            Headers.set('Authorization', `Bearer ${token}`);
        }
        return Headers;
    }
})

const ordersApi = createApi({
    reducerPath : 'orderApi',
    baseQuery : baseQuery,
    endpoints: (build) => ({
        createOrder : build.mutation({
            query : (newOrder) => ({
                url : '/create-order',
                method : 'POST',
                body : newOrder,
                credentials: 'include',
            }),
            invalidatesTags: ["Orders"]
        }),
        fetchOrderByEmail : build.query({
            query : (email) => ({
                url : `/get-order/${email}`
            }),
            providesTags : ["Orders"]
        }),
    }),
    tagTypes: ['Orders']
})

export const { useCreateOrderMutation, useFetchOrderByEmailQuery }  = ordersApi;
export default ordersApi;