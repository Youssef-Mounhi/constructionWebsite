import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Animate from "@/components/Animate";
import Service from "@/components/Service";
import CTA from "@/components/CTA";

const services = [
    {
        title: 'Residential Construction',
        src: '/services/residential.jpg', 
    },
    {
        title: 'Commercial Construction',
        src: '/services/commercial.jpg', 
    },
    {
        title: 'Industrial Construction',
        src: '/services/industrial.jpg', 
    },
    {
        title: 'Design-Build Services',
        src: '/services/design.jpg', 
    },
    {
        title: 'Project Management',
        src: '/services/projectmanage.jpg', 
    },
    {
        title: 'Renovation and Remodeling',
        src: '/services/renovation.jpg', 
    },
]

export default function Services(props){
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
                                    <h1 className="hero-heading">Complete Construction Solutions for Your Every Need</h1>
                                </Animate>
                                <Animate delay={0.2}>
                                    <Link href="/contact" className="btn-primary inline-block">Get a quote</Link>
                                </Animate>
                            </div>
                    </div>
                </section>

                <section className="py-24">
                    <div className="wrapper space-y-24">
                        {services.map((elem, i)=>(    
                            <Service title={elem.title} key={i} 
                                imageSrc={elem.src}
                                paragraphs={[
                                    "We provide full-service construction services for new home builds, remodels, and additions. From design to completion, we work with you to create your dream home. Whether you're building a new home, renovating your current space, or adding an addition, our team of experts will work closely with you to bring your vision to life. With a focus on quality, safety, and customer satisfaction, we'll handle every aspect of your project with professionalism and expertise.",
                                    "Our residential construction services include new home construction, room additions, kitchen and bathroom remodels, and outdoor living spaces. We understand that every project is unique and will work with you to create a customized solution that meets your specific needs and budget. Our experienced team is equipped with the latest technology and equipment to ensure that your project is completed efficiently and effectively.",
                                    "We understand that a construction project can be disruptive, and we work hard to minimize any inconvenience to you and your family. Our team is committed to maintaining a clean and safe worksite, and we'll take all necessary precautions to protect your property. Our goal is to make the building process as stress-free and enjoyable as possible for you."
                                ]}
                            />
                        ))}
                    </div>
                </section>

                <CTA />
            </main>
            <Footer />
        </>
    );
}