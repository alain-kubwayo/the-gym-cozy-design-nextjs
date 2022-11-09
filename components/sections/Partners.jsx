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
        <section className="bg-secondary-200">
            <Wrapper>
                <h4 className="text-3xl italic text-center font-fraunces72 text-primary-300">More than 150 happy clients</h4>
                <div className="flex justify-between py-8">
                    {partners.map(partner => <Image src={partner.src} width={partner.width} height={partner.height} alt="Partner" key={partner.src} />)}
                </div>
            </Wrapper>
        </section>
     );
}
 
export default Partners;