import Image from 'next/image'
import React, { Suspense } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { LuLogIn } from "react-icons/lu";
import Link from 'next/link';
import InputSearch from './InputSearch';

function Navbar() {
    return (
        <div className='w-full shadow-md'>
            <div className='flex flex-row items-center justify-between py-5 container mb-6 max-sm:px-4'>
                <div className='flex flex-row items-center gap-4 max-sm:flex-col max-sm:w-full max-sm:gap-3'>
                    <Link href="/"><Image alt='logo' src="/images/logo.svg" width={145} height={45} quality={100} /></Link>
                    <Suspense>
                        <InputSearch />
                    </Suspense>
                </div>
                <div className='flex flex-row items-center gap-4 max-sm:hidden'>
                    <Link href="/login">
                        <button className='flex flex-row items-center gap-2 py-1.5 px-2 border-1 border-gray rounded-lg'><LuLogIn size={20} /> ورود | ثبت نام </button>
                    </Link>
                    <span className='h-6 bg-gray w-[1px]'></span>
                    <FiShoppingCart size={20} className='cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Navbar