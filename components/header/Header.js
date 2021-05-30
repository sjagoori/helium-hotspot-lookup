import styles from './Header.module.css'

export default function Header(props) {
  return <h1 className={styles.header}>{props.label}</h1>;
}
