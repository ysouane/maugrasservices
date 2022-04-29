import SiteLayout from "../components/site/SiteLayout";
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </>
  )
}

export default MyApp
