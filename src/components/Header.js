import Link from "next/link";
import Image from "next/image";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Animate from "./Animate";

const navigation = [
    {
        name: "Home",
        href: '/'
    },
    {
        name: "Services",
        href: '/services'
    },
    {
        name: "Showcase",
        href: '/showcase'
    },
    {
        name: "About",
        href: '/about'
    }
]

const Header = ({blok})=>{
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return(
        <header className="wrapper py-4">
            <nav className="flex justify-between">
                <Link href={"/"}>
                    <Image src={"/logo.svg"} width={54} height={54} className="h-12 w-12"></Image>
                </Link>
                <div className="flex md:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden md:flex items-center gap-6 text-white tracking-wide font-light">
                    {navigation.map((elem, i) => (
                        <Animate delay={i*0.1} key={i}>
                            <Link href={elem.href} key={i}
                                className="transition duration-150 hover:text-primary">
                                {elem.name}
                            </Link>
                        </Animate>
                    ))}
                    <Animate delay={navigation.length * 0.1}>
                        <Link href={"contact"}
                            className="py-3 px-8 bg-primary text-white flex justify-center items-center gap-2 hover:shadow-md"
                        >
                            Get a quote
                        </Link>
                    </Animate>
                </div>
            </nav>

            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-4 py-6 md:hidden">
                    <div className="flex items-center justify-between">
                        <Link href={"/"}>
                            <Image src={"/logo.svg"} width={54} height={54} className="h-12 w-12"></Image>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-secondary">
                        <div className="flex flex-col gap-2 py-6 text-secondary">
                            {navigation.map((elem, i) => (
                                <Link href={elem.href} key={i}
                                    className="transition duration-150 hover:text-primary">
                                    {elem.name}
                                </Link>
                            ))}
                        </div>
                        <div className="py-6">
                            <Link href={"/contact"}
                                className="py-3 px-8 bg-primary text-white flex justify-center items-center gap-2 hover:shadow-md"
                            >
                                Get a quote
                            </Link>
                        </div>
                    </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}

export default Header;