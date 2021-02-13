import { SWRConfig } from 'swr'
import { fetch } from '@packages/fetch'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: fetch,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
