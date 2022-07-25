import '../styles/globals.css'
import { client } from '../gqlClient'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Nav />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
