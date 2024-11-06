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
            <p className='tl-l mv3 pt3 pb5'>Make your copy great and watch orders flood your 
            store, no matter what you sell!</p>

            <CTA url="https://calendly.com/rjsaulitis/coffee">Book a Free Call</CTA>
            <img className='landing-proof mt3' src='/images/webp/proof.webp'/>
          </div>
          <img className='portrait' src='/images/webp/portrait.webp'/>
      </div>

      <div id="about" className='ph3 ph7-l pv5 pv6-l tc'>
        <h2 className='f2 mt0'>
          Who am I?
        </h2>
        <p className='pb4'>
        Hi, I’m Reinards Jānis Saulītis — a consultant and copywriter with a unique mix of skills and a focus on helping eCommerce brands grow. My background spans digital marketing, branding, web development, and more. <br/><br/>I’m also a winner of the <a className="juvenes" href="https://commission.europa.eu/education/skills-and-qualifications/develop-your-language-skills/juvenes-translatores/previous-contests/2017-contest_en" target="_blank">Juvenes Translatores 2017</a> competition.
<br/><br/>
Since 2018, I’ve been dedicated to creative problem-solving, and since June 2023, I’ve honed in on eCommerce copywriting. My experience as a web developer at Magebit and a copywriter for Perfection Media has given me invaluable insights into what drives online sales and customer engagement.
        <br/><br/><br/><br/>
        I offer both consulting and copywriting as a service. Book a <b>free call</b> to discover how I can help you!
        </p>
        <CTA url="https://calendly.com/rjsaulitis/coffee" inverse>Book a Free Call</CTA>
      </div>


      {/* <div id="about" className='ph3 ph7-l pv5 pv6-l tc'>
        <h2 className='f2 mt0'>
          Who am I?
        </h2>
        <p className='pb4'>
        I am a creative and a problem solver. Reinards Jānis Saulītis, a copywriter and consultant with a background in digital marketing, graphic design, web development, branding, parfumery and even music production. 
        The winner of <a className="juvenes" href="https://commission.europa.eu/education/skills-and-qualifications/develop-your-language-skills/juvenes-translatores/previous-contests/2017-contest_en" target="_blank">Juvenes Translatores 2017</a>.<br/><br/>
        I’ve been dedicated to these fields since 2018, and since June 2023, I’ve focused exclusively on mastering copywriting for eCommerce. With experience as a web developer at Magebit and copywriting for Perfection Media, I understand the intricacies of ecommerce.
        <br/><br/>
        I’ve immersed myself in books by top experts, worked with a wide range of clients, and refined my skills through real-world projects. The time with two e-commerce development agencies has given me invaluable, firsthand insights into what drives online sales and customer engagement.
        <br/><br/><br/><br/>
        I offer both consulting and copywriting as a service. Book a <b>free call</b> to discover how I can help you!
        </p>
        <CTA url="https://calendly.com/rjsaulitis/coffee" inverse>Book a Free Call</CTA>
      </div> */}

      <a id="pm_desktop" className='dn db-ns' href="http://perfectionmedia.lv" target="_blank" title="Perfection Media"><img className='review' src='/images/webp/perfection-en.webp'/></a>
      <a id="pm_mob" className='db dn-ns' href="http://perfectionmedia.lv" target="_blank" title="Perfection Media"><img className='review' src='/images/webp/perfection-mobile-en.webp'/></a>

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
