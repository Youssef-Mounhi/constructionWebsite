import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import Animate from '@/components/Animate';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />

        <section className="bg-secondary py-8">
          <div className="wrapper">
            <div className="grid grid-cols-6 gap-6 place-items-center">
              <div className="col-span-6 md:col-span-3 space-y-2">
                <Animate delay={0}>
                  <p className="text-md leading-8 text-white">Yield optimization and risk tranching</p>
                </Animate>
                <Animate delay={0.2}>
                  <h2 className="section-heading">We provide a wide range of services to cover your needs perfectly.</h2>
                </Animate>
              </div>
              <div className="col-span-6 md:col-end-7 md:col-span-2 text-white">
                <Animate delay={0.4}>
                  <p>
                    Achieve capital efficiency with Idle&apos;s products: as a leading DeFi yield aggregator, Idle offers first-rate yield optimization and risk tranching strategies. Get the best yield by using, integrating or building on top of Idle’s products. Money should never sit still.
                  </p>
                </Animate>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-24 ">
              <Animate delay={0}>
                <div className='relative group h-full'>
                  <span className="absolute inset-0 border-2 border-dashed border-primary"></span>
                  <div className="h-full bg-secondary border-2 border-primary p-6 text-white grid gap-4 group-hover:shadow-lg transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-serif text-primary">Residential Construction</h3>
                    <p>We provide full-service construction services for new home builds, remodels, and additions. From design to completion, we work with you to create your dream home.</p>
                    <Link href={"/services"} className="btn-primary mt-6 self-end">
                      Learn more
                    </Link>
                  </div>
                </div>
              </Animate>
              
              <Animate delay={0.1}>
                <div className='relative group h-full'>
                  <span className="absolute inset-0 border-2 border-dashed border-primary"></span>
                  <div className="bg-secondary border-2 border-primary p-6 text-white grid gap-4 group-hover:shadow-lg transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-serif text-primary">Commercial Construction</h3>
                    <p>We specialize in building and remodeling commercial properties, including office buildings, retail spaces, and multi-unit residential buildings. We understand the unique needs of commercial construction and work to minimize disruption to your business during the construction process.</p>
                    <Link href={"/services"} className="btn-primary mt-6 self-end">
                      Learn more
                    </Link>
                  </div>
                </div>
              </Animate>

              <Animate delay={0.2}>
                <div className='relative group h-full'>
                  <span className="absolute inset-0 border-2 border-dashed border-primary"></span>
                  <div className="h-full bg-secondary border-2 border-primary p-6 text-white grid justify-start gap-4 group-hover:shadow-lg transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-serif text-primary">Industrial Construction</h3>
                    <p>We have experience in building and remodeling industrial facilities, including warehouses, factories, and distribution centers. We understand the unique requirements of industrial construction and work to minimize downtime and keep your business running smoothly.</p>
                    <Link href={"/services"} className="btn-primary mt-6 self-end">
                      Learn more
                    </Link>
                  </div>
                </div>
              </Animate>

              <Animate delay={0.3}>
                <div className='relative group h-full'>
                  <span className="absolute inset-0 border-2 border-dashed border-primary"></span>
                  <div className="h-full bg-secondary border-2 border-primary p-6 text-white grid justify-start gap-4 group-hover:shadow-lg transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-serif text-primary">Design-Build Services</h3>
                    <p>We offer a full range of design-build services, including architectural design, engineering, and construction management. Our design-build approach streamlines the construction process and saves you time and money.</p>
                    <Link href={"/services"} className="btn-primary mt-6 self-end">
                      Learn more
                    </Link>
                  </div>
                </div>
              </Animate>
              <Animate delay={0.4}>
                <div className='relative group h-full'>
                  <span className="absolute inset-0 border-2 border-dashed border-primary"></span>
                  <div className="h-full bg-secondary border-2 border-primary p-6 text-white grid justify-start gap-4 group-hover:shadow-lg transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-serif text-primary">Project Management</h3>
                    <p>We provide professional project management services to ensure that your project is completed on-time and within budget. Our project managers are experienced in construction and have the skills to keep your project running smoothly.</p>
                    <Link href={"/services"} className="btn-primary mt-6 self-end">
                      Learn more
                    </Link>
                  </div>
                </div>
              </Animate>
              <Animate delay={0.5}>
                <div className='relative group h-full'>
                  <span className="absolute inset-0 border-2 border-dashed border-primary"></span>
                  <div className="h-full bg-secondary border-2 border-primary p-6 text-white grid justify-start gap-4 group-hover:shadow-lg transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-serif text-primary">Renovation and Remodeling</h3>
                    <p>We provide renovation and remodeling services for both residential and commercial properties. Whether you&apos;re looking to update your home or remodel your commercial space, we&apos;ll work with you to create the perfect design and bring your vision to life.</p>
                    <Link href={"/services"} className="btn-primary mt-6 self-end">
                      Learn more
                    </Link>
                  </div>
                </div>
              </Animate>
            </div>

          </div>
        </section>
        <section className='bg-white py-24'>
          <div className='wrapper'>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8 place-items-center'>
              <div className='relative z-10 h-64 sm:h-80 lg:h-full'>
                <Animate>
                  <Image src="/house.avif" alt="Cool House" width={1080} height={760}
                    className="h-64 sm:h-80 lg:h-full object-cover"
                  />
                </Animate>
              </div>
              <div className='px-8 py-4 lg:py-0 text-secondary relative bg-gray-100 border lg:border-none'>
                <span className='hidden lg:block absolute top-1/2 right-0 tranform  -translate-y-[calc(50%+3rem)] border h-[calc(100%+6rem)] w-[calc(100%+6rem)] bg-gray-100'></span>
                <div className='relative z-10 space-y-6'>
                  <Animate>
                    <h2 className="section-heading">We provide a wide range of services to cover your needs perfectly.</h2>
                  </Animate>
                  <Animate delay={0.1}>
                    <p>From concept to completion, we work closely with our clients to understand their needs and tailor our services to meet those needs. We use the latest technology and industry best practices to ensure that every project is completed to the highest standards.</p>
                  </Animate>
                  <Animate delay={0.2}>
                    <Link href="/" className='btn-primary inline-block !my-12'>Learn more about us</Link>
                  </Animate>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-12 bg-secondary'>
          <div className='wrapper'>
            <Animate>
              <h2 className='section-heading text-center max-w-2xl mx-auto'>Read trusted reviews from our customers</h2>
            </Animate>
            <div className='my-24'>
              <Animate>
                <Testimonial />
              </Animate>
            </div>
          </div>
        </section>
        
        <CTA />
      </main>

    <Footer />
    </>
  )
}