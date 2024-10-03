'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './header.css';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

function Header() {
    return (
        <Swiper
            lazy="true"
            style={{
                "--swiper-pagination-bullet-width": "8px",
                "--swiper-pagination-bullet-height": "8px",
                "--swiper-pagination-color": "#3572EF",
                "--swiper-pagination-bullet-inactive-color": "#3572EF",
                "--swiper-pagination-bullet-inactive-opacity": "0.1",
            }}
            spaceBetween={15}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={true} modules={[Autoplay, Pagination]} className="mySwiper">
            <SwiperSlide className='cursor-pointer'>
                <Image alt="banner" src="/images/banner-samsung2.webp" width={2880} height={600} className='rounded-md' ></Image>
            </SwiperSlide>
            <SwiperSlide className='cursor-pointer'>
                <Image alt="banner" src="/images/banner-samsung3.webp" width={2880} height={600} className='rounded-md' ></Image>
            </SwiperSlide>
            <SwiperSlide className='cursor-pointer'>
                <Image alt="banner" src="/images/banner-samsung7.webp" width={2880} height={600} className='rounded-md' ></Image>
            </SwiperSlide>
        </Swiper>
    )
}

export default Header