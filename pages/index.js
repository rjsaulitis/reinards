import Head from 'next/head'
import Image from 'next/image'

import Footer from '../components/footer/footer'
import CaseStudies from '../components/casestudies/casestudies'


export default function Home() {

  var init_more = false;


  function toggle_more (){
    var el = document.getElementById("readmore")

    if (el.style.display === "none" || init_more == false) {
      el.style.display = "block";
      init_more = true;

      document.getElementById("btn_more").style.display = "none";
    } else {
      el.style.display = "none";
    }
  }


  return (
    <>
      {/* <Navbar></Navbar> */}
      <Head>
        <title>Profesionāli Dizaina Pakalpojumi | Portfolio | Reinards Jānis Saulītis</title>
        <meta name="og:title" content="Reinards Saulītis"/>
        <meta name="description" content="Izveido identitāti, kas komplimentēs Tava uzņēmuma personību, iedos odziņu, izcels konkurentu vidū un liks justies pārliecinātam, ka klienti Tevi redz pašā labākajā gaismā!"/>
        <meta name="og:description" content="Izveido identitāti, kas komplimentēs Tava uzņēmuma personību, iedos odziņu, izcels konkurentu vidū un liks justies pārliecinātam, ka klienti Tevi redz pašā labākajā gaismā!"/>        
      </Head>

      <div id="header" className="index-header ph3 ph6-l pt6 pb4 pt6-l   flex flex-column flex-row-l">
        <img className='portrait' src="/images/portrait.webp"></img>
        <div className=' w-100 w-50-l flex flex-column justify-start pb4 pb0-l'>
          <div className='header-spacer flex flex-column items-center items-start-l'>
            {/* <h1 className='f4 f3-l pl1'>Portfolio {new Date().getFullYear()}</h1> */}
            <h2 className='name_title black tc tl-l'>Reinards <br/> Saulītis</h2>
            <a className="cta f7 f5-m f5-l" href="https://calendly.com/rjsaulitis/strategijas-sesija" target='_blank'>Bezmaksas 1:1 stratēģijas sesija</a>
          </div>
        </div>
        <div className=' w-100 w-50-l flex justify-end-l'>
        <div className='usp'>
          <h2 className='mb4 mt0 pt0'>Kādēļ <span className='accent2 bold'>sadarboties</span> ar mani?</h2>
          <ol className=''>
            <li><p>Zīmolus izstrādāju jau 4 gadus</p></li>
            <li><p>Apmierināti klienti dažādās industrijās</p></li>
            <li><p>Pieredze digitālu & drukājamu risinājumu izstrādē</p></li>
            {/* <li><p>Specializācija uz pakalpojumu sektoru</p></li> */}
            <li><p>Plašs redzējums un stratēģiski risinājumi kontekstā</p></li>
            <li><p>Jaunu prasmju un zināšanu apguve katru dienu</p></li>
            <li><p>Risinājumu izstrāde uzņēmumam ar apgrozījumu 100'000eur</p></li>
            <li><p>Prasmes jaunu klientu piesaistē un pārdošanā</p></li>
            <li><p>Skaidrs process un paredzams rezultāts</p></li>
          </ol>
        </div>
        </div>
      </div>


      {/* <div className="index-header ph4 ph6-l mh5-l pb6-l flex flex-column-reverse flex-row-l">
        <div className='bio'>
          <p className='bio_preview'>Mans vārds ir Reinards Jānis Saulītis un esmu 23 gadus vecs zīmolu attīstības speciālists. Ko es daru? Palīdzu uzņēmējiem izstrādāt profesionālu zīmola vizuālo identitāti, piesaistīt klientus un kopumā attīstīt biznesu. <button id="btn_more" onClick={toggle_more}>Lasīt vairāk</button></p>
          <p id="readmore" className='bio_more'>Sekojot dažādu jomu speciālistiem (Chris Do, Iman Gadzhi u.c.) katru dienu ar vien vairāk un vairāk kļūstu par ekspertu divās konkrētās jomās - dizains un mārketings. Kādēļ tieši šīs? Tas ideāli sader un komplimentē manu personību - esmu radošs un uz vizuālu skaistumu vērsts, taču tajā pašā laikā ļoti loģisks, funkcionāls un analītisks kā arī palīdzēšana citiem man sagādā lielu gandarījumu. Laimīgs klients ir labākā sajūta pasaulē!<br/><br/>
          
          Organizēt, saskatīt sakarības un citādi apstrādāt datus ir mana superspēja.<br/><br/>

          Daudzi nezina, taču man ir arī otra personības puse - esmu mākslinieks un producēju savu mūziku kā arī vienmēr novērtēju skaistu interjeru un apģērbus.<br/><br/>

          Šī teksta mērķis bija Tevi nedaudz iepazīstināt ar mani un dot lielāku priekšstatu par Tavu jauno sadarbības partneri! ;)
          </p>
        </div>
      </div> */}

      {/* <div className="index-header ph4 ph6-l mh5-l pb5 pb6-l flex flex-column-reverse flex-row-l">
        <div className='usp'>
          <h2 className='mb3'>Palīdzēšu Tev</h2>
          <ol className=''>
            <li><p>Izcelties konkurentu vidū</p></li>
            <li><p>Izveidot ciešu saikni ar ideālo mērķauditoriju</p></li>
            <li><p>Uzlabot reputāciju izskatoties profesionāli</p></li>
            <li><p>Izveidot funkcionālus dizaina risinājumus</p></li>
            <li><p>Izveidot zīmolu, kas aug kopā ar Tevi</p></li>
          </ol>
        </div>
      </div> */}

      

      <CaseStudies></CaseStudies>
      <Footer></Footer>
    </>
  )
}
