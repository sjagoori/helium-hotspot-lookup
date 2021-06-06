import '../styles/globals.css'
import React, { useState } from 'react';
import Router from 'next/router';
import LoadingScreen from '../components/loadingScreen/loadingScreen'
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.onRouteChangeStart = () => {
    setLoading(true)
  }

  Router.onRouteChangeComplete = (e) => {
    setLoading(false)
  }

  Router.onRouteChangeError = () => {
    // handle error state here
  }

  return loading ? <LoadingScreen /> : <AnimatePresence exitBeforeEnter><Component {...pageProps} /></AnimatePresence>

}

export default MyApp
