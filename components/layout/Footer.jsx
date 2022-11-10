import Image from "next/image";
import Link from "next/link";
import Wrapper from "../Wrapper";

const Footer = () => {
    const printSocials = () => {
        let result = [];
        for(let i=0; i<7; i++){
            result.push(
                () => (
                <li className="m-0.75 flex items-center justify-center h-6 w-6 bg-tertiary-200">
                    <Link href="">
                        <Image src="/assets/footer/social.svg" width={12} height={12} alt="Icon" />
                    </Link>
                </li>)
            );
        }
        return result
    }
    return ( 
        <footer className="pt-12 pb-6 font-fraunces72 bg-primary-100">
            <Wrapper style="md:!px-20">
                <div className="flex flex-col items-center gap-4 px-6 lg:flex-row">
                    <div className="">
                        <Image src="/assets/logos/logo-primary.svg" width={73} height={50} alt="Logo" />
                    </div>
                    <div className="flex flex-col items-center justify-between space-y-6 lg:flex-row grow">
                        <ul className="flex flex-col justify-center text-center lg:justify-start lg:flex-row text-xs-md text-primary-400">
                            <li className="py-1 lg:mr-8">About</li>
                            <li className="py-1 lg:mr-8">Services</li>
                            <li className="py-1 lg:mr-8">Work</li>
                            <li className="py-1 lg:mr-8">Blog</li>
                            <li className="py-1 lg:mr-8">Contact</li>
                        </ul>
                        <div className="flex flex-col items-center gap-4 xl:flex-row">
                            <div className="flex items-center">
                                <Image src="/assets/footer/asset-1.webp" width={20} height={20} alt="Icon" />
                                <p className="pl-2 text-tertiary-100 text-xs-md">San Diego Digital Designers</p>
                            </div>
                            <ul className="flex lg:pl-10 lg:flex-row">
                                {
                                    printSocials().map((Value,index)  => <Value key={index} />)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-xs lg:mt-10 lg:mx-3.75 mb-0 py-6 px-0 border-t border-primary-400 flex flex-col gap-y-8 lg:flex-row justify-between items-center">
                    <div className="flex flex-wrap gap-8 lg:gap-10 lg:max-w-2xl">
                        <div>
                            <Image src="/assets/footer/asset-2.svg" width={140} height={53} alt="Image" />
                            <p className="text-sm font-bold text-center text-tertiary-300">BBB Rating: +A</p>
                        </div>
                        <div>
                            <Image src="/assets/footer/asset-3.png" width={140} height={73} alt="Image" />
                        </div>
                        <div>
                            <Image src="/assets/footer/asset-4.png" width="200" height="50" alt="Image" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-end flex-grow gap-12 lg:basis-40rem lg:flex-row">
                        <p className="">Made with ❤️ in beautiful, sunny San Diego. ©2021</p>
                        <ul className="flex gap-4 text-primary-400">
                            <li>Privacy</li>
                            <li>Photo credit</li>
                        </ul>
                    </div>
                    
                </div>
            </Wrapper>
        </footer>
     );
}
 
export default Footer;