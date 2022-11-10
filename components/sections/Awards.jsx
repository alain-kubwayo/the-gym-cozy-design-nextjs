import Image from "next/image";
import Button from "../buttons/Button";
import Wrapper from "../Wrapper";

const firstAccreditors = [
    {
        src: "/assets/awards/img-1.webp",
        width: 140,
        height: 140,
    },
    {
        src: "/assets/awards/img-2.webp",
        width: 160,
        height: 140,
    },
    {
        src: "/assets/awards/img-3.webp",
        width: 140,
        height: 140,
    },
    {
        src: "/assets/awards/img-4.webp",
        width: 140,
        height: 140,
    },
];

const secondAccreditors = [
    {
        src: "/assets/awards/img-5.webp",
        width: 140,
        height: 140,
    },
    {
        src: "/assets/awards/img-6.webp",
        width: 160,
        height: 140,
    },
    {
        src: "/assets/awards/img-7.webp",
        width: 120,
        height: 166,
    },
    {
        src: "/assets/awards/img-8.webp",
        width: 140,
        height: 140,
    },
    {
        src: "/assets/awards/img-9.webp",
        width: 150,
        height: 67,
    }
];



const Awards = () => {
    return ( 
        <section className="bg-no-repeat bg-cover bg-awards-texture bg-primary-100">
            <Wrapper style="lg:max-w-secondary">
                <div className="grid py-40 lg:grid-cols-2">
                    <div className="lg:pl-120px lg:pr-7 lg:pb-20">
                        <p className="pb-8 text-3xl">🌴🐻🇺🇸</p>
                        <h2 className="font-fraunces72 text-6.75xl text-secondary-200">Get Cozy</h2>
                        <h3 className="pb-10 text-primary-400 text-37px font-fraunces72">Design & digital marketing in San Diego, California</h3>
                        <p className="pb-4 text-secondary-200 text-xl-md">We’re an award-winning design shop based in South Park, San Diego. We efficiently combine the best parts of user experience (UX) with creative design and execution to create effective collateral that connects with the human beings who interact with them. 🤯</p>
                        <p className="pb-8 text-secondary-200 text-xl-md">No epic quests for inspiration. Just pragmatic collaboration and efficient results from big-agency graduates with decades of experience.</p>
                        <Button>why we do what <br className="block md:hidden" /> we do</Button>
                    </div>
                    <div className="pt-20 lg:pt-0">
                        <div className="flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row items-center justify-end h-full lg:gap-x-10 px-3.75">
                            <div className="flex flex-col gap-y-10">
                                {
                                    firstAccreditors.map(accr => <Image src={accr.src} width={accr.width} height={accr.height} alt="Accreditor" key={accr.src} />)
                                }
                            </div>
                            <div className="flex flex-col gap-y-10 lg:gapy-y-0 items-center lg:justify-between h-full px-3.75">
                                {
                                    secondAccreditors.map(accr => <Image src={accr.src} width={accr.width} height={accr.height} alt="Accreditor" key={accr.src} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
     );
}
 
export default Awards;