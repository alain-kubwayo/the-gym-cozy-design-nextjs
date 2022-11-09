import Head from 'next/head'
import Image from 'next/image'
import Awards from '../components/sections/Awards'
import Clients from '../components/sections/Clients'
import Designer from '../components/sections/Designer'
import Help from '../components/sections/Help'
import Hero from '../components/sections/Hero'
import Partners from '../components/sections/Partners'

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>Cozy: Honest, real-world digital design & marketing</title>
        <meta name="description" content="We make design & digital marketing expertise accessible to careworn budgets, with a focus on efficiency, quality, and reliability. No bullshit. No epic quests for inspiration. Just pragmatic collaboration and results." />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="sticky relative top-90% left-3% rounded-full w-10 h-10  flex items-center justify-center p-2 bg-tertiary-400 z-50 hover:scale-125 hover:cursor-pointer duration-700">
        <Image src="/assets/ui/sticker.svg" width={22} height={29} alt="Sticker" />
        <span className="absolute flex items-center justify-center p-2 bg-white rounded-full -left-2 -bottom-3">
          <Image src="/assets/ui/check.svg" width={11} height={11} alt="Check" />
        </span>
      </div>
      

      <Hero />
      <Awards />
      <Clients />
      <Partners />
      <Designer />
      <Help />
    </div>
  )
}
