import Link from 'next/link'
import styles from './Card.module.css'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../../utils/animations'

export default function Card(props) {
  return (
    <motion.div
      variants={stagger}
      className={styles.container}>
      <Link href={'hotspot/' + props.data.address}>
        <a>
          <motion.h2 variants={fadeInUp}>{props.data.name}</motion.h2>
          <motion.p variants={fadeInUp}>{props.data.geocode.long_street + ", " + props.data.geocode.long_city}</motion.p>
          <motion.p variants={fadeInUp}>Status: {props.data.status.online}</motion.p>
          <motion.p variants={fadeInUp}>Scale {props.data.reward_scale}</motion.p>
        </a>
      </Link>
    </motion.div>
  )
}