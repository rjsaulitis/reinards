import Head from 'next/head'
import Image from 'next/image'

import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'

import Details from '@/components/casestudies/details'

export default function CaseStudy() {
  return (
    <>
      <Head>
        <title>Alaise Zīmola Attīstība</title>
        <meta name="og:title" content="Alaise Zīmola Attīstība"/>
        <meta name="description" content="Alaise Zīmola Izstrāde un Dizains"/>
        <meta name="og:description" content="Alaise Zīmola Izstrāde un Dizains"/>      
      </Head>

      <Navbar float></Navbar>

      <Details thumbnail="alaise-th.webp" title="Alaise vizuālā identitāte">
        Alaise ir uzņēmums, kas nodarbojas ar modes dizainu, apakšveļas modelēšanu un individuāliem pasūtījumiem.
        <br/><br/>
         Mūsu uzdevums bija izveidot vizuālu identitāti, kas atspoguļotu uzņēmuma īpašnieces personību visos klienta saskarsmes punktos, piemēram, logo, uzlīmes, produkta iepakojums, sociālie tīkli, paldies kartiņa u.c.
         <br/><br/>
         Papildus dizainam kopā arī izveidojām plānu, kā piesaistīt klientus un pelnīt naudu ar citiem veidiem, ne tikai šujot fiziskus produktus, bet arī piedāvājot tādas lietas kā apmācības un šuvēju kopienas abonamentu.
      </Details>


        <img src="/images/mockups/alaise/m1.webp" />
        <img src="/images/mockups/alaise/m0.webp" />
        <img src="/images/mockups/alaise/m2.webp" />
        <img src="/images/mockups/alaise/m3.webp" />
      <Footer></Footer>
    </>
  )
}
