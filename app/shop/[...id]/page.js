import React from 'react'
import data from '@/data/mobile.json'
import Image from 'next/image';
import Breadcrump from '@/components/modules/Breadcrump';
import { IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5';
import { VscSymbolProperty } from "react-icons/vsc";
import { RiDiscountPercentLine } from 'react-icons/ri';
import { CgCheckO } from "react-icons/cg";
import { BsShopWindow } from "react-icons/bs";
import Products from '@/components/templates/Home/Products';

export function generateMetadata({ params }) {
    const el = data.find((item) => item.id == params.id)
    return {
        title: el.title,
        description: el.desc
    }
}

function page({ params }) {
    const el = data.find((item) => item.id == params.id);
    const dataRelation = data.filter((item) => {
        if (item.brand == el.brand && item.id != el.id) return item;
    })
    return (
        <div className='container flex flex-col gap-8 max-sm:px-4'>
            <Breadcrump level={el.brand} />
            <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-6'>
                <Image data-aos="zoom-in" alt="image" src={`/images/${el.id}.webp`} width={480} height={480} quality={100} />
                <div data-aos="zoom-in" className='flex flex-col gap-4'>
                    <p className='leading-loose font-semibold'>{el.title}</p>
                    <div className='flex flex-row-reverse items-center text-yellow border-b-1 border-b-gray pb-4'>
                        {
                            new Array(Math.floor(el.rate)).fill(undefined).map((el,index) => (
                                <IoStar key={index} />
                            ))
                        }
                        {
                            el.rate - Math.floor(el.rate) !== 0
                                ? <IoStarHalf />
                                : <IoStarOutline />
                        }
                        {
                            new Array(4 - Math.floor(el.rate)).fill(undefined).map((el,index) => (
                                <IoStarOutline key={index} />
                            ))
                        }
                        <p className='ml-2 mt-1 text-black text-sm'>{el.rate}</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row items-center gap-2 mb-2'>
                            <VscSymbolProperty size={20} className='text-red' />
                            <p className='font-bold'>ویژگی ها</p>
                        </div>
                        <div className='flex flex-col gap-2.5'>
                            {
                                el.specifications.map((q,index) => (
                                    <div key={index} className='p-1.5 rounded-lg bg-gray flex flex-col gap-1'>
                                        <p className='text-[12px] text-black opacity-50'>{q.question}</p>
                                        <p className='font-semibold'>{q.answer}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" className='flex flex-col gap-6'>
                    <div className='flex flex-col rounded-lg bg-gray px-4 py-8 h-fit'>
                        <div className='flex flex-col items-start gap-2'>
                            <p className='font-bold text-lg'>فروشنده</p>
                            <div className='flex flex-row items-center gap-4'>
                                <BsShopWindow size={20} className='text-green' />
                                <p className='font-medium'>پایاگستر شهر</p>
                                <p className='text-sm text-blue'>متخب</p>
                            </div>
                            <p className='text-sm opacity-50 mr-9'>
                                ۸۲% رضایت از کالا عملکرد عالی
                            </p>
                        </div>
                        <span className='w-full h-[1px] bg-black opacity-10 mt-2 mb-4'></span>
                        <div className='flex flex-row items-center justify-between'>
                            {
                                el.discount !== 0
                                    ?
                                    <div className='bg-red flex flex-row items-center gap-1 rounded-full w-fit px-2 py-0.5 text-white'>

                                        <RiDiscountPercentLine size={20} />
                                        {el.discount}
                                    </div>
                                    :
                                    <div></div>
                            }
                            <div className='flex flex-row items-center justify-end gap-1 mt-2 font-semibold'>
                                {
                                    el.discount !== 0
                                        ?
                                        <div className='flex flex-row items-center'>
                                            <del className='ml-2 text-sm opacity-50'>{new Intl.NumberFormat().format(el.price)}</del>
                                            <p>{new Intl.NumberFormat().format(el.price - ((el.price * el.discount) / 100))}</p>
                                        </div>
                                        :
                                        <p>{new Intl.NumberFormat().format(el.price)}</p>
                                }
                                <p className='text-sm'>تومان</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-4 my-4'>
                            <CgCheckO size={20} className='text-blue' />
                            <p className='text-sm'>گارانتی ۱۸ ماهه مدیا پردازش</p>
                        </div>
                        <button className='w-full rounded-lg bg-red text-white text-sm py-3'>افزودن به سبد خرید</button>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full gap-2 text-center py-4 px-6 border-dashed border-blue border-2 bg-blue/10 rounded-lg'>
                        <p className='text-blue'>لینک کوتاه</p>
                        <p className='text-blue font-medium'>mobile-shop-rust.vercel.app/?p={el.id}</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start'>
                <p className='font-bold text-lg'>توضیحات</p>
                <span className='w-1/12 h-[1px] bg-red mt-2 mb-4'></span>
                <p className='text-sm leading-loose'>{el.desc}</p>
            </div>
            <div className='flex flex-col items-start'>
                <p className='font-bold text-lg'>محصولات مرتبط</p>
                <span className='w-1/12 h-[1px] bg-red mt-2 mb-4'></span>
                <div className='w-full flex flex-col gap-10'>
                    <Products data={dataRelation} />
                </div>
            </div>
        </div>
    )
}

export default page