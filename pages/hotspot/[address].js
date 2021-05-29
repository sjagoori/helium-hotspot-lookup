import { useRouter } from "next/router";

export default function Post({ data }) {
  const router = useRouter();
  const { address } = router.query;
  const hotspot = data.data

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
    </>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://api.helium.io/v1/hotspots/${params.address}`
  )
  const data = await res.json();

  return { props: { data } };
}
