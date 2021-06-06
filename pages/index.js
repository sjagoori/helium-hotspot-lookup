import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { motion } from 'framer-motion'
import { delayedFadeIn, fadeInUp, stagger } from '../utils/animations'
import Head from 'next/head'
import Header from '../components/header/Header'
import Card from '../components/card/Card'

export default function Home() {
  const router = useRouter();
  const [saves, setSaves] = useState();
  const [error, setError] = useState(null)

  function handleSubmit(e) {
    e.preventDefault();
    let hotspotAddress = e.target[0].value;
    if (hotspotAddress.length < 51) {
      setError("Enter a valid hotspot address")
      e.target[0].value = ""
    } else {
      router.push({
        pathname: `hotspot/${hotspotAddress}`,
      });
    }
  }

  useEffect(() => {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
    if (bookmarks != null && bookmarks.length > 0) {
      setSaves(
        <motion.section
          variants={stagger, delayedFadeIn}
          initial='initial'
          animate='animate'
          className={styles.bookmarkContainer}
        >
          <Header label="Bookmarks" />
          {Object.values(bookmarks).map((key, index) => {
            return <Card data={key.data} key={index} variant="primary" />
          })}
        </motion.section>
      )
    }
  }, [])

  return (
    <>
      <Head>
        <title>Helium hotspot</title>
      </Head>
      <motion.section
        initial='initial'
        animate='animate'
        exit={{ opacity: 0 }}
        variants={stagger}
        className={styles.container}
      >

        <motion.img
          variants={fadeInUp}
          src="./icons/icon-192x192.png" alt="Icon" width="50" height="50" />

        <motion.h1 variants={fadeInUp}>Hotspot lookup </motion.h1>
        <motion.form variants={fadeInUp} onSubmit={handleSubmit}>
          {error ? <span className={styles.error}>{error}</span> : null}
          <input
            type="text"
            name="hotspotAddress"
            placeholder="11cvkGZG4uYVKUoX5DJMp8Mh5FiGLW6Yv3avKNLMNuRqU6CLGMs"
            id="hotspotAddress"
            className={error ? styles.error : null}
          />
          <button type="submit">Search</button>
        </motion.form>
        {saves}
      </motion.section >
    </>
  );
}
