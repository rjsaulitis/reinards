import Head from 'next/head'
import Image from 'next/image'

import Footer from '../components/footer/footer'
import CTA from '../components/cta/cta'


export default function Home() {


  return (
    <>
      <Head>
        <title>Sales oriented copywriting | Reinards Saulītis</title>
        <meta name="og:title" content="Reinards Saulītis"/>
        {/* <meta name="description" content="Izveido identitāti, kas komplimentēs Tava uzņēmuma personību, iedos odziņu, izcels konkurentu vidū un liks justies pārliecinātam, ka klienti Tevi redz pašā labākajā gaismā!"/>
        <meta name="og:description" content="Izveido identitāti, kas komplimentēs Tava uzņēmuma personību, iedos odziņu, izcels konkurentu vidū un liks justies pārliecinātam, ka klienti Tevi redz pašā labākajā gaismā!"/>         */}
      </Head>

     
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



      <Footer></Footer> 
    </>
  )
}
