import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { FilterBooksProps } from "../components/TopSellerSection";
interface CartSliceProps {
    cartItems : number;
    productQty : number;
    productPrice : number;
    cartProductItems : FilterBooksProps[];
}

const initialState : CartSliceProps = {
    cartItems : 0,
    productQty : 0,
    productPrice : 0,
    cartProductItems: []
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
        clearCart : (state) => {
            state.cartItems = 0;
            state.productQty = 0;
            state.productPrice = 0;
            state.cartProductItems = [];
        },
        addProductItem : (state, action: PayloadAction<FilterBooksProps>) => {
            const existingItem = state.cartProductItems.filter((item) => item._id === action.payload._id)
            if(!existingItem){
                state.cartProductItems.push(action.payload)
                alert("Item Added to the Cart!");
            }
            else{
                alert("Item Already Exists!");
            }
        },
        removeProductItem : (state,  action: PayloadAction<number>) => {
            state.cartProductItems = state.cartProductItems.filter((item) => item._id !== action.payload)
        },
    }
})

export const {addItem, removeItem, addQty, removeQty, addPrice, 
    removePrice, clearCart, addProductItem, removeProductItem} = CartSlice.actions;

export const CartItemsValue  = (state : RootState) => state.cart.cartItems;
export const ProductQtyValue = (state : RootState) => state.cart.productQty;
export const ProductPriceValue = (state : RootState) => state.cart.productPrice;

export default CartSlice.reducer;