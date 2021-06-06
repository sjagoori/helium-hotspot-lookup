import Section from '../section/Section'
import Header from '../header/Header'
import styles from './Links.module.css'

export default function Links(props) {
  console.log(props);
  return (
    <Section>
      <Header label="Links" />
      <a
        href={"https://explorer.helium.com/hotspots" + props.data.address}
        className={`${styles.button} ${styles.explorer}`}
      >Explorer</a>
      <a
        href={"https://explorer.helium.com/accounts" + props.data.owner}
        className={`${styles.button} ${styles.wallet}`}
      >Wallet</a>
    </Section>
  )
}