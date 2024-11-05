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

      <div id="landing" className='ph3 ph7-l pv6 pv7-l tc tl-l'>
          <div className='landing-details pv5 pv0-l'>
            <h1 className='tl-l f1 f0 mv0 pv0'>Good Enough Doesn't <br/> Pay the Bills...</h1>
            <p className='tl-l mv3 pt3 pb5'>Make your copy great and watch customers flood your 
           your store, no matter what your sell!</p>

            <CTA url="https://calendly.com/rjsaulitis/coffee">Book a Consultation</CTA>
            <img className='landing-proof mt3' src='/images/webp/proof.webp'/>
          </div>
          <img className='portrait' src='/images/webp/portrait.webp'/>
      </div>


      <div id="about" className='ph3 ph7-l pv3 pv5-l tc'>
        <h2 className='f2'>
          Who am I?
        </h2>
        <p>
        I’m Reinards Jānis Saulītis, a copywriter with a background in digital marketing, graphic design, web development, branding and even arts. I’ve been dedicated to these fields since 2018, and since June 2023, I’ve focused exclusively on mastering copy for eCommerce stores. With experience as a web developer at Magebit and copywriting for Perfection Media, I understand the intricacies of ecommerce.
        <br/><br/>
        I’ve immersed myself in books by top experts, worked with a wide range of clients, and refined my skills through real-world projects. The time with two e-commerce development agencies has given me invaluable, firsthand insights into what drives online sales and customer engagement.
        <br/><br/>
        Add to that countless hours spent learning from industry leaders through videos, articles, and online resources—I’ve dedicated myself to mastering the nuances of copy and marketing so I can deliver the best results for you

        </p>
      </div>

      <a href="http://perfectionmedia.lv" target="_blank" title="Perfection Media"><img className='review dn db-ns' src='/images/webp/perfection-en.webp'/></a>
      <a href="http://perfectionmedia.lv" target="_blank" title="Perfection Media"><img className='review dn-ns' src='/images/webp/perfection-mobile-en.webp'/></a>

      <img className='portfolio dn db-ns' src='/images/webp/work.webp'/>
{/* 

          <div className='services ph7 pv6'>
            <div className='flex'>
              <img className='review dn db-ns' src='/images/consult.png'/>
              <div className='ml4'>
                <h2 className='f2'>Consulting</h2>
                <p>
                I will help you increase conversion rates, average order value and in general make your copy more persuasive by understanding your audience and fixing ...
                </p>
              </div>
            </div>
            <div className='flex mt5'>
              <div className='ml4'>
                <h2 className='f2'>Copywriting</h2>
                <p>
                I will help you increase conversion rates, average order value and in general make your copy more persuasive by understanding your audience and fixing ...
                </p>
              </div>
              <img className='review dn db-ns' src='/images/write.png'/>
            </div>
          </div> */}


      <img className='portfolio dn-ns' src='/images/webp/work-mobile.webp'/>


      <Footer></Footer> 
    </>
  )
}
