import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem:(state) => {
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length = 0;
        },
    }
})

export const {addItem,removeItem,clearCart} =cartSlice.actions
export default cartSlice.reducer
