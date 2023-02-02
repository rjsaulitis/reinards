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
        <title>Portfolio | RealDeal</title>
        <meta name="og:title" content="Portfolio | RealDeal"/>
        <meta name="description" content="RealDeal Zīmola Izstrāde un Dizains"/>
        <meta name="og:description" content="RealDeal Zīmola Izstrāde un Dizains"/>
      </Head>

      <Navbar></Navbar>
      <Header cover="realdeal.jpg" title="RealDeal"></Header>
      <ProjectDetails
        client="Roberts Viļumsons"
        company="RealDeal"
        job1title="Grafiskais Dizains"
        job1who="Reinards Jānis Saulītis"
        job2title="Web Izstrāde"
        job2who="Reinards Jānis Saulītis"
        >
        Viens no pirmajiem uzdevumiem bija bukleta dizains. Kā izveidot skaistu un funkcionālu bukletu, iekļaujot diezgan liela daudzuma informācijas salasāmā izmērā.
        <br/><br/>
        Tika izstrādāts arī mazāks buklets, grafika ofisa tapetei un WIP (Work in progress) mājaslapas aizvietotājs.
        <br/><br/>
        Zīmols vēl ir attīstības procesā, tādēļ vairāk informācijas tiks pievienots vēlāk.
      </ProjectDetails>
      {/* <FullSizePhoto src="realdeal/a4-brochure.jpg" width="1920" height="1080"></FullSizePhoto>
      <HalfSizePhoto src="realdeal/a4-brochure.jpg" width="1920" height="1080">
        Lorem ipsum dolor
      </HalfSizePhoto> */}
      <Footer></Footer>
    </>
  )
}
