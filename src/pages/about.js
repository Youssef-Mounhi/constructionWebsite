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
                                    <h1 className="hero-heading">The Story of Construct</h1>
                                </Animate>
                                <Animate delay={0.2}>
                                    <p className="text-white">Meet Our Talented Team and Learn About Our Passion for Building Your Dreams into Reality</p>
                                </Animate>
                            </div>
                    </div>

                </section>
                <div className="flex justify-center items-center about-us-gradient px-4">
                    <Animate delay={0.1}>
                        <Image src="/team.jpg" width={924} height={720} 
                            className="object-cover lg:max-w-screen-lg shadow-lg"
                        />
                    </Animate>
                </div>

                <article className="wrapper py-24 max-w-prose mx-auto text-gray-900">
                    <div className="space-y-2">
                        <Animate delay={0.1}>
                            <p>
                                Welcome to Construct, a leading construction company that specializes in delivering top-notch construction services to residential, commercial, and industrial clients.
                            </p>
                        </Animate>
                        <Animate delay={0.2}>
                            <p>
                                With years of experience in the construction industry, we have built a reputation for quality, safety, and sustainability in every project we undertake. Our team of experts are highly skilled and dedicated to delivering projects on-time and within budget.
                            </p>
                        </Animate>
                        <Animate delay={0.3}>
                            <p>
                                From concept to completion, we work closely with our clients to understand their needs and tailor our services to meet those needs. We use the latest technology and industry best practices to ensure that every project is completed to the highest standards.
                            </p>
                        </Animate>
                        <Animate delay={0.4}>
                            <p>
                                We pride ourselves on our commitment to safety and sustainability. Our team is trained in the latest safety practices and we incorporate green building practices in every project.
                            </p>
                        </Animate>
                        <Animate delay={0.5}>
                            <p>
                                We invite you to browse our portfolio and see for yourself the quality of our work. If you have a construction project in mind, please don&apos;t hesitate to contact us. We would be happy to provide a free consultation and quote.
                            </p>
                        </Animate>
                    </div>
                    <div className="my-12 space-y-2">
                        <Animate delay={0.1}>
                            <h3 className="text-3xl my-6 font-bold font-serif text-primary">The Birth of Our Construction Company Website</h3>
                        </Animate>
                        <Animate delay={0.2}>
                        <p>
                            A group of skilled and passionate construction professionals saw the need for a company that truly cared about delivering high-quality results to their clients. They envisioned a stress-free building experience and dedicated their expertise to each project. As their reputation for exceptional results grew, they realized the need for a website to showcase their work and reach a wider audience. 
                        </p>
                        </Animate>
                        <Animate delay={0.3}>
                        <p>With the help of web developers and designers, our construction company website was born, showcasing our commitment to quality, safety, and customer satisfaction. The response was overwhelmingly positive, and the website remains a valuable tool for reaching new clients and showcasing our work.</p>
                        </Animate>
                    </div>
                    <div className="my-12 space-y-2">
                        <Animate delay={0.1}>
                            <h3 className="text-3xl my-6 font-bold font-serif text-primary">Building Your Dreams, Step by Step: Our Work Process</h3>
                        </Animate>
                        <Animate delay={0.2}>
                        <p>
                        At Construct, we understand that every construction project is unique, and we strive to provide a personalized experience for each and every client. Our work process begins with a consultation, where we listen to your vision and requirements, and provide expert guidance and support to help bring your vision to life.</p>
                        </Animate>
                        <Animate delay={0.3}>
                        <p>Next, we&apos;ll create a detailed plan and timeline for your project, taking into account all necessary permits, materials, and equipment. Our team of experienced professionals will handle every aspect of your project with expertise, ensuring that every detail is carefully planned and executed. We&apos;ll keep you informed and involved every step of the way, ensuring that your project is completed on time and within budget.</p>
                        </Animate>
                        <Animate delay={0.4}>
                        <p>At Construct, we prioritize quality and safety, and our team takes all necessary precautions to protect your property and maintain a clean and safe worksite. We understand that a construction project can be disruptive, and we&apos;ll do everything in our power to minimize any inconvenience to you and your family.</p>
                        </Animate>
                        <Animate delay={0.5}>
                        <p>Finally, upon completion, we&apos;ll conduct a thorough inspection of your project, ensuring that everything has been completed to the highest standards. Our commitment to quality and customer satisfaction is reflected in the exceptional results we deliver.</p>
                        </Animate>
                    </div>
                </article>

                <CTA />
            </main>
            <Footer />
        </>
    );
}