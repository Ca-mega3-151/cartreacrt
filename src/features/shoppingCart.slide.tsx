import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";

export interface CartItem {
    [x: string]: ReactNode;
    id: number;
    quantity: number;
}
interface CartState {
    items: CartItem[]
}
const initialState: CartState = {
    items: [
        { id: 1, quantity: 1  },
        { id: 2, quantity: 1 },
        { id: 3, quantity: 1 },
        { id: 4, quantity: 1 },
    ]
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        removeAll(state) {
            state.items = []
        },
        removeItem(state, action: PayloadAction<number>) {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        changeQuantity(state, action: PayloadAction<{ id: number, quantity: number }>) {
            state.items = state.items.map((item) => {
                if (action.payload.id === item.id) {
                    return { ...item, quantity: action.payload.quantity }
                } else {
                    return item
                }
            })
        }

    }
});
export const { removeAll, removeItem, changeQuantity } = cartSlice.actions
export default cartSlice;