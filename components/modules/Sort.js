"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react'
import { IoFilter } from 'react-icons/io5'

function Sort({ countEl }) {

    const router = useRouter();
    const searchParams = useSearchParams();
    
    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)
    
            return params.toString()
        },
        [searchParams]
    );

    return (
        <div className='flex flex-row items-center justify-between border-b-1 border-b-gray pb-2.5'>
            <div className='flex flex-row items-center gap-2'>
                <IoFilter size={24} />
                <select id="" className='focus:outline-none pl-5 bg-white' defaultValue={0} onChange={
                    (event) => router.push(`/shop?${createQueryString("sort", event.target.value)}`)
                }>
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