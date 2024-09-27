"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function Form() {
  const notifySuccess = () => toast.success("ورود با موفقیت انجام شد .");

  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const router = useRouter();

  const [showPass, setShowPass] = useState(false);

  async function registerHandler() {
    if (form.password) {
      notifySuccess();
      router.replace("/");
    }
    setIsErrorPassword(true);
  }

  return (
    <div className="flex flex-col gap-2 items-start w-96 border-gray border-1 rounded-md p-8 max-sm:w-80 max-sm:p-6">
      <h1 className="font-medium text-xl mb-4">ورود | ثبت نام</h1>
      {
        !showPass &&
        <>
          <p className='text-sm text-start'>
            سلام!
          </p>
          <p className='text-sm text-start mb-3'>
            لطفا ایمیل خود را وارد کنید
          </p>
        </>
      }
      {
        !showPass ?
          <>
            <input value={form.email} placeholder='ایمیل' onChange={(e) => setForm((form) => ({ ...form, email: e.target.value }))} required type="email" className={`border-1 ${isErrorEmail ? "border-red" : "border-gray"} bg-white rounded-md p-2 w-full focus:outline-none font-normal`} />
            <p className='text-[10px] text-red h-4'>{isErrorEmail && "لطفا این قسمت را صحیح وارد نمایید"}</p>
          </>
          :
          <>
            <input value={form.password} placeholder='رمز عبور' onChange={(e) => setForm((form) => ({ ...form, password: e.target.value }))} required type="password" className={`border-1 ${isErrorPassword ? "border-red" : "border-gray"} bg-white rounded-md p-2 w-full focus:outline-none font-normal`} />
            <p className='text-[10px] text-red h-4'>{isErrorPassword && "لطفا یک رمز عبور وارد نمایید"}</p>
          </>
      }
      {showPass ?
        <button onClick={registerHandler} className='w-full rounded-lg bg-red text-white text-sm py-3 mt-6 mb-2'>تایید</button >
        :
        <button onClick={() => {
          if (form.email) {
            setShowPass((state) => !state);
          }
          setIsErrorEmail(true);
        }} className='w-full rounded-lg bg-red text-white text-sm py-3 mt-6 mb-2'>ورود</button >
      }
      <p className='text-[10px] text-center'>
        ورود شما به معنای پذیرش شرایط موبایل‌شاپ و قوانین حریم ‌خصوصی است
      </p>
    </div>
  )
}
