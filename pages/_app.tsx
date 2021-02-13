import { SWRConfig } from 'swr'
import { fetch } from '@packages/fetch'
import '../styles/globals.css'
import { LoggerProvider } from '@packages/logger'

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: fetch,
      }}
    >
      <LoggerProvider>
        <Component {...pageProps} />
      </LoggerProvider>
    </SWRConfig>
  )
}

export default MyApp
