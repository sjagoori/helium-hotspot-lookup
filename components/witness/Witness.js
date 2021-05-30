import Header from "../header/header";

export default function Witness(props) {
  return (
    <section>
      <Header label="Witness" />
      {Object.values(props.data).map((key) => {
        return (
          <a href={key.address}>
            <h2>{key.name}</h2>
            <p>Status: {key.status.online}</p>
            <p>Scale {key.reward_scale}</p>
          </a>
        );
      })}
    </section>
  );
}