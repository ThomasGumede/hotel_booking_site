import React from 'react'
import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer';

const Layout = ({children }) => {
    return (
      <div>
        <Head>
          <title>Exclusive-BnB</title>
          <meta charSet="utf-8" />
          <meta name="robots" content="follow, index" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="WeHome" />
          <meta
            property="og:description"
            content="We offer free hotel bookings with no slow response"
          />

          <meta property="og:title" content="Exclusive BnB" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <div className="bg-back-color m-0 p-0 box-border">
          <NavBar />
          {children}
          <Footer />
        </div>
      </div>
    );
}

export default Layout
