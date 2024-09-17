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
        <title>LMG Zīmola Attīstība</title>
        <meta name="og:title" content="LMG Zīmola Attīstība"/>
        <meta name="description" content="LMG Zīmola Izstrāde un Dizains"/>
        <meta name="og:description" content="LMG Zīmola Izstrāde un Dizains"/>      
      </Head>

      <Navbar float></Navbar>
      {/* <Header cover="lmg/lmg.jpg"></Header> */}
        <Details thumbnail="lmg-th.webp" title="Daudzu gadu sadarbība">
        LM GROUP (Agrāk LM GROUP BUVE) zīmola attīstībā esam saskārušies ar visu iespējamo. Ilgtermiņa sadarbības rezultātā uzņēmuma tēlu pārveidojām un laika gaitā piešķīrām tam personību.
        <br/><br/>
        Tika izstrādāta zīmola vizuālā identitāte, uzlabota un pilnveidota mājaslapa, veikta klientu aptauja, veidots sociālo tīklu saturs, reklāmas un konkursi sociālajos tīklos, kas piesaistīja uzņēmumam vairāk kā 3000 sekotāju.
        <br/><br/>
        Tika dizainētas un apdrukātas 10+ dažādu veidu dāvanas klientiem, partneriem. Tika aplīmēts uzņēmuma auto, konteiners u.c.
        <br/><br/>
        Visnesenākais projekts bija jaunu krāsu ieviešana zīmolā (zelts ar melnu) un mājaslapas atjaunots dizains, kā arī izstrāde. 
        </Details>

        <img src="/images/mockups/lmg/brand.jpg" />
        <img src="/images/mockups/lmg/lmgweb.jpg" />
      <Footer></Footer>
    </>
  )
}
