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
        <title>Bookkeeping & Accounting service - Start free trial for 20 hours</title>
      </Head>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K7C8Q9H');`}
      </Script>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
