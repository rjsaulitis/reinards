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
      
      
        <Details thumbnail="alutu-th.webp" title="Alutu Medus vizuālā identiāte">
          Agnese pie manis griezās, lai izveidotu etiķetes medus burciņām, taču nedaudz apspriežot nākotnes plānus sapratām, ka labāk izveidot arī nelielu vizuālo identitāti - logo, krāsas, fonts.
          <br/><br/>
          Tagad Agnese var justies droši, ka viņas produkts tiek parādīts vislabākajā gaismā un stāvot veikala plauktā ir lielāka iespēja tikt pamanītam un izvēlētam.
          <br/><br/>
          Krāsas ir diezgan konservatīvas, taču garšīgas. Logo ir ar roku zīmēts un komunicē mājīgumu. Kā arī fonts ļoti labi sader un ne tikai izskatās labi, taču ir arī funkcionāls ar tā dažādo biezumu un slīpuma opcijām.
        </Details>

        <img src="/images/mockups/alutumedus/m2.webp" />
        <img src="/images/mockups/alutumedus/m1.webp" />
        <img src="/images/mockups/alutumedus/m0.webp" />
        <img src="/images/mockups/alutumedus/m3.webp" />
        <img src="/images/mockups/alutumedus/m4.webp" />
      
      <Footer></Footer>
    </>
  )
}
