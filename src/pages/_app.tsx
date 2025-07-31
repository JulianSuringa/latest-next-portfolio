import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from '@/components/ThemeProvider' // Adjust path as needed
import '../styles/globals.css' // Your global styles
import Layout from '@/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
