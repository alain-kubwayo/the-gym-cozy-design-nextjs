import Image from "next/image";
import Link from "next/link";
import Wrapper from "../Wrapper";

const Designer = () => {
    return ( 
        <section>
            <div className="relative lg:h-500">
                <video width="" height="" autoPlay muted loop className="absolute object-cover w-full h-full">
                    <source src="/assets/designer/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 w-full h-full bg-black opacity-80"></div>
                <Wrapper style="overflow-hidden flex items-center py-10 lg:py-0 px-6 h-full">
                    <div className="flex flex-col justify-center md:px-20 lg:flex-row lg:gap-x-20">
                        <div className="flex items-center justify-center">
                            <Image src="/assets/designer/logo.svg" width={119} height={102} alt="Logo" className="w-60 h-50 lg:w-119 lg:h-102" />
                        </div>
                        <div className="w-full pt-12 pl-10 pr-5 xl:w-1/2">
                            <h3 className="mb-6 text-5xl font-bold text-white font-fraunces72">Psst…&nbsp;<br />are you a designer?</h3>
                            <p className="text-xl font-fraunces72 text-primary-100">Consider joining our <Link href="https://sddd.org/" className="text-tertiary-100 hover:underline">San Diego Design Designers</Link> group. More than 700 people, we meet online via Slack and in person at social events around the city. It’s a great opportunity to share ideas, get inspired, find support, and celebrate great design.</p>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </section>
     );
}
 
export default Designer;