import { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const Testimonial = () => {
    const [swiperRef, setSwiperRef] = useState();

    const handleLeftClick = useCallback(() => {
        if (!swiperRef) return;
        swiperRef.slidePrev();
    }, [swiperRef]);

    const handleRightClick = useCallback(() => {
        if (!swiperRef) return;
        swiperRef.slideNext();
    }, [swiperRef]);
    
    return (
      <div className='flex flex-col md:flex-row gap-6 lg:w-4/5 mx-auto'>
        <button onClick={handleLeftClick} className='hidden md:block rounded-full self-center bg-gray-500/40 p-2'>
            <ArrowLeftIcon className='h-6 w-6 text-primary'/>
        </button>
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            onSwiper={setSwiperRef}
            speed={600}
            className="w-full"
        >
            <SwiperSlide className='bg-gray-900/60'>
                <div className='grid grid-cols-3 lg:min-h-[75vh]'>
                    <div className='col-span-3 lg:col-span-1 max-h-72 md:max-h-full'>
                        <Image src="/testimonial1.png" width={480} height={620} className="h-full w-full object-cover"/>
                    </div>
                    <div className='col-span-3 lg:col-span-2 text-white p-4 md:p-8 flex flex-col justify-between gap-12'>
                        <div className='-space-y-3'>
                            <span className='text-6xl text-white/60 block'>“</span>
                            <p className='xl:text-lg tracking-wide max-w-prose'>We recently worked with Construct on a home remodel and were extremely impressed with their professionalism and attention to detail. Their team was always responsive and easy to work with, and the final product exceeded our expectations. We would highly recommend them to anyone looking for a top-notch construction company.</p>
                        </div>
                        <div>
                            <h3 className='text-xl lg:text-3xl'>Ruveyda Crutzen</h3>
                            <p className='text-sm text-white/60'>Project manager</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='bg-gray-900/60'>
                <div className='grid grid-cols-3 lg:min-h-[75vh]'>
                    <div className='col-span-3 lg:col-span-1 max-h-72 md:max-h-full'>
                        <Image src="/testimonial2.png" width={480} height={620} className="h-full w-full object-cover"/>
                    </div>
                    <div className='col-span-3 lg:col-span-2 text-white p-4 md:p-8 flex flex-col justify-between gap-12'>
                        <div className='-space-y-3'>
                            <span className='text-6xl text-white/60 block'>“</span>
                            <p className='xl:text-lg tracking-wide max-w-prose'>We recently worked with Construct on a home remodel and were extremely impressed with their professionalism and attention to detail. Their team was always responsive and easy to work with, and the final product exceeded our expectations. We would highly recommend them to anyone looking for a top-notch construction company.</p>
                        </div>
                        <div>
                            <h3 className='text-xl lg:text-3xl'>Ruveyda Crutzen</h3>
                            <p className='text-sm text-white/60'>Project manager</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='bg-gray-900/60'>
                <div className='grid grid-cols-3 lg:min-h-[75vh]'>
                    <div className='col-span-3 lg:col-span-1 max-h-72 md:max-h-full'>
                        <Image src="/house.jpg" width={480} height={620} className="h-full w-full object-cover"/>
                    </div>
                    <div className='col-span-3 lg:col-span-2 text-white p-4 md:p-8 flex flex-col justify-between gap-12'>
                        <div className='-space-y-3'>
                            <span className='text-6xl text-white/60 block'>“</span>
                            <p className='xl:text-lg tracking-wide max-w-prose'>We recently worked with Construct on a home remodel and were extremely impressed with their professionalism and attention to detail. Their team was always responsive and easy to work with, and the final product exceeded our expectations. We would highly recommend them to anyone looking for a top-notch construction company.</p>
                        </div>
                        <div>
                            <h3 className='text-xl lg:text-3xl'>Ruveyda Crutzen</h3>
                            <p className='text-sm text-white/60'>Project manager</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        <button onClick={handleRightClick} className='hidden md:block rounded-full self-center bg-gray-500/40 p-2'>
            <ArrowRightIcon className='h-6 w-6 text-primary'/>
        </button>
        <div className='flex gap-4 justify-center'>
            <button onClick={handleLeftClick} className='md:hidden rounded-full self-center bg-gray-500/40 p-2'>
                <ArrowLeftIcon className='h-6 w-6 text-primary'/>
            </button>
            <button onClick={handleRightClick} className='md:hidden rounded-full self-center bg-gray-500/40 p-2'>
                <ArrowRightIcon className='h-6 w-6 text-primary'/>
            </button>
        </div>
      </div>
    );
};



export default Testimonial;