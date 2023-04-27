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
        <title>Rosaella Zīmola Attīstība</title>
        <meta name="og:title" content="Rosaella Zīmola Attīstība"/>
        <meta name="description" content="Rosaella Zīmola Izstrāde un Dizains"/>
        <meta name="og:description" content="Rosaella Zīmola Izstrāde un Dizains"/>      
      </Head>

      <Navbar float></Navbar>
      <Header cover="rosaella/desktop.jpg"></Header>
      <Container>
        <Details title="Vienkārša internetveikala dizains skolēnu mācību uzņēmumam">
          Rosaella ir skolēnu mācību uzņēmums. Mans uzdevums bija izveidot konceptu interneta veikalam šim SMU.
        </Details>

        <img src="/images/mockups/rosaella/rosaellaweb.jpg" fill className='mb2 mb4-l' />

      </Container>
      <Footer></Footer>
    </>
  )
}
