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
      <Details thumbnail="fencepro-th.webp" title="Lorem ipsum">
        Apraksts tiek gatavots
        </Details>

        {/* <img src="/images/mockups/lmg/brand.jpg" />
        <img src="/images/mockups/lmg/lmgweb.jpg" /> */}
      <Footer></Footer>
    </>
  )
}
