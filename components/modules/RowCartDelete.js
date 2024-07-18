import { decrease, increase, removeItem } from '@/context/cartSlice';
import React from 'react'
import { MdDeleteOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

function RowCartDelete({ data }) {
    const dispatch = useDispatch();
    const selector = useSelector(store => store.cart);

    const item = selector.selectedItems.find(i => i.id === data.id);
    const quantity = item?.quantity ? item.quantity : 0;

    return (
        <div className='self-end mt-1.5'>
            {
                quantity === 1 && (
                    <div className='flex flex-row items-center gap-4'>
                        <button onClick={() => dispatch(increase(data))} className='w-8 h-8 rounded-md bg-red text-white text-xl flex items-center justify-center'>+</button>
                        <span className='w-2 text-center'>{quantity}</span>
                        <button onClick={() => dispatch(removeItem(data))} className='w-8 h-8 rounded-md bg-red text-white text-xl flex items-center justify-center'><MdDeleteOutline /></button>
                    </div>
                )
            }
            {
                quantity > 1 && (
                    <div className='flex flex-row items-center gap-4'>
                        <button onClick={() => dispatch(increase(data))} className='w-8 h-8 rounded-md bg-red text-white text-xl flex items-center justify-center'>+</button>
                        <span className='w-2 text-center'>{quantity}</span>
                        <button onClick={() => dispatch(decrease(data))} className='w-8 h-8 rounded-md bg-red text-white text-xl flex items-center justify-center'>-</button>
                    </div>
                )
            }
        </div>
    )
}

export default RowCartDelete