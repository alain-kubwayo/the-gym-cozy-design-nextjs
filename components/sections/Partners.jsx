import Image from "next/image";
import Wrapper from "../Wrapper";

const partners = [
    {
        src: '/assets/partners/partner-1.svg',
        width: 94,
        height: 32,
    },
    {
        src: '/assets/partners/partner-2.svg',
        width: 105,
        height: 32,
    },
    {
        src: '/assets/partners/partner-3.svg',
        width: 150,
        height: 32,
    },
    {
        src: '/assets/partners/partner-4.svg',
        width: 87,
        height: 32,
    },
    {
        src: '/assets/partners/partner-5.svg',
        width: 120,
        height: 32,
    },
    {
        src: '/assets/partners/partner-6.svg',
        width: 100,
        height: 32,
    },
    {
        src: '/assets/partners/partner-7.svg',
        width: 54,
        height: 32,
    },
];

const Partners = () => {
    return ( 
        <section className="py-20 bg-secondary-200">
            <Wrapper>
                <h4 className="pb-10 text-3xl italic text-center font-fraunces72 text-primary-300">More than 150 happy clients</h4>
                <div className="flex flex-col flex-wrap justify-center w-full gap-10 py-8 gap-y-10 lg:flex-row lg:w-auto">
                    {partners.map(partner => <Image src={partner.src} width={partner.width} height={partner.height} alt="Partner" key={partner.src} className="self-center lg:self-start" />)}
                </div>
            </Wrapper>
        </section>
     );
}
 
export default Partners;