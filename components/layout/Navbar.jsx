import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="pl-6 w-full flex justify-between items-center">
                <div className="py-5 px-3.75">
                    <Image src="/assets/logos/logo-secondary.svg" width={100} height={68.66} alt="Logo" />
                </div>
                <ul className="font-primary text-2.5xl text-primary-100 hidden min-[992px]:flex">
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