import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../utils/baseUrl';
import { FilterBooksProps } from '../../components/TopSellerSection';

const baseQuery = fetchBaseQuery({
    baseUrl : `${getBaseUrl()}/api/books`,
    credentials: 'include',
    prepareHeaders  : (Headers) => {
        const token = localStorage.getItem('token');
        if (token){
            Headers.set('Authorization', `Bearer ${token}`);
        }
        return Headers;
    }
})

const booksApi = createApi({
    reducerPath : 'bookApi',
    baseQuery : baseQuery,
    endpoints: (build) => ({
        fetchAllBooks : build.query<FilterBooksProps[], void>({
            query : () => "/get-books",
            providesTags : ["Books"]
        }),
        fetchBookById : build.query({
            query : (id) => `/get-single-book/${id}`,
            providesTags : (result, error, id) => [{type : "Books", id}]
        }),
        addBook : build.mutation({
            query : (newBook) => ({
                url : '/create-book',
                method : 'POST',
                body : newBook,
            }),
            invalidatesTags: ["Books"]
        }),
        updateBookById : build.mutation({
            query : ({id, ...rest}) => ({
                url : `/edit/${id}`,
                method : 'PUT',
                body : rest,
                headers : {
                    'Content-Type' : 'application/json'
                }
            }),
            invalidatesTags: ["Books"]
        }),
        deleteBookById : build.mutation({
            query : (id) => ({
                url : `/delete/${id}`,
                method : 'DELETE',
            }),
            invalidatesTags: ["Books"]
        })
    }),
    tagTypes: ['Books']
})

export const {useFetchAllBooksQuery, useFetchBookByIdQuery, useUpdateBookByIdMutation, 
    useAddBookMutation, useDeleteBookByIdMutation}  = booksApi;
export default booksApi;