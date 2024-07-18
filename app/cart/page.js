"use client"
import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import data from '@/data/mobile.json'
import RowCart from '@/components/modules/RowCart';
import { toast } from 'react-toastify';
import discount from '@/data/discount.json'
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

function page() {
  const notifyError = () => toast.error("کد تخفیف اشتباه میباشد .");
  const notifySuccess = () => toast.success("با موفقیت اعمال شد .");

  const { selectedItems, itemsCounter, totalPrice, totalDiscount } = useSelector(store => store.cart);

  const [items, setItems] = useState(selectedItems);
  const [totalCost, setTotalCost] = useState(totalPrice);
  const [totalCostDiscount, setTotalCostDiscount] = useState(totalDiscount);

  const [input, setInput] = useState();

  const [disable, setDisable] = useState(false);

  useEffect(() => {
    setItems(selectedItems)
    setTotalCost(totalPrice)
    setTotalCostDiscount(totalDiscount)
  }, [selectedItems])

  function checkDiscount() {
    let percent;
    const isTrust = discount.some(el => {
      if (el.code == input && el.expired >= new Date().getFullYear()) {
        percent = el.percent;
        return el;
      }
    });
    if (isTrust) {
      setTotalCostDiscount(totalCostDiscount * (100 - percent) / 100);
      notifySuccess();
      setDisable(true);
    } else {
      notifyError();
    }
  }

  return (
    <div className="container max-sm:px-4 grid grid-cols-5 gap-10 max-sm:grid-cols-1">
      {
        items?.length == 0
          ?
          <div className="col-span-5 flex flex-row items-center justify-center max-sm:px-4 max-sm:flex-col">
            <Image src="/images/cart.jpg" width={626} height={626} className="h-[50vh] w-fit" />
            <div className="mr-5 max-sm:mr-0 max-sm:mt-5 max-sm:items-center flex flex-col gap-2 items-start">
              <h1 className="font-medium text-xl">سبد خرید شما خالی میباشد!</h1>
              <Link href="/shop" className="border-b-1 border-b-blue text-blue text-sm">رفتن به فروشگاه</Link>
            </div>
          </div>
          :
          <>
            <div className="col-span-3 flex flex-col gap-4 max-sm:col-span-1">
              <p>سبد خرید شما</p>
              {
                items?.map(item => (
                  <RowCart key={item.id} {...item} />
                ))
              }
            </div>
            <div className="col-span-2 flex flex-col border-1 border-gray rounded-lg h-fit sticky top-4 max-sm:col-span-1">
              <div className='flex flex-col px-4 py-8 h-fit'>
                <div className="flex flex-row items-center justify-between">
                  <p>تعداد کالا ها</p>
                  <p>({itemsCounter})</p>
                </div>
                <div className="flex flex-row items-center justify-between my-4">
                  <p>مجموع سبد خرید</p>
                  <div className="flex flex-row items-center gap-1">{new Intl.NumberFormat().format(totalCost)} <p className='text-sm'>تومان</p></div>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <p>مجموع سبد خرید (با تخفیف)</p>
                  <div className="flex flex-row items-center gap-1">{new Intl.NumberFormat().format(totalCostDiscount)} <p className='text-sm'>تومان</p></div>
                </div>
                <span className='w-full h-[1px] bg-black opacity-10 mt-2 mb-4'></span>
                <button className="w-full rounded-lg bg-red text-white text-sm py-3">تکمیل سفارش</button>
              </div>
              <div className="rounded-b-lg bg-gray flex flex-col items-start px-2.5 py-3.5 w-full">
                <p className="text-sm text-blue font-semibold">کد تخفیف دارید ؟</p>
                <input disabled={disable} value={input} onChange={(e) => setInput(e.target.value)} type="text" className="text-center w-full bg-transparent mt-1 mb-2 focus:outline-none p-1 rounded-md" />
                {
                  !disable &&
                  <button disabled={disable} className="w-full rounded-lg bg-blue text-white text-sm py-3" onClick={() => checkDiscount()}>تایید</button>
                }
              </div>
            </div>
          </>
      }
    </div>
  )
}

export default page