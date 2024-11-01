"use client"
import findClosestWord from '@/helper/findClosestWord';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'
import { IoSearch, IoSend } from "react-icons/io5";

function InputSearch() {

    const correctWords = [
        "شیایومی",
        "شیائومی",
        "اپل",
        "آیفون",
        "سامسونگ",
        "گلکسی",
        "پوکو",
        "ردمی",
        "نوت",
        "اولترا",
        "پرو",
        "مکس",
        "پرو مکس",
        "xiaomi",
        "apple",
        "samsung",
        "galaxy",
        "poco",
        "ultra",
        "pro",
        "note",
        "redmi",
        "redmi note",
        "redmi note 13",
        "redmi note 13 pro",
        "poco x6",
        "poco x6 pro",
        "گلوبال",
        "ویتنام",
        "iphone",
        "pro max",
        "گوشی",
        "موبایل",
    ];

    const [suggestion, setSuggestion] = useState("");

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
        const closest = findClosestWord(q, correctWords);
        if (closest == q) {
            setSuggestion("");
        } else {
            setSuggestion(closest);
        }
        router.push(`/shop?${createQueryString("q", q)}`);
    }

    return (
        <div className="flex flex-col pb-2 relative max-sm:w-full">
            <div className='bg-gray px-2 py-2 rounded-md flex flex-row items-center gap-4'>
                <IoSearch size={24} className='opacity-40 cursor-pointer' onClick={() => searchFetch(searchValue ? searchValue : "")} />
                <input
                    onKeyPress={(event) => searchHandler(event)}
                    onChange={(e) => setSearchValue(e.target?.value)}
                    value={searchValue}
                    type="search"
                    className='bg-gray focus:outline-none text-sm w-80'
                    placeholder='جستجو ...' />
            </div>
            <p className="absolute -bottom-4 max-sm:-bottom-3 text-sm max-sm:text-xs">
                {suggestion ? <>شاید منظورتون <span className="text-blue cursor-pointer border-b-1 border-blue" onClick={() => searchFetch(suggestion)}>"{suggestion}"</span> بوده.</> : ''}
            </p>

        </div>
    )
}

export default InputSearch