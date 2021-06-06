import Link from 'next/link'
import styles from './Card.module.css'

export default function Card(props) {
  console.log(styles)
  return (
    <div className={styles.container}>
      <Link href={'hotspot/' + props.data.address}>
        <a>
          <h2>{props.data.name}</h2>
          <p>{props.data.geocode.long_street + ", " + props.data.geocode.long_city}</p>
          <p>Status: {props.data.status.online}</p>
          <p>Scale {props.data.reward_scale}</p>
        </a>
      </Link>
    </div>
  )
}