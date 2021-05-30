import Header from '../header/Header'

export default function Details(props) {  
  return (
    <section>
      <Header label="Details"/>
      <h2>{props.data.name}</h2>
      <p>
        {props.data.geocode.long_street}, {props.data.geocode.long_state}
      </p>
      <p>
        {props.data.geocode.long_city}, {props.data.geocode.long_country}
      </p>
    </section>
  );
}
