import Head from 'next/head'
import Image from 'next/image'

import Footer from '../components/footer/footer'
import CaseStudies from '../components/casestudies/casestudies'
import Navbar from '../components/navbar/navbar'
import HeaderHome from '../components/header/headerhome'
import Services from '../components/services/services'

import HeaderLines from '../public/images/lines.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zīmola attīstība - Tiem, kas dara</title>
       
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="reinards, saulītis, zīmols, branding, brends, attīstība, grafika, dizains, reklāmas, SEO, aģentūra"/>
        <meta name="description" content="Zīmola attīstības speciālists"/>
        <meta name="language" content="LV" />
        <meta name="robots" content="index,follow" />
        <meta charset="utf-8"/>
        <meta name="author" content="Reinards Saulītis" />
        <meta name="copyright" content="Reinards Saulītis" />
        <meta http-equiv="cache-control" content="no-cache"/>     

        <meta name="og:title" content="Reinards Saulītis"/>
        <meta name="og:url" content="https://www.reinards.lv"/>
        <meta name="og:site_name" content="Reinards Saulītis"/>
        <meta name="og:description" content="Zīmola attīstības speciālists"/>


        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
        <link rel="manifest" href="/icons/site.webmanifest"/>
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5"/>
        <link rel="shortcut icon" href="/icons/favicon.ico"/>
        <meta name="msapplication-TileColor" content="#2d89ef"/>
        <meta name="msapplication-config" content="/icons/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"/>
        
      </Head>

      <div id="bglines">
        <Image src={HeaderLines} objectFit="cover" />
      </div>

      <Navbar></Navbar>
      <HeaderHome></HeaderHome>
      <Services></Services>

      <CaseStudies></CaseStudies>
      <Footer></Footer>
    </>
  )
}
