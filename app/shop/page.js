import Breadcrump from '@/components/modules/Breadcrump'
import Products from '@/components/templates/Home/Products'
import React, { Suspense } from 'react'
import data from '@/data/mobile.json'
import Sort from '@/components/modules/Sort'

function page({ searchParams }) {

    let dataSorted = data;

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


    const dataSortedFinal = dataSorted.filter(el => {
        if (regex.test(el.title.toLowerCase())) {
            return el;
        } else {
            return false;
        }
    })

    if (dataSortedFinal.length == 0) {
        dataSorted = dataSorted.filter(el => {
            if (regex.test(el.keywords.toLowerCase())) {
                return el;
            } else {
                return false;
            }
        })
    } else {
        dataSorted = dataSortedFinal;
    }


    return (
        <div className='container flex flex-col gap-8 max-sm:px-4'>
            <Breadcrump level="1" />
            <div className='w-full'>
                <div className='w-full flex flex-col gap-10'>
                    <Suspense>
                        <Sort countEl={dataSorted.length} />
                    </Suspense>
                    <Products data={dataSorted} />
                </div>
            </div>
        </div>
    )
}

export default page