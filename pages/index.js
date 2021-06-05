import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const [saves, setSaves] = useState([]);
  const [error, setError] = useState(null)

  function handleSubmit(e) {
    e.preventDefault();
    let hotspotAddress = e.target[0].value;
    if (hotspotAddress.length < 51) {
      setError("Enter a valid hotspot address")
      e.target[0].value = ""
    } else {
      router.push({
        pathname: `hotspot/${hotspotAddress}`,
      });
    }
  }

  useEffect(() => {
    Object.values(localStorage).map(key => {
      setSaves(saves => saves = localStorage[key])
    });
    console.log(saves);
  })


  return (
    <div className={styles.container}>
      <img src="./icons/icon-192x192.png" alt="Icon" width="50" height="50" />
      <h1>Hotspot lookup </h1>
      <form onSubmit={handleSubmit}>
        {error ? <span className={styles.error}>{error}</span> : null}
        <input
          type="text"
          name="hotspotAddress"
          placeholder="11cvkGZG4uYVKUoX5DJMp8Mh5FiGLW6Yv3avKNLMNuRqU6CLGMs"
          id="hotspotAddress"
          className={error ? styles.error : null}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
