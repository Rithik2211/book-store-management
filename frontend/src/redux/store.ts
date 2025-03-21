import {configureStore} from '@reduxjs/toolkit';
import CartReducer from './cartSlice';


export const store = configureStore({
    reducer: {
        cart : CartReducer
    }
});

export type RootState = ReturnType<typeof store.getState>

export type Dispatch = typeof store.dispatch