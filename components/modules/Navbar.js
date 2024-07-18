import Image from 'next/image'
import React from 'react'
import { LuLogIn } from "react-icons/lu";
import Link from 'next/link';
import { RiShoppingCartLine } from 'react-icons/ri';
import NavbarMd from './NavbarMd';
import { useSelector } from 'react-redux';

function Navbar() {
    const {itemsCounter} = useSelector(store => store.cart);

    return (
        <div className='fixed top-0 right-0 left-0 w-full shadow-md z-50 bg-white'>
            <div className='flex flex-row items-center justify-between p-4 container'>
                <div className='flex flex-row items-center gap-14'>
                    <Link href="/">
                        <Image alt='logo' src="/images/logo.svg" width={145} height={45} />
                    </Link>
                    <div className='flex flex-row items-center gap-8 font-medium text-black max-md:hidden'>
                        <Link href="/" className='hover:text-red'>
                            صفحه اصلی
                        </Link>
                        <Link href="/shop" className='hover:text-red'>
                            فروشگاه
                        </Link>
                        <Link href="/aboutus" className='hover:text-red'>
                            درباره ما
                        </Link>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-4 max-md:hidden'>
                    <Link href="/login">
                        <button className='flex flex-row items-center gap-2 py-1.5 px-2 border-1 border-gray rounded-lg'><LuLogIn size={20} /> ورود | ثبت نام </button>
                    </Link>
                    <span className='h-6 bg-gray w-[1px]'></span>
                    <Link href="/cart" className='relative'>
                        <RiShoppingCartLine size={20} />
                        <p className="bg-red text-white text-center rounded-full border-1 border-white w-5 h-5 text-sm absolute -top-2 -right-2">{itemsCounter}</p>
                    </Link>
                </div>
                <NavbarMd itemsCounter={itemsCounter} />
            </div>
        </div>
    )
}

export default Navbar