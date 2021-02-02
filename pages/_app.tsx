import { SWRConfig } from 'swr'
import { fetch } from '@packages/fetch'
import { SidebarProvider } from '@packages/sidebar/providers/sidebar-provider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: fetch,
      }}
    >
      <SidebarProvider>
        <Component {...pageProps} />
      </SidebarProvider>
    </SWRConfig>
  )
}

export default MyApp
