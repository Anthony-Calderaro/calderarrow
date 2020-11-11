import Head from 'next/head'
import '../styles/globals.css'

import Footer from '../components/Footer';
import Header from '../components/Header';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  const pageTitle = () => {
    const pathnames = ['/writings', '/projects', '/contact']
    if (pathname === '/') {
      return 'Anthony Calderaro';
    } else if (pathnames.includes(pathname)) {
      return `${pathname.slice(1, 2).toUpperCase() + pathname.slice(2)}`
    } else if (pathname.includes('/writings')) {
      return `${pathname.slice(9, 10).toUpperCase() + pathname.slice(10)}`
    } else {
      return pathname;
    }
  };

  return (
    <div>
      <Head>
        <title>{pageTitle()}</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>" />
      </Head>
      
      <div className='container'>
        
        <Header />
        
        <main>
          <Component {...pageProps} />
        </main>

        <Footer />

      </div>
    </div>
  )
}

export default MyApp
