"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { IoFilter } from 'react-icons/io5'

function Sort({ countEl }) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [sort, setSort] = useState();

    switch (sort) {
        case "0":
            router.push(`/shop?q=${searchParams.get("q") ?? ""}&sort=0`)
            break;
        case "1":
            router.push(`/shop?q=${searchParams.get("q") ?? ""}&sort=1`)
            break;
        case "2":
            router.push(`/shop?q=${searchParams.get("q") ?? ""}&sort=2`)
            break;
        case "3":
            router.push(`/shop?q=${searchParams.get("q") ?? ""}&sort=3`)
            break;
        default:
            break;
    }

    return (
        <div className='flex flex-row items-center justify-between border-b-1 border-b-gray pb-2.5'>
            <div className='flex flex-row items-center gap-2'>
                <IoFilter size={24} />
                <select id="" className='focus:outline-none pl-5 bg-white' defaultValue={0} onChange={(event) => setSort(event.target.value)}>
                    <option value="0">پربازدید ترین</option>
                    <option value="1">پرفروش ترین</option>
                    <option value="2">ارزان ترین</option>
                    <option value="3">گران ترین</option>
                </select>
            </div>
            <p className='opacity-60 text-sm'>{countEl} کالا</p>
        </div>
    )
}

export default Sort