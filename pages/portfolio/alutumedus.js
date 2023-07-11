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
        <title>Alutu Medus Zīmola Attīstība</title>
        <meta name="og:title" content="Alutu Medus Zīmola Attīstība"/>
        <meta name="description" content="Alutu Medus Zīmola Izstrāde un Dizains"/>
        <meta name="og:description" content="Alutu Medus Zīmola Izstrāde un Dizains"/>      
      </Head>

      <Navbar float></Navbar>
      <Header cover="alutumedus/header.webp"></Header>
      <Container>
        <Details title="Zīmola attīstība un dizains medus tirgotājai Agnesei Alutei">
          Projekta apraksts tiek gatavots...
        </Details>
      </Container>
      <Footer></Footer>
    </>
  )
}
