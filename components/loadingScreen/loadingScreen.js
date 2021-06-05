import styles from './LoadingScreen.module.css'
import CircularProgress from '@material-ui/core/CircularProgress'

export default function LoadingScreen() {
  return (
    <div className={styles.container}>
      <CircularProgress />
    </div>
  )
}