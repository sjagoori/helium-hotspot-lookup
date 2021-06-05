import styles from './Section.module.css'

export default function Section(props){
  return (
    <section className={styles.container}>
      {props.children}
    </section>
  )
}