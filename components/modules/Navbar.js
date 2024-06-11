"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { LuLogIn } from "react-icons/lu";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function Navbar() {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        setSearchValue(searchParams.get("q") || "")
    }, [])

    function searchHandler(event) {
        if (event.key === "Enter") {
            const q = event.target.value.toLowerCase();
            searchFetch(q)
        }
    }

    function searchFetch(q) {
        router.push(`/shop?q=${q ?? searchValue}`)
    }

    return (
        <div className='w-full shadow-md'>
            <div className='flex flex-row items-center justify-between py-5 container mb-6 max-sm:px-4'>
                <div className='flex flex-row items-center gap-4 max-sm:flex-col max-sm:w-full max-sm:gap-3'>
                    <Link href="/"><Image alt='logo' src="/images/logo.svg" width={145} height={45} quality={100} /></Link>
                    <div className='bg-gray px-2 py-2 rounded-md flex flex-row items-center gap-4 max-sm:w-full'>
                        <IoSearch size={24} className='opacity-40 cursor-pointer' onClick={() => searchFetch()} />
                        <input
                            onKeyPress={(event) => searchHandler(event)}
                            onChange={(e) => setSearchValue(e.target.value)}
                            value={searchValue}
                            type="text"
                            className='bg-gray focus:outline-none text-sm w-80'
                            placeholder='جستجو ...' />
                    </div>
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