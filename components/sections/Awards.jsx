import Image from "next/image";
import Button from "../buttons/Button";

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
        <section>
            <div>
                <p>🌴🐻🇺🇸</p>
                <h2 className="font-fraunces72 text-6.75xl text-secondary-200">Get Cozy</h2>
                <h3 className="text-primary-400 text-37px font-fraunces72">Design & digital marketing in San Diego, California</h3>
                <p className="text-secondary-200 text-xl-md">We’re an award-winning design shop based in South Park, San Diego. We efficiently combine the best parts of user experience (UX) with creative design and execution to create effective collateral that connects with the human beings who interact with them. 🤯</p>
                <p className="text-secondary-200 text-xl-md">No epic quests for inspiration. Just pragmatic collaboration and efficient results from big-agency graduates with decades of experience.</p>
                <Button text="why we do what we do"/>
            </div>
            <div>
                <div>
                    {
                        firstAccreditors.map(accr => <Image src={accr.src} width={accr.width} height={accr.height} alt="Accreditor" />)
                    }
                </div>
                <div>
                    {
                        secondAccreditors.map(accr => <Image src={accr.src} width={accr.width} height={accr.height} alt="Accreditor" />)
                    }
                </div>
            </div>
        </section>
     );
}
 
export default Awards;