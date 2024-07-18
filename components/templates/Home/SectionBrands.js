import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SectionBrands() {
    return (
        <div className='grid grid-cols-2 gap-10 w-full max-sm:grid-cols-1 max-sm:gap-3'>
            <Link href="/shop?q=اپل">
                <Image alt="banner" src="/images/banner-apple.webp" width={764} height={180} className='rounded-md' ></Image>
            </Link>
            <Link href="/shop?q=شیائومی">
                <Image alt="banner" src="/images/banner-xiaomi.webp" width={764} height={180} className='rounded-md' ></Image>
            </Link>
        </div>
    )
}

export default SectionBrands