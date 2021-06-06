import Link from 'next/link'
import styles from './Card.module.css'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../../utils/animations'

export default function Card(props) {
  console.log(props);
  console.log(styles);
  return (
    <motion.div
      variants={stagger}
      className={`${styles.container} ${styles[props.variant]}`}
    >
      <Link href={'hotspot/' + props.data.address}>
        <a>
          <motion.p
            variants={fadeInUp}
            className={`${styles.status} ${props.data.status.online == "online" ? styles.online : styles.offline}`}>
            {props.data.status.online ? "Online" : "Offline"}
          </motion.p>
          <motion.h2 variants={fadeInUp}>{props.data.name}</motion.h2>
          <motion.p variants={fadeInUp}>{props.data.geocode.long_street + ", " + props.data.geocode.long_city}</motion.p>
          <motion.p variants={fadeInUp}>Scale {props.data.reward_scale}</motion.p>
        </a>
      </Link>
    </motion.div>
  )
}