import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'; // React-Bootstrap library

import { Provider } from 'react-redux'
import store from '../../store/store'

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
}


// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
  