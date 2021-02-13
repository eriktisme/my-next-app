import { SWRConfig } from 'swr'
import { fetch } from '@packages/fetch'
import '../styles/globals.css'
import { LoggerProvider } from '@packages/logger'
import { SidebarProvider } from '@apps/sidebar'

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: fetch,
      }}
    >
      <LoggerProvider>
        <SidebarProvider>
          <Component {...pageProps} />
        </SidebarProvider>
      </LoggerProvider>
    </SWRConfig>
  )
}

export default MyApp
