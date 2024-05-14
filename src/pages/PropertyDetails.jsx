import React from 'react'
// Import Swiper React components
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// Import components
import Image from "../components/ui/Image"
import Button from "../components/ui/Button"
import { Link } from "react-router-dom";

function PropertyDetails() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="grid grid-cols-1 p-8 propertyDetails-container gap-4 border-red-500">
            <div className="grid grid-cols-8 text-white">
                <div className="col-span-5 flex flex-col">
                    <p>نام ملک</p>
                    <p className='text-gray-500'>قیمت : 150,000,000,000 تومان</p>
                </div>
                <div className="col-span-3 flex text-sm justify-between">
                    <span className='bg-blue-500 rounded-3xl h-fit p-2'>Number of tokens: 80000 Tokens</span>
                    <span className='bg-blue-500 rounded-3xl h-fit p-2  '>Token Price: 45,000 Tomans</span>
                </div>
            </div>
            <div className=' grid grid-cols-4 gap-x-4 gap-y-8 '>
                {/* images and carousel */}
                <div className='border border-white col-span-4 h-72'>

                </div>
                <div className='grid grid-cols-1 gap-2 col-span-2 text-white '>
                    <p>اسناد</p>
                    <Carousel className='col-span-1 w-full h-72' responsive={responsive}>
                        <Image url={'/properties/property-card.jpg'} imgClass='w-full h-full rounded-lg ' />
                        <Image url={'/properties/sample-image.png'} imgClass='w-full h-full rounded-lg ' />
                        <Image url={'/properties/property-card.jpg'} imgClass='w-full h-full rounded-lg ' />
                        <Image url={'/properties/sample-image.png'} imgClass='w-full h-full rounded-lg ' />
                    </Carousel>
                </div>
                <div className='grid grid-cols-1 gap-2 col-span-2 text-white '>
                    <p>اسناد</p>
                    <Carousel className='col-span-1 w-full h-72' responsive={responsive}>
                        <Image url={'/properties/properties-documents-placeholder.png'} imgClass='w-full h-full rounded-lg ' />
                        <Image url={'/properties/properties-documents-placeholder.png'} imgClass='w-full h-full rounded-lg ' />
                        <Image url={'/properties/properties-documents-placeholder.png'} imgClass='w-full h-full rounded-lg ' />
                        <Image url={'/properties/properties-documents-placeholder.png'} imgClass='w-full h-full rounded-lg ' />
                    </Carousel>
                </div>
                {/* BluePrint */}
                <div className=' grid grid-cols-1 gap-2 col-span-2 text-white'>
                    <p className='col-span-1'>طرح ملک  </p>
                    <div className="col-span-1  h-80">
                        <Image url={'/properties/blue-print.png '} imgClass='object-cover w-full h-full rounded-lg' />
                    </div>
                </div>
                {/* Main Photo */}
                <div className='grid grid-cols-1 gap-2 col-span-2 text-white'>
                    <p className='col-span-1'>عکس اصلی  </p>
                    <div className="col-span-1  h-80">
                        <Image url={'/properties/properties-gallery-placeholder.png'} imgClass='object-cover w-full h-full rounded-lg' />
                    </div>
                </div>
                {/* Insurance */}
                <div className='col-span-4 grid grid-cols-1  text-white'>
                    <p className='col-span-1'>اسناد بیمه  </p>
                    <div className="col-span-1 grid grid-cols-4  items-center ">
                        <Image url={'/properties/properties-documents-placeholder.png'} imgClass='col-span-1 rounded-lg' />
                        <Image url={'/properties/properties-documents-placeholder.png'} imgClass='col-span-1 rounded-lg' />
                        <Image url={'/properties/properties-documents-placeholder.png'} imgClass='col-span-1 rounded-lg' />
                        <Image url={'/properties/properties-documents-placeholder.png'} imgClass='col-span-1 rounded-lg' />
                    </div>
                </div>
                {/* Deatil Info */}
                <div className=' col-span-4'>
                    <div className="h-full w-full grid grid-cols-3 gap-4">
                        <div className="h-full w-full col-span-1 text-white flex flex-col gap-6 justify-center ">
                            <p>متراژ : 180 متر</p>
                            <p>تعداد طبقات : 6 طبقه</p>
                            <p>طبقه : طبقه 6</p>
                            <p>نوع نمای ساختمان : نمای قدیمی ایرانی</p>
                            <p>انبار : بله</p>
                            <p>طبقه اتاق‌ها : سرامیک</p>
                            <p>تعداد سرویس‌ها : 8 سرویس بهداشتی</p>
                        </div>
                        <div className="h-full w-full col-span-1 text-white flex flex-col gap-6 justify-center ">
                            <p>تعداد اتاق‌ها : 6 اتاق</p>
                            <p>تعداد واحدها : 52 واحد</p>
                            <p>نوع مدرک : مدرک رایگان</p>
                            <p>آسانسور : بله</p>
                            <p>بالکن : خیر</p>
                            <p>کاغذ دیواری : خیر</p>
                            <p>سیستم سرمایشی: بله</p>
                        </div>
                        <div className="h-full w-full col-span-1 text-white flex flex-col gap-6 justify-center ">
                            <p>سن ساختمان : 25 سال</p>
                            <p>تعداد واحد در هر طبقه : 2 واحد</p>
                            <p> جهت ساختمان : جنوبی</p>
                            <p>پارکینگ : بله </p>
                            <p>طبقه اتاق نشیمن : پارکت</p>
                            <p>رنگ آمیزی : بله</p>
                            <p>سیستم گرمایشی : بله</p>
                        </div>
                    </div>
                </div>
                {/* address and button */}
                <div className=' col-span-4 text-white flex flex-col gap-4'>
                    <p>آدرس : ایران، تهران، تهران، جردن، سعیدی، پلاک 39</p>
                    <p>گزینه‌های دیگر : این واحد دارای بسیاری از گزینه‌های دیگر است که نیازمند بازدید شماست تا درک کنید که چقدر ارزشمند و قابل استفاده در زندگی روزمره است، فقط بیایید اینجا را ببینید و خودتان را متقاعد کنید.</p>
                    <Link to='/dashboard/properties/1111#'>
                        <Button title={'سرمایه گذاری'} btnClass="w-full p-2 button rounded-xl text-md hover:cursor-pointer hover:bg-indgo-400" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PropertyDetails