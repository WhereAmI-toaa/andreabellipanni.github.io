import type { AppProps } from 'next/app'
import '../styles/globals.css'
import '../styles/gradual-blur.css'
import '../styles/card-swap.css'
import '../styles/light-rays.css'
import '../styles/profile-card.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
