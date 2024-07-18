"use client"

import Navbar from '@/components/modules/Navbar'
import { store } from '@/context/store'
import React from 'react'
import { Provider } from 'react-redux'
import HydrateState from './HydrateState'

export default function MyAppProvider({ children }) {
    return (
        <Provider store={store}>
            <HydrateState>
                <Navbar />
                <div className="mt-24">
                    {children}
                </div>
            </HydrateState>
        </Provider>
    )
}
