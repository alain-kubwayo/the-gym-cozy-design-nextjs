import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav className="fixed top-0 z-50 w-full bg-gradient-nav">
            <div className="flex items-center justify-center w-full pl-10 pr-6 md:justify-between">
                <div className="py-5 px-3.75">
                    <Image src="/assets/logos/logo-secondary.svg" width={100} height={68.66} alt="Logo" />
                </div>
                <div className="p-4.5">
                    <Image src="/assets/navbar/hamburger.svg" width={30} height={30} alt="Hamburger Menu" className="flex ml-4 md:hidden" />
                </div>
                <ul className="font-fraunces72 font-semibold text-2.5xl text-primary-100 hidden md:flex">
                    <Link href="/">
                        <li className="py-7 px-4 hover:-translate-y-0.5 duration-300 hover:text-primary-300">Get Cozy</li>
                    </Link>   
                    <Link href="/">
                        <li className="py-7 px-4 hover:-translate-y-0.5 duration-300 hover:text-primary-300">What we do</li>
                    </Link>   
                    <Link href="/">
                        <li className="py-7 px-4 hover:-translate-y-0.5 duration-300 hover:text-primary-300">Our work</li>
                    </Link>   
                    <Link href="/">
                        <li className="py-7 px-4 hover:-translate-y-0.5 duration-300 hover:text-primary-300">The blog</li>
                    </Link>   
                    <Link href="/">
                        <li className="py-7 px-4 hover:-translate-y-0.5 duration-300 hover:text-primary-300">Say hi</li>
                    </Link>   
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;