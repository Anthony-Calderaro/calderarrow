import Head from 'next/head'
import { useState } from 'react';
import { useRouter } from 'next/router';

import Footer from '../components/Footer';
import Header from '../components/Header';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;
  const { postData } = pageProps;

  const [lightTheme, toggleTheme] = useState(true);

  const pageTitle = postData ? postData.title : `${pathname.charAt(1).toUpperCase() + pathname.slice(2)}`;

  return (
    <div>
      <Head>
        <link rel="shortcut icon" type="image/png" href="hs.png" />
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
        <title>{pageTitle}</title>
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
