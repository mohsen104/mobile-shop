import Link from 'next/link'
import React from 'react'

function Breadcrump({ level }) {
    return (
        <div className='flex flex-row items-center justify-start gap-2'>
            <Link href="/"><p>صفحه اصلی</p></Link>
            <p>/</p>
            {
                level == "shop"
                    ?
                    <p className='text-blue'>فروشگاه</p>
                    :
                    <>
                        <Link href="/shop"><p>فروشگاه</p></Link>
                        <p>/</p>
                        <Link href={`/shop?q=${level}`}><p className='text-blue'>[ {level} ]</p></Link>
                    </>
            }
        </div>
    )
}

export default Breadcrump