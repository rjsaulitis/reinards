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
        RealDeal ir zīmols ar lielām ambīcijām, kvalitatīviem produktiem, risinājumiem un jaudīgu darba procesu.
        <br/><br/>
        Divu mēnešu laikā kopš sadarbības uzsākšanas esam izstrādājuši dizainus vairākiem bukletiem, ofisa sienas grafikai un iesākuši izstrādāt mājaslapu.
      </ProjectDetails>
      {/* <FullSizePhoto src="realdeal/a4-brochure.jpg" width="1920" height="1080"></FullSizePhoto> */}
      <HalfSizePhoto reverse src="realdeal/a4-brochure.jpg" width="1920" height="1080">
        Bukleta Dizains Nr.1 <br/><br/> Apvienojām divas nesavienojamas lietas - lielu daudzumu informācijas un skaistu dizainu. Nedaudz radošums un dizaina principi bija šī izaicinājuma atslēga
      </HalfSizePhoto>

      <HalfSizePhoto src="realdeal/a5.jpg" width="1920" height="1080">
        Bukleta Dizains Nr.2 <br/><br/>
        Dizains tika izstrādāts vien dažu dienu laikā. Fokuss. Fokuss. Fokuss.
      </HalfSizePhoto>

      <HalfSizePhoto reverse src="realdeal/warmotech.jpg" width="1920" height="1080">
        Bukleta Dizains Nr.3 <br/><br/>
        Lai gan zīmola primārā krāsa ir sarkana, šajā dizainā izmantojām zaļo, lai radītu dažādību reklāmu materiālos un raisītu pozitīvas asociācijas
      </HalfSizePhoto>  

      <Footer></Footer>
    </>
  )
}
