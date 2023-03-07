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
        <title>Portfolio | Chalete</title>
        <meta name="og:title" content="Portfolio | Chalete"/>
        <meta name="description" content="Chalete Zīmola Izstrāde un Dizains"/>
        <meta name="og:description" content="Chalete Zīmola Izstrāde un Dizains"/>        
      </Head>

      <Navbar></Navbar>
      <Header cover="chalete.jpg" title="Chalete"></Header>
      <ProjectDetails
        client="*****"
        company="Chalete"
        job1title="Zīmola Attīstība"
        job1who="Reinards Jānis Saulītis"
        job2title="Grafiskais Dizains"
        job2who="Reinards Jānis Saulītis"
        job3title="Web Izstrāde"
        job3who="Reinards Jānis Saulītis"
        >
        Chalete ir jauns uzņēmums, kas izplata dažādus materiālus koksnes aizsardzībai. Projekta ietvaros tika dizainēts logo, etiķetes produktiem, vizītkarte un zīmola vadlīnijas.
        <br/><br/>
        Viens no lielākajiem uzdevumiem bija izstrādāt digitālu produktu katalogu, vienkāršai pārlūkošanai ar bildēm, krāsu toņiem un instrukcijām produkta lietošanā.
        <br/><br/>
        Zīmols vēl ir attīstības procesā, tādēļ vairāk informācijas tiks pievienots vēlāk.
      </ProjectDetails>

      <FullSizePhoto src="chalete/brand.jpg" width="1920" height="1080"></FullSizePhoto>

      {/* 
      <HalfSizePhoto src="realdeal/a4-brochure.jpg" width="1920" height="1080">
        Lorem ipsum dolor
      </HalfSizePhoto> */}
      <Footer></Footer>
    </>
  )
}
