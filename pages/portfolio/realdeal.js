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
        <title>RealDeal Zīmola Attīstība</title>
        <meta name="og:title" content="RealDeal Zīmola Attīstība"/>
        <meta name="description" content="RealDeal Zīmola Izstrāde un Dizains"/>
        <meta name="og:description" content="RealDeal Zīmola Izstrāde un Dizains"/>      
      </Head>

      <Navbar float></Navbar>
      <Header cover="realdeal/a4-brochure.jpg"></Header>
      <Container>
        <Details title="Bukletu dizaina izstrāde">
        RealDeal ir zīmols ar lielām ambīcijām, kvalitatīviem produktiem, risinājumiem un jaudīgu darba procesu.
<br/><br/>
Divu mēnešu laikā kopš sadarbības uzsākšanas esam izstrādājuši dizainus vairākiem bukletiem, ofisa sienas grafikai un iesākuši izstrādāt mājaslapu.
        </Details>


      </Container>
        <img src="/images/mockups/realdeal/a5.jpg" fill className='mb2 mb4-l' />
        <img src="/images/mockups/realdeal/warmotech.jpg" fill className='mb2 mb4-l' />
      <Footer></Footer>
    </>
  )
}
