import { useRouter } from "next/router";
import Details from "components/details/Details";
import Rewards from "components/rewards/Rewards";
import Witness from "components/witness/Witness";
import BackButton from 'components/backButton/backButton';
import TopButton from 'components/topButton/topButton';
import React from "react";
import { motion } from 'framer-motion'
import { stagger } from '../../utils/animations'

export default function Post({ data }) {
  const router = useRouter();
  const { address } = router.query;

  return (
    <motion.main
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      variants={stagger}
      transition={{ delay: 0.2 }}
    >
      <BackButton />
      <Details data={data.details.data} />
      <Rewards
        data={data.rewards}
        price={new Intl.NumberFormat("en-US").format(data.price.data.price / 100000000)}
      />
      <Witness data={data.witnesses.data} />
      <TopButton />
    </motion.main >
  );
}

export async function getServerSideProps({ params }) {
  const price = await fetch(`https://api.helium.io/v1/oracle/prices/current`);

  const details = await fetch(
    `https://api.helium.io/v1/hotspots/${params.address}`
  );

  const witnesses = await fetch(
    `https://api.helium.io/v1/hotspots/${params.address}/witnesses`
  );

  const rewardsToday = await fetch(
    `https://api.helium.io/v1/hotspots/${params.address}/rewards/sum?min_time=${new Date(new Date().setDate(new Date().getDate() - 0))
      .toISOString()
      .split("T")[0]
    }`
  );

  const rewardsWeekly = await fetch(
    `https://api.helium.io/v1/hotspots/${params.address}/rewards/sum?min_time=${new Date(new Date().setDate(new Date().getDate() - 7))
      .toISOString()
      .split("T")[0]
    }`
  );

  const rewardsMonthly = await fetch(
    `https://api.helium.io/v1/hotspots/${params.address}/rewards/sum?min_time=${new Date(new Date().setDate(new Date().getDate() - 30))
      .toISOString()
      .split("T")[0]
    }`
  );

  const data = {
    price: await price.json(),
    details: await details.json(),
    witnesses: await witnesses.json(),
    rewards: {
      today: await rewardsToday.json(),
      weekly: await rewardsWeekly.json(),
      monthly: await rewardsMonthly.json(),
    },
  };

  return { props: { data } };
}
