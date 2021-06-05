import styles from './Section.module.css'

export default function Section(props) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {props.children}
      </div>
    </section>
  )
}