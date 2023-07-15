import '@/styles/globals.scss'
import Head from 'next/head'
import Script from 'next/script'


export default function App({ Component, pageProps }) {
  return (
    <>
     
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="reinards, saulītis, zīmols, branding, brends, attīstība, grafika, dizains, reklāmas, SEO, aģentūra"/>
        <meta name="language" content="LV" />
        <meta name="robots" content="index,follow" />
        <meta charset="utf-8"/>
        <meta name="author" content="Reinards Saulītis" />
        <meta name="copyright" content="Reinards Saulītis" />
        <meta http-equiv="cache-control" content="no-cache"/>     
        <meta name="og:url" content="https://www.reinards.lv"/>
        <meta name="og:site_name" content="Reinards Saulītis"/>

        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
        <link rel="manifest" href="/icons/site.webmanifest"/>
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5"/>
        <link rel="shortcut icon" href="/icons/favicon.ico"/>
        <meta name="msapplication-TileColor" content="#2d89ef"/>
        <meta name="msapplication-config" content="/icons/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"/>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>
      </Head>
      
      <Component {...pageProps} />
    </>
  )
}
