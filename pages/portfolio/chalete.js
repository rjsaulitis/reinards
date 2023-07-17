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
        <title>Chalete Zīmola Attīstība</title>
        <meta name="og:title" content="Chalete Zīmola Attīstība"/>
        <meta name="description" content="Chalete Zīmola Izstrāde un Dizains"/>
        <meta name="og:description" content="Chalete Zīmola Izstrāde un Dizains"/>      
      </Head>

      <Navbar float></Navbar>
        <Details thumbnail="chalete-th.webp" title="Chalete zīmola attīstība">
          Chalete ir uzņēmums, kas izplata dažādus kvalitatīvus materiālus koksnes aizsardzībai. Projekta ietvaros tika dizainēts logo, etiķetes produktiem, vizītkarte un zīmola vadlīnijas.
    <br/><br/>
          Viens no lielākajiem uzdevumiem bija izstrādāt digitālu produktu katalogu, vienkāršai pārlūkošanai ar bildēm, krāsu toņiem un instrukcijām produkta lietošanā.
        </Details>
      
        <img src="/images/mockups/chalete/m2.webp" />
        <img src="/images/mockups/chalete/m0.webp" />
        <img src="/images/mockups/chalete/m1.webp" />
      <Footer></Footer>
    </>
  )
}
