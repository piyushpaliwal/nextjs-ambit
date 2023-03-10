import { NodeNextRequest } from 'next/dist/server/base-http/node'
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

// const src = `https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}`
export default class AmbitWeb extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/img/favicon.png" type="image/png" />
        </Head>

        <body>
          <Main />
          <NextScript />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NCM2SWG"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
        </body>
      </Html>
    )
  }
}

// ======================================================================

AmbitWeb.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage

  // Run the React rendering logic synchronously
  ctx.renderPage = () =>
    originalRenderPage({
      // Useful for wrapping the whole react tree
      enhanceApp: (App) => App,
      // Useful for wrapping in a per-page basis
      enhanceComponent: (Component) => Component
    })

  // Run the parent `getInitialProps`, it now includes the custom `renderPage`
  const initialProps = await Document.getInitialProps(ctx)

  return { ...initialProps }
}
