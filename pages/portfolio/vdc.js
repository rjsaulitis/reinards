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
        <title>VDC Zīmola Attīstība</title>
        <meta name="og:title" content="VDC Zīmola Attīstība"/>
        <meta name="description" content="VDC Zīmola Izstrāde un Dizains"/>
        <meta name="og:description" content="VDC Zīmola Izstrāde un Dizains"/>      
      </Head>

      <Navbar float></Navbar>
      <Header cover="vdc/vdc.jpg"></Header>
      <Container>
        <Details title="Modernas mājaslapas dizains & izstrāde Veģetatīvās Distonijas Centram">
          Projekta uzdevums bija izveidot jaunu uzņēmuma mājaslapu, kas būtu pēc iespējas patīkamāka lietotājam, uzmanību pievēršot UX dizainam, animācijām, ātrai lapas ielādei un navigācijas izveidei tā, lai ir pēc iespējas vieglāk sazināties un pierakstīties uz seansu.
                      <br/><br/>
          Mājaslapas ielāde ir zibenīgi ātra, pateicoties PWA tehnoloģijai, optimizētiem attēliem un Next.js maģijai.
          <br/><br/>
          Mājaslapa tika izstrādāta, novietota uz servera, savienota ar domēnu un sasaistīta ar Google Analytics apmeklētāju statistikas ievākšanai.
        </Details>

        <img src="/images/mockups/vdc/desktop.jpg" fill className='mb2 mb4-l' />

      </Container>
      <Footer></Footer>
    </>
  )
}
