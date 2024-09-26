import Link from 'next/link'
import React from 'react'

function Breadcrump({ level }) {
    return (
        <div className='flex flex-row items-center justify-start gap-2'>
            <Link href="/"><p className='text-blue'>صفحه اصلی</p></Link>
            <p>/</p>
            {
                level == "shop"
                    ?
                    <p className='text-black'>فروشگاه</p>
                    :
                    <>
                        <Link href="/shop"><p className='text-blue'>فروشگاه</p></Link>
                        <p>/</p>
                        <p className='text-black'>{level}</p>
                    </>
            }
        </div>
    )
}

export default Breadcrump