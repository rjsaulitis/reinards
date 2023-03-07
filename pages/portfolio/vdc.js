import Head from 'next/head'
import Image from 'next/image'

import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/header'
import ProjectDetails from '@/components/casestudies/project-details'
import FullSizePhoto from '@/components/casestudies/full-size-photo'
import HalfSizePhoto from '@/components/casestudies/half-size-photo'

export default function Home() {
  return (
    <>
      <Head>

        <title>Portfolio | VDC</title>
        <meta name="og:title" content="Portfolio | VDC"/>
        <meta name="description" content="VDC Mājaslapas Izstrāde un Dizains"/>
        <meta name="og:description" content="VDC Mājaslapas Izstrāde un Dizains"/>
      </Head>

      <Navbar></Navbar>
      <Header cover="vdc.jpg" title="VDC"></Header>
      <ProjectDetails
        client="Ivars Tilgalis"
        company="Veģetatīvās Distonijas Centrs"
        job1title="Web Izstrāde"
        job1who="Reinards Jānis Saulītis"
        job2title="SEO"
        job2who="Reinards Jānis Saulītis"
        >
        Projekta uzdevums bija izveidot jaunu uzņēmuma mājaslapu, kas būtu pēc iespējas patīkamāka lietotājam, uzmanību pievēršot UX dizainam, animācijām, ātrai lapas ielādei un navigācijas izveidei tā, lai ir pēc iespējas vieglāk sazināties un pierakstīties uz seansu.
        <br/><br/>
        Mājaslapas ielāde ir zibenīgi ātra, pateicoties PWA tehnoloģijai, optimizētiem attēliem un Next.js maģijai.
        <br/><br/>
        Mājaslapa tika izstrādāta, novietota uz servera, savienota ar domēnu un sasaistīta ar Google Analytics apmeklētāju statistikas ievākšanai.
      </ProjectDetails>
      
      <FullSizePhoto reverse src="vdc/desktop.jpg" width="2560" height="1706">
        Desktop Versija <br/><br/>
      </FullSizePhoto>
      <Footer></Footer>
    </>
  )
}
