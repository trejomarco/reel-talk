// _app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/layout/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-custom-bg min-h-screen">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
























// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
