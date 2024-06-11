"use client"
import React from 'react'
import { IoIosArrowUp } from "react-icons/io";

function ToTop() {
    function toTopHandler() {
        window.scrollTo(0, 0)
    }
    return (
        <div className='transition-all hover:-translate-y-1 rounded-lg shadow-sm px-2 py-1 bg-red text-white flex flex-row items-center gap-2 cursor-pointer' onClick={() => toTopHandler()}>
            <p className='text-sm text-white'>برو بالا</p>
            <IoIosArrowUp size={20} />
        </div>
    )
}

export default ToTop