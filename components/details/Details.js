import Head from 'next/head'
import Header from '../header/Header'
import Section from '../section/Section'
import BookmarkButton from 'components/bookmarkButton/BookmarkButton';
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../../utils/animations'
import styles from '../card/Card.module.css'

export default function Details(props) {
  return (
    <>
      <Head>
        <title>{props.data.name}</title>
      </Head>
      <Section>
        <div className={styles.flexbox}>
          <Header label="Details" />
          {props.data.status.listen_addrs != null && props.data.status.listen_addrs[0].startsWith('/p2p/') ? <motion.span
            variants={fadeInUp}
            className={`${styles.status} ${styles.offline}`}>Relayed</motion.span> : null}
        </div>
        <h2>{props.data.name}</h2>
        <p>
          {props.data.geocode.long_street}, {props.data.geocode.long_state}
        </p>
        <p>
          {props.data.geocode.long_city}, {props.data.geocode.long_country}
        </p>

        <BookmarkButton data={props.data} />
      </Section>
    </>
  );
}
