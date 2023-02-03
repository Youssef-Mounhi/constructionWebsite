import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Animate from "@/components/Animate";
import ContactForm from "@/components/ContactForm";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Showcase(props){
    return(
        <>
            <div className="bg-secondary">
                <Header />
            </div>
            <main>
                <section className="bg-secondary">
                    <div className="wrapper py-12 md:py-24">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div className="space-y-12">
                                    <Animate delay={0.1}>
                                        <h1 className="hero-heading">Get in Touch with Our Building Experts</h1>
                                    </Animate>
                                    <div className="flex flex-col gap-3">
                                        <Animate delay={0.2}>
                                            <a  href="https://goo.gl/maps/Sf1nKFQXecY4jj1AA" target="_blank" rel="noreferrer"
                                                className="flex gap-2 text-white items-center transition hover:text-primary">
                                                <MapPinIcon className="w-6 h-6"/>
                                                10 Maple St, Springfield, IL 62704
                                            </a>
                                        </Animate>

                                        <Animate delay={0.3}>
                                            <a href="tel:(217) 555-1212"
                                                className="flex gap-2 text-white items-center transition hover:text-primary">
                                                <PhoneIcon className="w-6 h-6"/>
                                                (217) 555-1212
                                            </a>
                                        </Animate>
                                        <Animate delay={0.4}>
                                            <a href="mailto:contact@construct.com"
                                                className="flex gap-2 text-white items-center transition hover:text-primary">
                                                <EnvelopeIcon className="w-6 h-6"/>
                                                contact@construct.com
                                            </a>
                                        </Animate>
                                    </div>
                                </div>
                                <Animate delay={0.2}>
                                    <div className="bg-white px-8 py-12 rounded-sm shadow-md">
                                        <ContactForm />
                                    </div>
                                </Animate>
                            </div>
                    </div>

                </section>
                
            </main>
            <Footer />
        </>
    );
}