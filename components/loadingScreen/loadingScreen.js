import styles from './LoadingScreen.module.css'
import CircularProgress from '@material-ui/core/CircularProgress'
import { motion } from 'framer-motion'
import { fadeInUp } from 'utils/animations'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.container}
      transition={{ delay: 0.2 }}

    >
      <CircularProgress className={styles.loader} />
      <motion.h1 variants={fadeInUp}>Loading</motion.h1>
    </motion.div>
  )
}