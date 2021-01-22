import { SWRConfig } from 'swr'
import { fetcher } from '@packages/fetch'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
