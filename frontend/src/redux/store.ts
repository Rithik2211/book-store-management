import {configureStore} from '@reduxjs/toolkit';
import CartReducer from './cartSlice';
import booksApi from './books/booksApi';


export const store = configureStore({
    reducer: {
        cart : CartReducer,
        [booksApi.reducerPath]: booksApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(booksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>

export type Dispatch = typeof store.dispatch