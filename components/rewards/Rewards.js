import Header from "../header/header";

export default function Rewards(props){
  return (
    <section>
      <Header label="Rewards" />
      <h2>Today:</h2>
      <span>{props.data.total}</span>
    </section>
  );
}