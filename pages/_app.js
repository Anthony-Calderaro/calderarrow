import Head from 'next/head'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Footer from '../components/Footer';
import Header from '../components/Header';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;
  const { postData } = pageProps;

  const [lightTheme, toggleTheme] = useState(true);

  const getPageTitle = () => {
    console.log(pathname)
    if (postData) {
      return `${postData.title} | By Anthony Calderaro`;
    } else if (pathname === '/writings') {
      return 'Witings by Anthony Calderaro.';
    } else {
      return 'The home page for Anthony Calderaro.';
    }
  }

  const getMetaTags = () => {
    let description, keywords;
    if (postData) {
      description = `${postData.title}`;
      keywords = `${postData.categories.join(', ')}`;
    } else if (pathname === '/writings') {
      description = 'A searchable listing of all writings by Anthony Calderaro';
      keywords = 'Anthony, Calderaro, Writings, Essays, Posts';
    } else {
      description = 'calderarrow.me is the #1 resource for all things Anthony Calderaro.';
      keywords = 'Anthony, Calderaro, Contact, Dork, Nerd, Geek';
    }
    return (
      <>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Anthony Calderaro" />
      </>
    )
  }

  useEffect(() => {
    // Todo: I'm having a rough night and can't figure out a better way to do it right now but maybe an intern will refactor it one day.
    const bodyElement = document.querySelector("body");
    if (lightTheme) {
      bodyElement.classList.remove('dark'), [lightTheme]
    } else {
      bodyElement.classList.add('dark'), [lightTheme]
    }
  });

  return (
    <div>
      <Head>
        <link rel="shortcut icon" type="image/png" href="hs.png" />
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
        <html lang='en'></html>
        <title>{getPageTitle()}</title>
        <meta charset="UTF-8" />
        {getMetaTags()}
      </Head>

      <div className={`container ${lightTheme ? '' : 'dark'}`}>

        <Header toggleTheme={() => toggleTheme(!lightTheme)} />

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
