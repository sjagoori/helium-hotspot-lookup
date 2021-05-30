import { useRouter } from "next/router";
import Details from "components/details/Details";
import Rewards from "components/rewards/Rewards";
import Witness from "components/witness/Witness";
import React from "react";
const DataContext = React.createContext("light");

export default function Post({ data }) {
  const router = useRouter();
  const { address } = router.query;

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

  console.log(data);

  return (
    <main>
      <Details data={data.details.data} />
      <Rewards data={data.rewards.data} />
      <Witness data={data.witnesses.data} />
    </main>
  );
}

export async function getServerSideProps({ params }) {
  const details = await fetch(
    `https://api.helium.io/v1/hotspots/${params.address}`
  );

  const witnesses = await fetch(
    `https://api.helium.io/v1/hotspots/${params.address}/witnesses`
  );

  const rewards = await fetch(
    `https://api.helium.io/v1/hotspots/${params.address}/rewards/sum`
  );

  const data = {
    details: await details.json(),
    witnesses: await witnesses.json(),
    rewards: await rewards.json(),
  };

  return { props: { data } };
}
