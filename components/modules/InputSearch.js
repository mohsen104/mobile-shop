"use client"
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";

function InputSearch() {
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

    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        setSearchValue(searchParams.get("q"))
    }, [])

    function searchHandler(event) {
        if (event.key === "Enter") {
            const q = event.target?.value.toLowerCase();
            searchFetch(q ? q : "")
        }
    }

    function searchFetch(q) {
        router.push(`/shop?${createQueryString("q", q)}`)
    }

    return (
        <div className='bg-gray px-2 py-2 rounded-md flex flex-row items-center gap-4 max-sm:w-full'>
            <IoSearch size={24} className='opacity-40 cursor-pointer' onClick={() => searchFetch(searchValue?searchValue:"")} />
            <input
                onKeyPress={(event) => searchHandler(event)}
                onChange={(e) => setSearchValue(e.target?.value)}
                value={searchValue}
                type="text"
                className='bg-gray focus:outline-none text-sm w-80'
                placeholder='جستجو ...' />
        </div>
    )
}

export default InputSearch