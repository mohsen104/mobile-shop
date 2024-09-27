import Breadcrump from '@/components/modules/Breadcrump'
import Products from '@/components/templates/Home/Products'
import React from 'react'
import Sort from '@/components/modules/Sort'
import InputSearch from '@/components/modules/InputSearch';
import data from '@/data/mobile.json'

export async function generateStaticParams() {
    return [
        { sort: '0' },
        { sort: '1' },
        { sort: '2' },
        { sort: '3' },
    ];
}

async function page({ searchParams }) {
    let dataSorted = [...data];

    switch (searchParams.sort) {
        case "0":
            dataSorted.sort((a, b) => a.id - b.id);
            break;
        case "1":
            dataSorted.sort((a, b) => b.rate - a.rate);
            break;
        case "2":
            dataSorted.sort((a, b) => a.price - b.price);
            break;
        case "3":
            dataSorted.sort((a, b) => b.price - a.price);
            break;
        default:
            dataSorted.sort((a, b) => a.id - b.id);
            break;
    }

    const regex = new RegExp(`${searchParams.q ?? ""}`);

    dataSorted = dataSorted.filter(item => {
        if (regex.test(item.title.toLowerCase()) || regex.test(item.keywords.toLowerCase())) return item;
    })

    return (
        <div className='container flex flex-col gap-8 max-sm:px-4'>
            <div className='flex flex-row max-md:flex-col max-md:items-start justify-between items-center gap-6'>
                <Breadcrump level="shop" />
                <InputSearch />
            </div>
            <div className='w-full'>
                <div className='w-full flex flex-col gap-10'>
                    <Sort countEl={dataSorted.length} />
                    <Products data={dataSorted} />
                </div>
            </div>
        </div>
    )
}

export default page