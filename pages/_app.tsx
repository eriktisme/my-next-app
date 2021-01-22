import fetch from "../packages/fetch";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <Component { ...pageProps } />
  )
}

export default MyApp
