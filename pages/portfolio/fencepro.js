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
        <title>FencePro Zīmola Attīstība</title>
        <meta name="og:title" content="Fencepro Zīmola Attīstība"/>
        <meta name="description" content="Fencepro Zīmola Izstrāde un Dizains"/>
        <meta name="og:description" content="Fencepro Zīmola Izstrāde un Dizains"/>      
      </Head>

      <Navbar float></Navbar>
      <Details thumbnail="fencepro-th.webp" title="FENCEPRO zīmola attīstība">
        FENCEPRO ir līdz šim viens no pilnīgākajiem zīmola attīstības projektiem, ko esmu veicis. Ne tikai izstrādājām logo, bet visu kompānijas stilu.
        <br/><br/>
        Tika dizainēts digitāls portfolio, vizītkarte, uzlīmes, aploksne, e-pasta paraksts, dokumenti, mājaslapa, sociālo tīklu grafikas un dažādas ikonas.
        <br/><br/>
        Projekts tika uzsākts ar klienta iesniegtu logo ideju, taču drīz izrādījās, ka tieši tāds jau tiek izmantots citur. Vēlējāmies paturēt sākotnējo ideju par sešstūri un iekļaut kompānijas iniciāļus - tā arī tapa pašreizējā logo ideja.
      </Details>

        <img src="/images/mockups/fencepro/m0.webp" />
        <img src="/images/mockups/fencepro/m2.webp" />
        <img src="/images/mockups/fencepro/m7.webp" />
        <img src="/images/mockups/fencepro/m6.webp" />
        <img src="/images/mockups/fencepro/m3.webp" />
        <img src="/images/mockups/fencepro/m4.webp" />
        <img src="/images/mockups/fencepro/m1.webp" />
      <Footer></Footer>
    </>
  )
}
