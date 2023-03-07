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

        <title>Portfolio | Rosaella</title>
        <meta name="og:title" content="Portfolio | Rosaella"/>
        <meta name="description" content="Rosaella Mājaslapas Izstrāde un Dizains"/>
        <meta name="og:description" content="Rosaella Mājaslapas Izstrāde un Dizains"/>
      </Head>

      <Navbar></Navbar>
      <Header cover="rosaella.jpg" title="Rosaella"></Header>
      <ProjectDetails
        client="Šarlote Lorija Nagle"
        company="Rosaella"
        job1title="Web Dizains"
        job1who="Reinards Jānis Saulītis"
        >
        Rosaella ir skolēnu mācību uzņēmums. Mans uzdevums bija izveidot konceptu interneta veikalam šim SMU.
      </ProjectDetails>
      
      <FullSizePhoto reverse src="rosaella/rosaellaweb.jpg" width="2560" height="1706">
        Desktop Versija <br/><br/>
      </FullSizePhoto>
      <Footer></Footer>
    </>
  )
}
