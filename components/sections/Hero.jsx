import Image from "next/image";
import Button from "../buttons/Button";
import Wrapper from "../Wrapper";

const Hero = () => {
    return ( 
        <section className="overflow-hidden bg-gradient-hero">
            <Wrapper>
                <div className="lg:pr-15">
                    <h1 className="font-fraunces144 font-extrabold leading-4.5 text-6xl lg:text-7.5xl bg-noise bg-primary-300 bg-clip-text text-transparent mt-[80px] mb-[20px] pt-[40px]">
                        Your design <br className="hidden md:block" /> team for the cost <br className="hidden md:block" /> of a salary.
                    </h1>
                    <p className="leading-5.5 bg-primary-100 text-3xl lg:text-4.5xl font-fraunces72 my-[20px] py-[10px] w-full lg:w-1/2 bg-text-noise bg-clip-text text-transparent">Full-service design support that growing B2B and non-profit organizations need. Are you strained because you should have a design team but you don't?</p>
                    <div className="mt-10 mb-6">
                        <Button>See How We <br className="block md:hidden" /> Work & How We Can <br className="block md:hidden" />Do</Button>
                    </div>
                    <Image src="/assets/hero.png" width={740} height={853} className="mt-20 -mb-12 lg:absolute -bottom-32 -right-20" />
                </div>
            </Wrapper>
        </section>
     );
}
 
export default Hero;