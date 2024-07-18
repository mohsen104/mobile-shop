// "use client"
// import { setAmountCart } from '@/redux/cartSlice';
// import Link from 'next/link'
// import React, { useEffect } from 'react'
// import { FiShoppingCart } from 'react-icons/fi'
// import { useDispatch, useSelector } from 'react-redux';

// function CartNav() {

//     const amount = useSelector((state) => state.cart.value);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(setAmountCart(JSON.parse(localStorage.getItem("cart"))?.length ?? 0));
//     }, [])

//     return (
//         <Link href="/cart" className="relative">
//             {
//                 amount ?
//                     <>
//                         <FiShoppingCart size={20} className='cursor-pointer' />
//                         <p className="bg-red text-white text-center rounded-full border-1 border-white w-5 h-5 text-sm absolute -top-2 -right-2">{amount}</p>
//                     </>
//                     :
//                     < FiShoppingCart size={20} className='cursor-pointer' />
//             }
//         </Link >
//     )
// }

// export default CartNav