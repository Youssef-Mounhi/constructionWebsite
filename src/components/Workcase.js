import Image from "next/image";
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const images = ["/workcase/modern/1.jpg", "/workcase/modern/2.jpg", "/workcase/modern/3.jpg", "/workcase/modern/4.jpg"]

function Workcase({title}){
    const [open, setOpen] = useState(false);
    const [swiper, setSwiper] = useState(null);
    const [activeSlide, setActiveSlide] = useState(0)

    const updateSwiper = i =>{
        if(swiper){
            swiper.slideTo(i);
        }
    }

    return(
        <>
            <div className="relative h-96 group cursor-pointer" onClick={()=>setOpen(true)}>
                <div className="absolute inset-0 h-full w-full">
                    <Image src="/house.jpg" width={720} height={720}
                        className="object-cover h-full w-full"
                    />
                    <div className="absolute top-0 left-0 p-4 bg-primary text-white font-bold tracking-wide">
                        <p>{title}</p>
                    </div>
                    <div className="absolute inset-0 w-full h-full bg-gray-800/40 transition opacity-0 group-hover:opacity-100">
                        <div className="flex flex-col gap-2 h-full justify-center items-center text-white font-semibold tracking-wide">
                            <span>View more</span>
                            <ArrowRightIcon className="h-6 w-6"/>
                        </div>
                    </div>
                </div>
            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                        <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                        <Dialog.Panel className="relative transform overflow-hidden pb-4 bg-white text-left shadow-xl transition-all sm:mx-4 md:mx-0 sm:my-8 sm:w-full sm:max-w-screen-lg">
                            <button
                                type="button"
                                className="flex w-full justify-end px-8 py-4 text-secondary bg-primary outline-none"
                                onClick={() => setOpen(false)}
                            >
                                <XMarkIcon className="w-6 h-6"/>
                            </button>
                            <div className="bg-white px-4 pt-5 pb-4 sm:px-6 sm:py-8">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 space-y-8 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-secondary">
                                            Modern House
                                        </Dialog.Title>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full">
                                            <div className="order-last grid grid-cols-3 gap-2 place-content-start">
                                                {images.map((elem, i)=>(
                                                    <button className={`h-24 col-span-1 max-w-full ring-primary ${activeSlide == i ? "ring-1" : "ring-0"}`} key={i}
                                                        onClick={()=>updateSwiper(i)}
                                                    >
                                                        <Image src={elem}  width={220} height={240}
                                                            className="object-cover h-full w-full select-none"
                                                        />
                                                    </button>
                                                ))}
                                            </div>
                                            <Swiper
                                                navigation={true}
                                                modules={[Navigation]}
                                                onSwiper={(swiper)=>setSwiper(swiper) && setActiveSlide(swiper.activeIndex)}
                                                onSlideChange={(swiper)=>setActiveSlide(swiper.activeIndex)}
                                                className="mySwiper max-w-full h-96 md:col-span-2"
                                            >

                                                {images.map((elem, i)=>(
                                                    <SwiperSlide key={i}>
                                                        <Image src={elem} width={720} height={720}
                                                            className="w-full h-full object-cover select-none"
                                                        />
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                        </Transition.Child>
                    </div>
                    </div>
                </Dialog>
                </Transition.Root>
        </>
    );
}
export default Workcase;