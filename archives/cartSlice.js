import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: { value: 0 },
    reducers: {
        increment: (state, action) => {
            const payload = action.payload;

            const amountLocalStorage = JSON.parse(localStorage.getItem("cart"));

            if (amountLocalStorage) {
                const items = amountLocalStorage;
                items.push(payload);
                localStorage.setItem("cart", JSON.stringify(items));
            } else {
                localStorage.setItem("cart", JSON.stringify([payload]));
            }

            state.value += 1;
        },
        decrement: (state, action) => {
            const payload = action.payload;

            const amountLocalStorage = JSON.parse(localStorage.getItem("cart"));

            const cartFiltered = amountLocalStorage.filter(el => {
                if (el != payload) {
                    return el;
                }
            })
            localStorage.setItem("cart", JSON.stringify(cartFiltered));

            state.value -= 1;
        },
        setAmountCart: (state, action) => {
            const payload = action.payload;

            state.value = payload;
        }
    },
});

export const { increment, decrement, setAmountCart } = cartSlice.actions;

export default cartSlice.reducer;