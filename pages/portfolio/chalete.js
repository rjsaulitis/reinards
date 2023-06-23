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
      <Header cover="chalete/chalete.jpg"></Header>
      <Container>
        <Details title="Zīmola attīstība un dizains koksnes aizsardzības produktu izplatītājam Latvijā">
          Chalete ir jauns uzņēmums, kas izplata dažādus materiālus koksnes aizsardzībai. Projekta ietvaros tika dizainēts logo, etiķetes produktiem, vizītkarte un zīmola vadlīnijas.
    <br/><br/>
          Viens no lielākajiem uzdevumiem bija izstrādāt digitālu produktu katalogu, vienkāršai pārlūkošanai ar bildēm, krāsu toņiem un instrukcijām produkta lietošanā.
          <br/><br/>
          Zīmols vēl ir attīstības procesā, tādēļ vairāk informācijas tiks pievienots vēlāk.
        </Details>
      </Container>
      
        <img src="/images/mockups/chalete/brand.jpg" fill className='mb2 mb4-l' />
      <Footer></Footer>
    </>
  )
}
