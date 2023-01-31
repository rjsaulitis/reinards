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
       
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="reinards, saulītis, zīmols, branding, brends, attīstība, grafika, dizains, reklāmas, SEO, aģentūra"/>
        <meta name="description" content="Zīmola attīstība, projekta apraksts"/>
        <meta name="language" content="LV" />
        <meta name="robots" content="index,follow" />
        <meta charset="utf-8"/>
        <meta name="author" content="Reinards Saulītis" />
        <meta name="copyright" content="Reinards Saulītis" />
        <meta http-equiv="cache-control" content="no-cache"/>     

        <meta name="og:title" content="ortfolio | LM Group Buve"/>
        <meta name="og:url" content="https://www.reinards.lv"/>
        <meta name="og:site_name" content="Reinards Saulītis"/>
        <meta name="og:description" content="Zīmola attīstība, projekta apraksts"/>


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

      <Navbar></Navbar>
      <Header cover="lmg.jpg" title="LMG"></Header>
      <ProjectDetails
        client="Matīss Legzdiņš"
        company="LM Group Buve"
        design="Reinards Jānis Saulītis"
        web="Reinards Jānis Saulītis"
        >
        Apraksts tiek gatavots
      </ProjectDetails>
      {/* <FullSizePhoto src="realdeal/a4-brochure.jpg" width="1920" height="1080"></FullSizePhoto>
      <HalfSizePhoto src="realdeal/a4-brochure.jpg" width="1920" height="1080">
        Lorem ipsum dolor
      </HalfSizePhoto> */}
      <Footer></Footer>
    </>
  )
}
