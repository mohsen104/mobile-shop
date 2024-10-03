import Brands from "@/components/templates/Home/Brands";
import Header from "@/components/templates/Home/Header";
import SamungBanners from "@/components/templates/Home/SamungBanners";
import Products from "@/components/templates/Home/Products";
import SectionBrands from "@/components/templates/Home/SectionBrands";
import { AiOutlineProduct } from "react-icons/ai";
import Link from 'next/link';

export default async function Home() {
  const res = await fetch(process.env.PUBLIC_URL);
  const data = await res.json();
  const dataFinal = data.data.sort((a, b) => b.rate - a.rate).slice(0, 8);
  return (
    <div className="container flex flex-col gap-6 max-sm:px-4 max-sm:gap-5">
      <Header />
      <SectionBrands />
      <div className='w-full flex flex-col gap-10'>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-row items-center gap-2'>
            <AiOutlineProduct size={32} className="text-yellow" />
            <p className='font-semibold text-2xl'>پرفروش ترین ها</p>
          </div>
          <Link href="/shop"><p className='text-blue'>مشاهده همه</p></Link>
        </div>
        <Products data={dataFinal} />
      </div>
      <Brands />
      <SamungBanners />
    </div>
  );
}