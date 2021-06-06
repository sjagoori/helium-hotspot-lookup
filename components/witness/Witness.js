import Header from "../header/Header";
import Section from '../section/Section'
import styles from './Witness.module.css'
import Card from '../card/Card'

export default function Witness(props) {
  return (
    <Section>
      <Header label="Witness" />
      {Object.values(props.data).map((key, index) => <Card data={key} key={index} variant="secondary" />)}
    </Section>
  );
}
