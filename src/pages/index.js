import styles from "@/styles/Home.module.css";
import CitySearch from "@/components/CitySearch";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Weather app</h1>
      <CitySearch />
    </div>
  );
}
