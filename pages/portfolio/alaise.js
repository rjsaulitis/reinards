import Head from 'next/head'
import Image from 'next/image'

import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/header'
import Container from '@/components/container'

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
      <Header cover="alaise/alaise.jpg"></Header>
      <Container>

        <Details title="Zīmola stratēģija, dizains un biznesa attīstība">
          Alaise ir uzņēmums, kas nodarbojas ar modes dizainu, apakšveļas modelēšanu un individuāliem pasūtījumiem. Mūsu uzdevums bija izveidot vizuālu identitāti, kas atspoguļotu uzņēmuma īpašnieces personību visos klienta saskarsmes punktos, piemēram, logo, uzlīmes, produkta iepakojums, sociālie tīkli, paldies kartiņa u.c.
        </Details>
      </Container>
        <img src="/images/mockups/alaise/brand.jpg" fill className='mb2 mb4-l' />
      <Footer></Footer>
    </>
  )
}
