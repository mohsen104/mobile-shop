'use client'
import Image from "next/image";

export default function Error() {
    return (
        <div className="flex flex-row items-center justify-center max-sm:px-4 max-sm:flex-col">
            <Image src="/images/error.jpg" width={2000} height={2000} className="h-[50vh] w-fit" />
            <div className="mr-5 max-sm:mr-0 max-sm:mt-5 max-sm:items-center flex flex-col gap-2 items-start">
                <h1 className="font-medium text-xl">خطایی از سمت سرور رخ داده!</h1>
                <p className="border-b-1 border-b-green text-green text-sm">لطفا شکیبا باشید</p>
            </div>
        </div>
    )
};
