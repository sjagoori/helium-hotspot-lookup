import styles from './LoadingScreen.module.css'
import CircularProgress from '@material-ui/core/CircularProgress'
import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className={styles.container}
    >
      <CircularProgress />
    </motion.div>
  )
}