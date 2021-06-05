import Header from "../header/Header";
import Section from '../section/Section'

export default function Rewards(props) {
  return (
    <Section>
      <Header label="Rewards" />
      <h3>Current price:</h3>
      <span>${props.price}</span>
      <h3>Today:</h3>
      <span>
        {props.data.today.data.total.toFixed(2)} HNT ($
        {(props.data.today.data.total * props.price).toFixed(2)})
      </span>
      <h3>Last 7d:</h3>
      <span>
        {props.data.weekly.data.total.toFixed(2)} HNT ($
        {(props.data.weekly.data.total * props.price).toFixed(2)})
      </span>
      <h3>Last 30d:</h3>
      <span>
        {props.data.monthly.data.total.toFixed(2)} HNT ($
        {(props.data.monthly.data.total * props.price).toFixed(2)})
      </span>
    </Section>
  );
}
