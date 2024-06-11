'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './brands.css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { HiOutlineFire } from "react-icons/hi";

function Brands() {
    return (
        <div className='w-full flex flex-col rounded-lg border-gray border-1 p-4 max-sm:p-2'>
            <div className='flex flex-row items-center justify-center'>
                <div className='flex flex-row items-center gap-2'>
                    <HiOutlineFire size={32} className="text-yellow" />
                    <p className='font-semibold text-2xl'>بهترین برند ها</p>
                </div>
            </div>
            <Swiper
                slidesPerView={4}
                loop={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]} className="mySwiper2">
                <SwiperSlide>
                    <Image alt="brand" src="/images/brand1.png" width={500} height={240} quality={100} className='rounded-md w-fit h-16' ></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt="brand" src="/images/brand2.png" width={500} height={240} quality={100} className='rounded-md w-fit h-16' ></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt="brand" src="/images/brand3.png" width={500} height={240} quality={100} className='rounded-md w-fit h-10' ></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt="brand" src="/images/brand4.png" width={500} height={240} quality={100} className='rounded-md w-fit h-16' ></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt="brand" src="/images/brand5.png" width={500} height={240} quality={100} className='rounded-md w-fit h-16' ></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt="brand" src="/images/brand6.png" width={500} height={240} quality={100} className='rounded-md w-fit h-16' ></Image>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Brands