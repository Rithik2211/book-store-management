import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CartSliceProps {
    cartItems : number;
    productQty : number;
    productPrice : number;
}

const initialState : CartSliceProps = {
    cartItems : 0,
    productQty : 0,
    productPrice : 0,
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem : (state) => {
            state.cartItems += 1
        },
        removeItem : (state) => {
            state.cartItems -= 1
        },
        addQty : (state) => {
            state.productQty += 1
        },
        removeQty : (state) => {
            state.productQty -= 1
        },
        addPrice : (state, action: PayloadAction<number>) => {
            state.productPrice += action.payload
        },
        removePrice : (state,  action: PayloadAction<number>) => {
            state.productPrice -= action.payload
        },
    }

})

export const {addItem, removeItem, addQty, removeQty, addPrice, removePrice} = CartSlice.actions;

export const CartItemsValue  = (state : RootState) => state.cart.cartItems;
export const ProductQtyValue = (state : RootState) => state.cart.productQty;
export const ProductPriceValue = (state : RootState) => state.cart.productPrice;

export default CartSlice.reducer;