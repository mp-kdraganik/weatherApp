import styles from "@/styles/Home.module.css";
import CitySearch from "@/components/CitySearch";
import WeatherInfo from "@/components/WeatherInfo";
import { useState } from "react";

export default function Home() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [city, setCity] = useState("");

  return (
    <div className={styles.container}>
      <h1>Weather app</h1>
      {
        lat && lon ?
        <WeatherInfo lat={lat} lon={lon} city={city}/> :
        <CitySearch setLat={setLat} setLon={setLon} setCity={setCity}/>
      }
    </div>
  );
}
