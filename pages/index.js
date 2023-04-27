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

      <Navbar></Navbar>
      <CaseStudies></CaseStudies>
      <Footer></Footer>
    </>
  )
}
