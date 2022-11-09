import Image from "next/image";
import Link from "next/link";

const Designer = () => {
    return ( 
        <section>
            <video width="" height="" controls>
                <source src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5c86da0e3af903761f6c302c_Black And White Video Of Man Infront Of The Computer-transcode.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div>
                <Image src="/assets/designer/logo.svg" width={119} height={102} alt="Logo" />
            </div>
            <div>
                <h3 className="text-5xl font-bold text-white font-fraunces72">Psst…&nbsp;<br />are you a designer?</h3>
                <p className="text-xl font-fraunces72 text-primary-100">Consider joining our <Link href="https://sddd.org/" className="text-tertiary-100">San Diego Design Designers</Link> group. More than 700 people, we meet online via Slack and in person at social events around the city. It’s a great opportunity to share ideas, get inspired, find support, and celebrate great design.</p>
            </div>
        </section>
     );
}
 
export default Designer;