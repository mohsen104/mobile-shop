import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-row items-center justify-center max-sm:px-4 max-sm:flex-col">
            <Image src="/images/not-found.avif" width={626} height={626} className="h-[400px] w-fit" />
            <div className="mr-5 max-sm:mr-0 max-sm:mt-5 max-sm:items-center flex flex-col gap-2 items-start">
                <h1 className="font-medium text-xl">صفحه مورد نظر یافت نشد !</h1>
                <Link href="/" className="border-b-1 border-b-blue text-blue text-sm">بازگشت به صفحه اصلی</Link>
            </div>
        </div>
    )
};
