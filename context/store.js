import cartReducer from '@/context/cartSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
})