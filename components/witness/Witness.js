import Header from "../header/Header";
import Section from '../section/Section'
import styles from './Withness.module.css'

export default function Witness(props) {

  function handleBookmark(e) {
    e.preventDefault();

    window.localStorage.setItem(
      e.target[0].value ? e.target[0].value : hotspot.name,
      JSON.stringify({
        label: e.target[0].value ? e.target[0].value : hotspot.name,
        data: hotspot,
      })
    );
  }

  return (
    <Section>
      <Header label="Witness" />
      {Object.values(props.data).map((key, index) => {
        return (
          <a key={index} href={key.address} className={styles.card}>
            <div>
              <h2>{key.name}</h2>
              <p>{key.geocode.long_street + ", " + key.geocode.long_city}</p>
              <p>Status: {key.status.online}</p>
              <p>Scale {key.reward_scale}</p>
            </div>
          </a>
        );
      })}
    </Section>
  );
}
