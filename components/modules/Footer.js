import Image from 'next/image'
import { SiAparat, SiInstagram } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import React from 'react'
import Link from 'next/link';
import ToTop from './ToTop';

function Footer() {
    return (
        <div className='w-full flex flex-col border-t-1 border-gray container mt-6 max-sm:px-4'>
            <div className='flex flex-row items-center justify-between'>
                <Link href="/">
                    <Image alt='logo' src="/images/logo.svg" width={145} height={45} quality={100} className='py-5' />
                </Link>
                <ToTop />
            </div>

            <div className='flex flex-row items-center gap-4 text-sm opacity-80 max-sm:gap-2 max-sm:justify-between max-sm:mt-2'>
                <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
                <span className='h-6 bg-gray w-[1px]'></span>
                <p>۰۲۱-۹۱۰۰۰۱۰۰</p>
                <span className='h-6 bg-gray w-[1px]'></span>
                <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
            </div>

            <div className='flex flex-row max-sm:flex-col max-sm:gap-4 items-start justify-between pt-10'>
                <div className='flex flex-col items-start gap-2'>
                    <p className='font-semibold pb-4 max-sm:pb-1'>با موبایل‌شاپ</p>
                    <p className='opacity-60 text-sm'>اتاق خبر موبایل‌شاپ</p>
                    <p className='opacity-60 text-sm'>فروش در موبایل‌شاپ</p>
                    <p className='opacity-60 text-sm'>فرصت‌های شغلی</p>
                    <p className='opacity-60 text-sm'>گزارش تخلف در موبایل‌شاپ</p>
                    <p className='opacity-60 text-sm'>تماس با موبایل‌شاپ</p>
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <p className='font-semibold pb-4 max-sm:pb-1'>خدمات مشتریان</p>
                    <p className='opacity-60 text-sm'>پاسخ به پرسش‌های متداول</p>
                    <p className='opacity-60 text-sm'>رویه‌های بازگرداندن کالا</p>
                    <p className='opacity-60 text-sm'>شرایط استفاده</p>
                    <p className='opacity-60 text-sm'>حریم خصوصی</p>
                    <p className='opacity-60 text-sm'>گزارش باگ</p>
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <p className='font-semibold pb-4 max-sm:pb-1'>راهنمای خرید از موبایل‌شاپ</p>
                    <p className='opacity-60 text-sm'>نحوه ثبت سفارش</p>
                    <p className='opacity-60 text-sm'>رویه ارسال سفارش</p>
                    <p className='opacity-60 text-sm'>شیوه‌های پرداخت</p>
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <p className='font-semibold pb-4 max-sm:pb-1'>همراه ما باشید!</p>
                    <div className='flex flex-row items-center gap-5 opacity-40 text-sm'>
                        <SiInstagram size={32} />
                        <BsTwitterX size={32} />
                        <FaLinkedin size={32} />
                        <SiAparat size={32} />
                    </div>
                </div>
            </div>

            <div className='flex flex-row items-center gap-6 justify-end max-sm:mt-4'>
                <Image alt='namad1' src="/images/namad1.webp" width={150} height={150} quality={100} className='w-20' />
                <Image alt='namad3' src="/images/namad3.png" width={125} height={136} quality={100} className='w-20' />
            </div>

            <div className='py-5 flex items-center justify-center border-t-1 border-gray mt-5'>
                <p className='text-sm opacity-65 max-sm:text-center'>برای استفاده از مطالب موبایل‌شاپ، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین موبایل‌شاپ) است.</p>
            </div>
        </div>
    )
}

export default Footer