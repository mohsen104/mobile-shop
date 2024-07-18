"use client"
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer from '@/redux/cartSlice.js';

export default function StoreProvider({ children }) {
    const store = configureStore({
        reducer: {
            cart: cartReducer
        }
    })
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}