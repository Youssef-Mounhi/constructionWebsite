import { useState, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlayIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Header from "./Header";
import { Dialog, Transition } from "@headlessui/react";
import Animate from "./Animate";

const Hero = () =>{

    let [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section
                className="relative min-h-screen w-full flex flex-col justify-center "
            >
                <Header />
                <div className="absolute inset-0 h-full w-full -z-10">
                    <Image src="/herobg.jpg" alt="Construction company" fill
                        className="absolute inset-0 bg-cover h-full w-full"
                    />
                    <div className="absolute w-full h-full bg-gray-800/50"></div>
                </div>
                <div className="wrapper flex-1 justify-center flex flex-col gap-12">
                    <div className="flex flex-col gap-6 justify-center max-w-screen-lg">
                        <Animate>
                            <h1 className="hero-heading">
                                Building Excellence: Quality Construction Services
                            </h1>
                        </Animate>
                        <Animate delay={0.2}>
                            <p className="leading-7 text-white max-w-prose">
                            Experience the difference with our top-notch construction services. From residential to commercial projects, our team of experts deliver quality, safety, and sustainability in every build. Browse our portfolio and see for yourself.
                            </p>
                        </Animate>
                    </div>

                    <Animate delay={0.4}>
                    <div className="flex flex-col sm:flex-row gap-4">
                        
                        <Link href={"/contact"}
                            className="btn-primary"
                        >
                            Get a quote
                        </Link>
                        <button className="btn-secondary flex justify-center items-center gap-2"
                            onClick={()=>setIsOpen(true)}
                        >
                            Watch Demo <PlayIcon className="h-6 w-6"/>
                        </button>
                    </div>
                    </Animate>
                </div>
            </section>

            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
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
                            <Dialog.Panel className="relative transform overflow-hidden bg-secondary text-left shadow-xl transition-all sm:mx-4 md:mx-0 sm:my-8 sm:w-full sm:max-w-screen-lg">
                                
                                <video autoPlay controls>
                                    <source src="/herovideo.mp4" />
                                </video>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}
 
export default Hero;