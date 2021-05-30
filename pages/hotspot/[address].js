import { useRouter } from "next/router";

export default function Post({ data }) {
  const router = useRouter();
  const { address } = router.query;
  const hotspot = data.details.data;
  
  console.log(hotspot);

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
    <>
      <h1>Hotspot</h1>
      <p>name: {hotspot.name}</p>
      <p>address: {hotspot.address}</p>
      <p>
        added on: {new Date(hotspot.timestamp_added).toLocaleDateString()} -{" "}
        {new Date(hotspot.timestamp_added).toLocaleTimeString()}
      </p>

      <p>gain: {hotspot.gain}</p>

      <p>owner: {hotspot.owner}</p>
      <p>mode: {hotspot.mode}</p>

      <details>
        <legend>location</legend>
        <p>
          {hotspot.geocode.short_street}, {hotspot.geocode.long_city}
        </p>
        <p>
          {hotspot.geocode.long_state}, {hotspot.geocode.long_country}
        </p>
      </details>

      <form onSubmit={handleBookmark}>
        <input type="text" name="hotspotAddress" id="hotspotAddress" />
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const details = await fetch(
    `https://api.helium.io/v1/hotspots/${params.address}`
  );

  const witnesses = await fetch(
    `https://api.helium.io/v1/hotspots/${params.address}/witnesses`
  );

  const data = {
    details: await details.json(),
    withnesses: await witnesses.json(),
  };

  return { props: { data } };
}
