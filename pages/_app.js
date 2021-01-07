import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'

import Footer from '../components/Footer';
import Header from '../components/Header';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  const [lightTheme, toggleTheme] = useState(true);
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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>&#128587;</text></svg>" />
        
      </Head>
      
      <div className={`container ${lightTheme ? '' : 'dark'}`}>
        
        <Header theme={lightTheme} toggleTheme={() => toggleTheme(!lightTheme)} />
        
        <main>
          <Component {...pageProps} />
        </main>
{/* Todo: This probably looks bad on mobile. If so, move it to the end of whatever main content there is. */}
        <Footer />

      </div>
    </div>
  )
}

export default MyApp
