import styles from './Section.module.css'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../../utils/animations'

export default function Section(props) {
  return (
    <motion.section
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.container}
      variants={stagger, fadeInUp}
    >

      {props.children}

    </motion.section>
  )
}