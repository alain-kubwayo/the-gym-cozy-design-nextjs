import Image from "next/image";

const Clients = () => {
    return ( 
        <section>
            <div>
                <h1 className="text-secondary-200 font-fraunces72 text-6.5xl">❤️ from our clients</h1>
                <div className="bg-secondary-200">
                    <div className="flex items-center justify-center overflow-hidden rounded-[32%] border-2.5 border-white w-[80px] h-[80px]">
                        <Image src="/assets/clients/client-1.webp" width={80} height={80} alt="Avatar" className="w-full h-full" />
                    </div>
                    <p className="text-xl text-primary-300 font-fraunces72">“One of the top design professionals…”</p>
                    <p className="text-lg text-primary-100 font-fraunces72">I connect with hundreds of talented folks on a regular basis, and I can say with complete confidence that Lee is one of the best UX designers in Aquent/Vitamin T's global network.</p>
                    <h5 className="text-xs uppercase font-geomanist text-primary-100">SUSIE POLLASKY</h5>
                    <p className="text-xs font-geomanist text-primary-100">Now: Leadership Recruiting @ Product Design at Facebook</p>
                </div>
                <div className=" bg-secondary-100">
                    <div className="flex items-center justify-center overflow-hidden rounded-[32%] border-2.5 border-white w-[80px] h-[80px]">
                        <Image src="/assets/clients/client-2.webp" width={80} height={80} alt="Avatar" className="w-full h-full" />
                    </div>
                    <p className="text-xl text-primary-300 font-fraunces72">“They’re a very well-rounded organization…”</p>
                    <p className="text-lg text-primary-100 font-fraunces72">Cost per conversion and all of those metrics have dropped significantly. We used to pay an average of $100 per lead that converts… now we have that  down to about $20. Sessions and contacts have also gone up astronomically, at least threefold. Organic search and social media referrals have all continued to skyrocket. We’re really pleased.</p>
                    <h5 className="text-xs uppercase font-geomanist text-primary-100">SUSIE POLLASKY</h5>
                    <p className="text-xs font-geomanist text-primary-100">Now: Leadership Recruiting @ Product Design at Facebook</p>
                </div>
                <div>
                    <Image src="/assets/clients/message-icon.svg" width={32} height={32} alt="Icon" />
                </div>
                <div className=" bg-primary-200">
                    <div className="flex items-center justify-center overflow-hidden rounded-[32%] border-2.5 border-white w-[80px] h-[80px]">
                        <Image src="/assets/clients/client-3.webp" width={80} height={80} alt="Avatar" className="w-full h-full" />
                    </div>
                    <p className="text-xl text-primary-300 font-fraunces72">“They're just good people.”</p>
                    <p className="text-lg text-primary-100 font-fraunces72">They were a pleasure to work with and I'm really happy with the results. They pretty much nailed it.</p>
                    <h5 className="text-xs uppercase font-geomanist text-primary-100">SUSIE POLLASKY</h5>
                    <p className="text-xs font-geomanist text-primary-100">Now: Leadership Recruiting @ Product Design at Facebook</p>
                </div>
                <div className=" bg-primary-400">
                    <div className="flex items-center justify-center overflow-hidden rounded-[32%] border-2.5 border-white w-[80px] h-[80px]">
                        <Image src="/assets/clients/client-4.webp" width={80} height={80} alt="Avatar" className="w-full h-full" />
                    </div>
                    <p className="text-xl text-primary-300 font-fraunces72">“The project was successful”</p>
                    <p className="text-lg text-primary-100 font-fraunces72">They strive to come up with good design, and they focus on all the right things. The quality of their work is high, and all the deliverables are very well-organized and professional.</p>
                    <h5 className="text-xs uppercase font-geomanist text-primary-100">SUSIE POLLASKY</h5>
                    <p className="text-xs font-geomanist text-primary-100">Now: Leadership Recruiting @ Product Design at Facebook</p>
                </div>
            </div>
        </section>
     );
}
 
export default Clients;