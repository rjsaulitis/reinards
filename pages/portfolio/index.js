import Head from 'next/head'
import Image from 'next/image'

import Footer from '../../components/footer/footer'
import CaseStudies from '../../components/casestudies/casestudies'
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Reinards Saulītis | Portfolio</title>
        <meta name="og:title" content="Reinards Saulītis | Portfolio"/>
        <meta name="description" content="Zīmola attīstība. Re-Brendings. Grafiskais Dizains. Logo. Vizuālā Identitāte. Copywriting. Mārketings."/>
        <meta name="og:description" content="Zīmola attīstība. Re-Brendings. Grafiskais Dizains. Logo. Vizuālā Identitāte. Copywriting. Mārketings."/>  
      </Head>

      <Navbar></Navbar>
      <Header
        cover="portfolio.jpg"
        title="5+ gadu pieredze"
        subtitle="Projekti dažādās industrijās, sākot ar start-up līdz pat lielām būvniecības firmām"
        cta="Pieteikt Projektu"
        link="https://forms.gle/qY9EZNgobf9Mws5s6"
      ></Header>

      <CaseStudies></CaseStudies>
      <Footer></Footer>
    </>
  )
}
