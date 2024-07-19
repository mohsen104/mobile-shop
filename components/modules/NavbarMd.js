"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'
import { MdOutlineAccountCircle } from 'react-icons/md';
import { RiShoppingCartLine } from 'react-icons/ri';

export default function NavbarMd({ itemsCounter }) {

    const [menu, setMenu] = useState(true);
    const isShow = () => setMenu(true);
    const isHide = () => setMenu(false);

    function openMenu() {
        isHide()
    }

    function closeMenu() {
        isShow()
    }

    return (
        <div className='md:hidden'>
            {
                menu ?
                    <IoMenu onClick={openMenu} size={28} className='cursor-pointer' />
                    :
                    <IoClose onClick={closeMenu} size={28} className='cursor-pointer' />
            }
            {
                !menu && (
                    <div className='fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg p-6'>
                        <div className='flex flex-col items-start gap-4 font-medium text-black'>
                            <div className='flex flex-row items-center gap-6 mr-2.5'>
                                <Link href="/login" onClick={closeMenu}>
                                    <MdOutlineAccountCircle size={20} />
                                </Link>
                                <span className='h-6 bg-gray w-[1px]'></span>
                                <Link href="/cart" onClick={closeMenu} className='relative'>
                                    <RiShoppingCartLine size={20} />
                                    <p className="bg-red text-white text-center rounded-full border-1 border-white w-5 h-5 text-sm absolute -top-2 -right-2">{itemsCounter}</p>
                                </Link>
                            </div>
                            <Link href="/" onClick={closeMenu} className='hover:text-red hover:bg-gray/50 w-full p-2.5 bg-white rounded-lg'>
                                صفحه اصلی
                            </Link>
                            <Link href="/shop" onClick={closeMenu} className='hover:text-red hover:bg-gray/50 w-full p-2.5 bg-white rounded-lg'>
                                فروشگاه
                            </Link>
                            <Link href="/aboutus" onClick={closeMenu} className='hover:text-red hover:bg-gray/50 w-full p-2.5 bg-white rounded-lg'>
                                درباره ما
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
