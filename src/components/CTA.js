import Image from "next/image";
import Link from "next/link";
import Animate from "./Animate";

const CTA = ()=>{
    return(
        <section className='py-24 bg-secondary relative '>
            <div className='absolute inset-0 -z-0 lg:h-full'>
                <Image src="/cta.jpg" fill
                    className="absolute w-full h-full object-cover object-bottom"
                />
                <div className="absolute w-full h-full bg-gray-900/50"></div>
            </div>
            <div className='wrapper'>
                <div className='relative space-y-16 w-full sm:w-3/4 lg:w-1/2 max-w-prose mx-auto text-center'>
                <div className='mx-auto space-y-8'>
                    <Animate>
                    <h2 className='section-heading'>Transform Your Vision into Reality</h2>
                    </Animate>
                    <Animate delay={0.1}>
                    <p className='text-white'>Our experienced construction team is ready to turn your vision into a reality. We understand that building a new home or commercial space can be an exciting but daunting process. That&apos;s why we offer a free consultation to discuss your needs and provide personalized solutions that fit your budget and timeline.</p>
                    </Animate>
                </div>
                <Animate delay={0.2}>
                    <Link href="/contact-us" className='btn-primary inline-block'>Get a quote</Link>
                </Animate>
                </div>
            </div>
        </section>
    );
}

export default CTA;