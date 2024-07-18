import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiDiscountPercentLine } from 'react-icons/ri'
import RowCartDelete from './RowCartDelete'
import { useSelector } from 'react-redux'

function RowCart(props) {
    const selector = useSelector(store => store.cart);

    const item = selector.selectedItems.find(i => i.id === props.id);
    const quantity = item?.quantity ? item.quantity : 0;

    return (
        <>
            {
                !!quantity &&
                <div className="flex flex-row gap-3 justify-between px-2.5 py-1.5 rounded-lg border-1 border-gray">
                    <Link href={`/shop/${props.id}`}><Image alt="image" src={`/images/${props.id}.webp`} width={120} height={120} /></Link>
                    <div className="flex flex-col items-start text-sm w-full gap-1.5">
                        <Link href={`/shop/${props.id}`}><p className='leading-loose font-semibold line-clamp-2'>{props.title}</p></Link>
                        <div className='flex flex-row items-center justify-between gap-3'>
                            {
                                props.discount !== 0
                                    ?
                                    <div className='bg-red flex flex-row items-center gap-1 rounded-full w-fit px-2 py-0.5 text-white'>

                                        <RiDiscountPercentLine size={20} />
                                        {props.discount}
                                    </div>
                                    :
                                    <div></div>
                            }
                            <div className='flex flex-row items-center justify-end gap-1 mt-2 font-semibold'>
                                {
                                    props.discount !== 0
                                        ?
                                        <div className='flex flex-row items-center'>
                                            <del className='ml-2 text-sm opacity-50'>{new Intl.NumberFormat().format(props.price)}</del>
                                            <p>{new Intl.NumberFormat().format(props.price - ((props.price * props.discount) / 100))}</p>
                                        </div>
                                        :
                                        <p>{new Intl.NumberFormat().format(props.price)}</p>
                                }
                                <p className='text-sm'>تومان</p>
                            </div>
                        </div>
                        <RowCartDelete data={props} />
                    </div>
                </div>
            }
        </>
    )
}

export default RowCart