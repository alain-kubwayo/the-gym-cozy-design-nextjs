import Image from "next/image";
import Button from "../buttons/Button";
import Wrapper from "../Wrapper";

const Hero = () => {
    return ( 
        <section className="overflow-hidden bg-gradient-hero">
            <Wrapper>
                <div>
                    <h1 className="font-fraunces144 font-extrabold leading-4.5 text-6xl lg:text-7.5xl bg-noise bg-primary-300 bg-clip-text text-transparent mt-20 mb-2.5 pt-60px lg:pt-10 lg:w-2/3">
                        Your design <br />team for <br className="block md:hidden" /> the  cost <br className="hidden xl:block" /> of a <br className="block xl:hidden" />salary.
                    </h1>
                    <p className="leading-5.5 bg-primary-100 text-3xl lg:text-4.5xl font-fraunces72 py-10 my-px w-full lg:w-1/2 bg-text-noise bg-clip-text text-transparent">Full-service design support that growing B2B and non-profit organizations need. Are you strained because you should have a design team but you don&apos;'t?</p>
                    <div className="mt-10 mb-6">
                        <Button style="">See How We <br className="block md:hidden" /> Work & How We Can <br className="block md:hidden" />Do</Button>
                    </div>
                    <Image src="/assets/hero.png" width={740} height={853} className="mt-20 -mb-12 lg:absolute -bottom-32 lg:-right-80 xl:-right-20" alt="Hero Noise" />
                </div>
            </Wrapper>
        </section>
     );
}
 
export default Hero;