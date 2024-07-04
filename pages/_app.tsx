import Head from 'next/head'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { Fragment, useEffect } from 'react'

// Bootstrap and custom scss
import 'assets/scss/style.scss'
// animate css
import 'animate.css'
// import swiper css
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'

// custom scrollcue css
import 'plugins/scrollcue/scrollCue.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // load bootstrap functionality
      ;(() => {
        const bootstrap = require('bootstrap')

        // Enables multilevel dropdown
        ;(function (bs) {
          const CLASS_NAME = 'has-child-dropdown-show'

          bs.Dropdown.prototype.toggle = (function (_original) {
            return function () {
              document.querySelectorAll('.' + CLASS_NAME).forEach(function (e) {
                e.classList.remove(CLASS_NAME)
              })
              // @ts-ignore
              let dd = this._element.closest('.dropdown').parentNode.closest('.dropdown')
              for (; dd && dd !== document; dd = dd.parentNode.closest('.dropdown')) {
                dd.classList.add(CLASS_NAME)
              }
              // @ts-ignore
              return _original.call(this)
            }
          })(bs.Dropdown.prototype.toggle)

          document.querySelectorAll('.dropdown').forEach(function (dd) {
            dd.addEventListener('hide.bs.dropdown', function (e) {
              // @ts-ignore
              if (this.classList.contains(CLASS_NAME)) {
                // @ts-ignore
                this.classList.remove(CLASS_NAME)
                e.preventDefault()
              }
              e.stopPropagation()
            })
          })
        })(bootstrap)
      })()
    }
  }, [])

  // scroll animation added
  useEffect(() => {
    ;(async () => {
      const scrollCue = (await import('plugins/scrollcue')).default
      scrollCue.init({ interval: -400, duration: 700, percentage: 0.8 })
      scrollCue.update()
    })()
  }, [pathname])

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ambit Services | Accounting & Bookkeeping</title>
        <meta
          name="description"
          content="Ambit offers outsourced bookkeeping and accounting services for CPA and accounting firms in the USA. Hire highly qualified and dedicated offshore bookkeepers"
        />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Y8SZ7ZJDWZ"></Script>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config','G-Y8SZ7ZJDWZ');
        `}
      </Script>
      {/* Facebook Pixel Code */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1664746134033631');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          alt="facebook-pixel"
          height="1"
          width="1"
          src="https://www.facebook.com/tr?id=1664746134033631&ev=PageView&noscript=1"
        />
      </noscript>
      <Script id="google-event">
        {`gtag('event', 'conversion', {'send_to': 'AW-11267136386/6v1FCPSZp8IYEIK3y_wp'});`}
      </Script>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
