const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    totalPrice: [],
    totalDiscount: 0
}

const sumItemsCounter = (products) => products.reduce((prev, curr) => prev + curr.quantity, 0)

const sumTotalPrice = (products) => products.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)

const sumTotalDiscount = (products) => products.reduce((prev, curr) => prev + (curr.price * (100 - curr.discount) / 100) * curr.quantity, 0)

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            if (!state.selectedItems.find(i => i.id === action.payload.id)) {
                state.selectedItems.push({ ...action.payload, quantity: 1 });
                state.itemsCounter = sumItemsCounter(state.selectedItems);
                state.totalPrice = sumTotalPrice(state.selectedItems);
                state.totalDiscount = sumTotalDiscount(state.selectedItems);

                localStorage.setItem("products", JSON.stringify(state))
            }
        },
        increase: (state, action) => {
            const increaseIndex = state.selectedItems.findIndex(i => i.id === action.payload.id);
            state.selectedItems[increaseIndex].quantity++;
            state.itemsCounter = sumItemsCounter(state.selectedItems);
            state.totalPrice = sumTotalPrice(state.selectedItems);
            state.totalDiscount = sumTotalDiscount(state.selectedItems);

            localStorage.setItem("products", JSON.stringify(state))
        },
        decrease: (state, action) => {
            const decreaseIndex = state.selectedItems.findIndex(i => i.id === action.payload.id);
            state.selectedItems[decreaseIndex].quantity--;
            state.itemsCounter = sumItemsCounter(state.selectedItems);
            state.totalPrice = sumTotalPrice(state.selectedItems);
            state.totalDiscount = sumTotalDiscount(state.selectedItems);

            localStorage.setItem("products", JSON.stringify(state))
        },
        removeItem: (state, action) => {
            const newSelectedItems = state.selectedItems.filter(i => i.id !== action.payload.id);
            state.selectedItems = newSelectedItems;
            state.itemsCounter = sumItemsCounter(state.selectedItems);
            state.totalPrice = sumTotalPrice(state.selectedItems);
            state.totalDiscount = sumTotalDiscount(state.selectedItems);

            localStorage.setItem("products", JSON.stringify(state))
        },
        getProducts: (state, action) => {
            state.selectedItems = action.payload?.selectedItems ?? [];
            state.itemsCounter = action.payload?.itemsCounter ?? 0;
            state.totalPrice = action.payload?.totalPrice ?? [];
            state.totalDiscount = action.payload?.totalDiscount ?? 0;
        }
    }
})

export default cartSlice.reducer;
export const { addItem, increase, decrease, removeItem, getProducts } = cartSlice.actions;