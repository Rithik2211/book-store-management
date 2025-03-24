import {configureStore} from '@reduxjs/toolkit';
import CartReducer from './cartSlice';
import booksApi from './books/booksApi';
import ordersApi from './orders/ordersApi';


export const store = configureStore({
    reducer: {
        cart : CartReducer,
        [booksApi.reducerPath]: booksApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>

export type Dispatch = typeof store.dispatch