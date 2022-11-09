import Head from 'next/head'
import Awards from '../components/sections/Awards'
import Clients from '../components/sections/Clients'
import Designer from '../components/sections/Designer'
import Help from '../components/sections/Help'
import Hero from '../components/sections/Hero'
import Partners from '../components/sections/Partners'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cozy: Honest, real-world digital design & marketing</title>
        <meta name="description" content="We make design & digital marketing expertise accessible to careworn budgets, with a focus on efficiency, quality, and reliability. No bullshit. No epic quests for inspiration. Just pragmatic collaboration and results." />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Awards />
      <Help />
      {/* <Clients /> */}
      {/* <Designer /> */}
      {/* <Partners /> */}
      
    </div>
  )
}
