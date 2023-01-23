import type { AppProps } from 'next/app'

import { AuthProvider } from '../state/auth/AuthContext'

import config from 'config/config'
import Theme from 'shell'

import { NextPageWithLayout } from './page'

import { ApolloProvider } from '@apollo/client'
import client from 'lib/apollo-client'

// import './index.css'

import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ApolloProvider client={client}>
      <CacheProvider value={cacheRtl}>
        <Theme config={config}>
          <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
        </Theme>
      </CacheProvider>
    </ApolloProvider>
  )
}

export default MyApp
