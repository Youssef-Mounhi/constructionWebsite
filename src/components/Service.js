import Image from "next/image";
import Link from "next/link";
import Animate from "./Animate";


function Service({title, paragraphs, imageSrc}){

    return(
        <div>
            <h2 className="section-heading">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-start my-12">
                <Animate delay={0.1}>
                    <Image src={imageSrc} width={580} height={480}
                        className="object-cover w-full h-full"
                    />
                </Animate>
                <div className="space-y-12">
                    <Animate delay={0.2}>
                        <div className="space-y-4 text-secondary max-w-prose">
                            {paragraphs.map((elem, i)=>(
                                <p key={i}>{elem}</p>
                            ))}
                        </div>
                    </Animate>
                    <div className="flex gap-4">
                        <Animate delay={0.3}>
                            <Link href={"/"} className="btn-primary inline-block">Get a quote</Link>
                        </Animate>
                        <Animate delay={0.4}>
                            <Link href={"/"} className="btn-secondary border-secondary text-secondary hover:bg-secondary hover:text-white inline-block">Previous work</Link>
                        </Animate>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;