import Head from 'next/head'
import Image from 'next/image'

import Footer from '../components/footer/footer'
import CaseStudies from '../components/casestudies/casestudies'
import Navbar from '../components/navbar/navbar'
import Header from '../components/header/header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Profesionāli Dizaina Pakalpojumi | Portfolio | Reinards Jānis Saulītis</title>
        <meta name="og:title" content="Reinards Saulītis"/>
        <meta name="description" content="Izveido identitāti, kas komplimentēs Tava uzņēmuma personību, iedos odziņu, izcels konkurentu vidū un liks justies pārliecinātam, ka klienti Tevi redz pašā labākajā gaismā!"/>
        <meta name="og:description" content="Izveido identitāti, kas komplimentēs Tava uzņēmuma personību, iedos odziņu, izcels konkurentu vidū un liks justies pārliecinātam, ka klienti Tevi redz pašā labākajā gaismā!"/>        
      </Head>

      <div className="index-header ph4 ph6-l pv3 pv5-l flex flex-column-reverse flex-row-l">
        <div className='w-100 w-40-l flex flex-column justify-center'>
          <div>
            <h1 className='f4 f3-l'>Portfolio</h1>
            <img className="logotype" src="/images/logotype.svg"></img>
            <p className='f4 subtitle'>Zīmola stratēģija un vizuālās <br/> identitātes dizains</p>
          </div>
        </div>
        <div className='w-100 w-60-l pv4'>
          <img className='illustration' src="/images/illustration.svg"></img>
        </div>
      </div>
      <CaseStudies></CaseStudies>
      <Footer></Footer>
    </>
  )
}
