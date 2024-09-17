import Head from 'next/head'
import Image from 'next/image'

import Footer from '../components/footer/footer'
import CTA from '../components/cta/cta'


export default function Home() {


  return (
    <>
      <Head>
        <title>Sales oriented copywriting | Reinards Jānis Saulītis</title>
        <meta name="og:title" content="Reinards Jānis Saulītis"/>
        {/* <meta name="description" content="Izveido identitāti, kas komplimentēs Tava uzņēmuma personību, iedos odziņu, izcels konkurentu vidū un liks justies pārliecinātam, ka klienti Tevi redz pašā labākajā gaismā!"/>
        <meta name="og:description" content="Izveido identitāti, kas komplimentēs Tava uzņēmuma personību, iedos odziņu, izcels konkurentu vidū un liks justies pārliecinātam, ka klienti Tevi redz pašā labākajā gaismā!"/>         */}
      </Head>

      <div id="landing" className='ph3 ph7-l pv6 pv7-l tc'>
          <div className='landing-details pv5 pv0-l'>
            <h1 className='tl-l f1 f0 mv1 pv0'>Reinards</h1>
            <p className='tl-l mv1 pb4'>Shopify Copywriting Specialist</p>

            <CTA url="https://calendly.com/rjsaulitis/coffee">BOOK A MEETING</CTA>
          </div>
          <img className='portrait' src='/images/portrait.jpg'/>
      </div>


      <div id="about" className='ph3 ph7-l pv3 pv5-l tc'>
        <h2 className='f2'>
          Turn window-shoppers into loyal customers 🛍️
        </h2>
        <p>
        I’m Reinards Jānis Saulītis, a copywriter with a background in digital marketing, graphic design, web development, branding and even arts. I’ve been dedicated to these fields since 2018, and since June 2023, I’ve focused exclusively on writing compelling copy for eCommerce stores. With experience as a web developer at Magebit and copywriting for Perfection Media, I understand the intricacies of ecommerce.
        <br/><br/>
        What sets me apart is my belief in connecting with people, not just pushing one's product to them. I strive to create authentic connections that foster brand loyalty and compounding long-term gains. I’m a deeply creative person and always push myself to deliver better, more resonant copy.
        </p>
      </div>

      <img className='review' src='/images/perf3.jpg'/>
      <img className='portfolio dn db-ns' src='/images/work.jpg'/>
      <img className='portfolio dn-ns' src='/images/work-mobile.jpg'/>


      <Footer></Footer> 
    </>
  )
}
