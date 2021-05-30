import Header from "../header/Header";

export default function Rewards(props) {
  
  console.log(props.data);

  return (
    <section>
      <Header label="Rewards" />
      <h2>Today:</h2>
      <span>{props.data.today.data.total.toFixed(2)}</span>
      <h2>Last 7d:</h2>
      <span>{props.data.weekly.data.total.toFixed(2)}</span>
      <h2>Last 30d:</h2>
      <span>{props.data.monthly.data.total.toFixed(2)}</span>
    </section>
  );
}
