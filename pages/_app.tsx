import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ScrollPositionContextProvider } from '../context/ScrollPosition'
import { ColorModeContextProvider } from '../context/ColorModeContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ColorModeContextProvider>
      <ScrollPositionContextProvider> 
        <Component {...pageProps} />
      </ScrollPositionContextProvider>
    </ColorModeContextProvider>
  )
}
