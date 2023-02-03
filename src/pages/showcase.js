import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Animate from "@/components/Animate";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Workcase from "@/components/Workcase";
import CTA from "@/components/CTA";

export default function Showcase(props){
    return(
        <>
            <div className="bg-secondary">
                <Header />
            </div>
            <main>
                <section className="bg-secondary">
                    <div className="wrapper py-12 md:py-24">
                            <div className="space-y-8 max-w-4xl md:mx-auto md:text-center">
                                <Animate delay={0.1}>
                                    <h1 className="hero-heading">Check Out Our Complete Work</h1>
                                </Animate>
                                <Animate delay={0.2}>
                                    <Link href="/contact" className="btn-primary inline-block">Contact us</Link>
                                </Animate>
                            </div>
                    </div>
                </section>

                <section>
                    <div className="wrapper">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Animate delay={0.1}>
                                <Workcase title="Modern House"/>
                            </Animate>
                            <Animate delay={0.2}>
                                <Workcase title="Modern House"/>
                            </Animate>
                            <Animate delay={0.3}>
                                <Workcase title="Modern House"/>
                            </Animate>
                            <Animate delay={0.4}>
                                <Workcase title="Modern House"/>
                            </Animate>
                        </div>
                    </div>
                </section>

                <CTA />
            </main>
            <Footer />
        </>
    );
}