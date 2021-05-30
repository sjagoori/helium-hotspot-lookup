import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const [saves, setSaves] = useState([]);

  // console.log(reactLocalStorage);

  function handleSubmit(e) {
    e.preventDefault();
    let hotspotAddress = e.target[0].value;
    router.push({
      pathname: `hotspot/${hotspotAddress}`,
    });
  }

  useEffect(()=>{
    Object.values(localStorage).map(key => { 
      setSaves(saves => saves = localStorage[key])
    });
    console.log(saves);  
  })


  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="hotspotAddress"
          placeholder="Enter your address"
          id="hotspotAddress"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
