"use client"
import { addItem, increase, decrease, removeItem } from '@/context/cartSlice';
import Link from 'next/link';
import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

function AddToCart({ data }) {
    const dispatch = useDispatch();
    const selector = useSelector(store => store.cart);

    const item = selector.selectedItems.find(i => i.id === data.id);
    const quantity = item?.quantity ? item.quantity : 0;

    return (
        <>
            {
                quantity === 0 && (
                    <button onClick={() => dispatch(addItem(data))} className='w-full rounded-lg bg-red text-white text-sm py-3'>افزودن به سبد خرید</button >
                )
            }
            {
                quantity === 1 && (
                    <div className='flex flex-row items-center gap-4'>
                        <button onClick={() => dispatch(increase(data))} className='w-10 h-10 rounded-md bg-red text-white text-xl flex items-center justify-center'>+</button>
                        <span className='w-2 text-center'>{quantity}</span>
                        <button onClick={() => dispatch(removeItem(data))} className='w-10 h-10 rounded-md bg-red text-white text-xl flex items-center justify-center'><MdDeleteOutline /></button>
                        <Link href="/cart" className='w-full'>
                            <button className='w-full rounded-lg bg-green text-white text-sm py-3'>مشاهده سبد خرید</button>
                        </Link>
                    </div>
                )
            }
            {
                quantity > 1 && (
                    <div className='flex flex-row items-center gap-4'>
                        <button onClick={() => dispatch(increase(data))} className='w-10 h-10 rounded-md bg-red text-white text-xl flex items-center justify-center'>+</button>
                        <span className='w-2 text-center'>{quantity}</span>
                        <button onClick={() => dispatch(decrease(data))} className='w-10 h-10 rounded-md bg-red text-white text-xl flex items-center justify-center'>-</button>
                        <Link href="/cart" className='w-full'>
                            <button className='w-full rounded-lg bg-green text-white text-sm py-3'>مشاهده سبد خرید</button>
                        </Link>
                    </div>
                )
            }
        </>
    )
}

export default AddToCart;