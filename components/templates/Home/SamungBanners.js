import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SamungBanners() {
    return (
        <div className='grid grid-cols-2 gap-10 max-sm:gap-3 max-sm:grid-cols-1'>
            <Link href={"/shop?q=سامسونگ"} className='row-start-1 col-span-1'>
                <Image alt="banner" src="/images/banner-samsung5.webp" width={764} height={220} className='w-full rounded-lg' />
            </Link>
            <Link href={"/shop?q=سامسونگ"} className='row-start-1 col-span-1 max-sm:row-start-2'>
                <Image alt="banner" src="/images/banner-samsung6.webp" width={764} height={200} className='w-full rounded-lg' />
            </Link>
        </div>
    )
}

export default SamungBanners