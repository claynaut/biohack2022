import { Provider } from 'next-auth/client'
// import { Toaster } from 'react-hot-toast'

// import Nav from '../components/Nav'
import Footer from '../components/Footer'

import 'tailwindcss/tailwind.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      {/* <Toaster />
      <Nav /> */}
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}
