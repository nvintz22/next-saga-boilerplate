import '../styles/globals.css'
import { AppProps } from 'next/app'
import { wrapper } from '../redux_modules'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
