import Head from 'next/head'
import Image from 'next/image'

import Footer from '../components/footer/footer'
import CaseStudies from '../components/casestudies/casestudies'
import Navbar from '../components/navbar/navbar'
import Header from '../components/header/header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zīmola attīstība - Tiem, kas dara</title>
        <meta name="og:title" content="Reinards Saulītis"/>
        <meta name="description" content="Zīmola attīstība. Re-Brendings. Grafiskais Dizains. Logo. Vizuālā Identitāte. Copywriting. Mārketings."/>
        <meta name="og:description" content="Zīmola attīstība. Re-Brendings. Grafiskais Dizains. Logo. Vizuālā Identitāte. Copywriting. Mārketings."/>        
      </Head>

      <Navbar></Navbar>
      <Header
        cover="home.jpg"
        title="Meklē speciālistu, kam vari uzticēties?"
        subtitle="Profesionāla zīmola attīstība - dizains, copywriting, mājaslapa, shopify, stratēģija, SEO u.c."
        cta="Gribu Attīstīties"
        link="https://forms.gle/qY9EZNgobf9Mws5s6"
      ></Header>
      <CaseStudies preview></CaseStudies>
      <Footer></Footer>
    </>
  )
}
