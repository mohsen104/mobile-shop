import Image from 'next/image'
import React from 'react'
import { PiCaretDoubleUpBold } from "react-icons/pi";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import Link from 'next/link';

function Product(props) {
    return (
        <Link href={`/shop/${props.id}`} className='w-full flex flex-col items-center gap-2 p-4 transition-all hover:shadow-lg max-sm:p-2 max-sm:flex-row'>
            <Image alt="image" src={`/images/${props.id}.webp`} width={240} height={240} className="max-sm:w-32 max-sm:h-32" />
            <div className='flex flex-col gap-1 max-sm:gap-0'>
                <div className='bg-gray flex flex-row items-center gap-1 rounded-full w-fit px-2 py-0.5 max-sm:mb-1'>
                    <PiCaretDoubleUpBold className='text-green' />
                    <p className='text-[12px] text-black opacity-50 font-semibold'>ارسال رایگان</p>
                </div>
                <p className='font-medium text-sm leading-loose line-clamp-2'>{props.title}</p>
                <div className='flex flex-row-reverse items-center text-yellow'>
                    {
                        new Array(Math.floor(props.rate)).fill(undefined).map((el, index) => (
                            <IoStar key={index} />
                        ))
                    }
                    {
                        props.rate - Math.floor(props.rate) !== 0
                            ? <IoStarHalf />
                            : <IoStarOutline />
                    }
                    {
                        new Array(4 - Math.floor(props.rate)).fill(undefined).map((el, index) => (
                            <IoStarOutline key={index} />
                        ))
                    }
                    <p className='ml-2 mt-1 text-black text-sm'>{props.rate}</p>
                </div>
                <div className='flex flex-row-reverse items-center justify-between'>
                    <div className='flex flex-row items-center justify-end gap-1 mt-2 font-semibold'>
                        {
                            props.discount !== 0
                                ?
                                <div className='flex flex-row items-center'>
                                    <del className='ml-2 text-sm max-sm:text-xs text-slate'>{new Intl.NumberFormat().format(props.price)}</del>
                                    <p>{new Intl.NumberFormat().format(props.price - ((props.price * props.discount) / 100))}</p>
                                </div>
                                :
                                <p>{new Intl.NumberFormat().format(props.price)}</p>
                        }
                        <p className='text-sm max-sm:text-xs'>تومان</p>
                    </div>
                    {
                        props.discount !== 0
                            ?
                            <div className='bg-red flex flex-row items-center gap-1 rounded-full w-fit px-2 py-0.5 text-white max-sm:text-sm max-sm:px-1.5 max-sm:rounded-lg'>

                                <RiDiscountPercentLine size={20} />
                                {props.discount}
                            </div>
                            :
                            ""
                    }
                </div>
            </div>
        </Link>
    )
}

export default Product