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
        <title>Portfolio | LM Group Buve</title>
        <meta name="og:title" content="Portfolio | LM Group Buve"/>
        <meta name="description" content="LM Group Buve Zīmola Izstrāde un Dizains"/>
        <meta name="og:description" content="LM Group Buve Zīmola Izstrāde un Dizains"/>      
      </Head>

      <Navbar></Navbar>
      <Header cover="lmg.jpg" title="LM Group Buve"></Header>
      <ProjectDetails
        client="Matīss Legzdiņš"
        company="LM Group Buve"
        job1title="Zīmola Attīstība"
        job1who="Reinards Jānis Saulītis"
        job2title="Grafiskais Dizains"
        job2who="Reinards Jānis Saulītis"
        job3title="Copywriting & Web"
        job3who="Reinards Jānis Saulītis"
        >
        LM Group Buve zīmola attīstībā esam saskārušies ar visu iespējamo. Ilgtermiņa sadarbības rezultātā uzņēmuma tēlu pārveidojām un piešķīrām tam personību.
        <br/><br/>
        Tika izstrādāta zīmola vizuālā identitāte, uzlabota un pilnveidota mājaslapa, veikta klientu aptauja, veidots sociālo tīklu saturs, reklāmas un konkursi sociālajos tīklos, kas piesaistīja uzņēmumam vairāk kā 3000 sekotāju.
        <br/><br/>
        Tika dizainētas un apdrukātas 10+ dažādu veidu dāvanas klientiem, partneriem. Tika aplīmēts uzņēmuma auto, konteiners u.c.
      </ProjectDetails>
      {/* <FullSizePhoto src="realdeal/a4-brochure.jpg" width="1920" height="1080"></FullSizePhoto>
       */}
       <FullSizePhoto src="lmg/brand.jpg" width="1920" height="1080">
        Lorem ipsum dolor
      </FullSizePhoto>
      <FullSizePhoto src="lmg/lmgweb.jpg" width="4170" height="2000">
        Lorem ipsum dolor
      </FullSizePhoto>
      <Footer></Footer>
    </>
  )
}
