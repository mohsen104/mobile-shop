import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Intro() {
    return (
        <div className='grid grid-cols-2 gap-10 max-sm:gap-3'>
            <Link href={"/shop?q=سامسونگ"} className='row-start-1 col-span-1'>
                <Image alt="banner" src="/images/banner-samsung5.webp" width={800} height={600} quality={100} className='w-full rounded-lg' />
            </Link>
            <Link href={"/shop?q=سامسونگ"} className='row-start-1 col-span-1'>
                <Image alt="banner" src="/images/banner-samsung6.webp" width={800} height={600} quality={100} className='w-full rounded-lg' />
            </Link>
        </div>
    )
}

export default Intro