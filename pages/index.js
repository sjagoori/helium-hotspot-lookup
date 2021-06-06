import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../utils/animations'
import Head from 'next/head'

export default function Home() {
  const router = useRouter();
  const [saves, setSaves] = useState([]);
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
    Object.values(localStorage).map(key => {
      setSaves(saves => saves = localStorage[key])
    });
    console.log(saves);
  })


  return (
    <>
      <Head>
        <title>Helium hotspot</title>
      </Head>
      <motion.div
        initial='initial'
        animate='animate'
        exit={{ opacity: 0 }}
        className={styles.container}
        variants={stagger}>

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
      </motion.div >
    </>
  );
}
