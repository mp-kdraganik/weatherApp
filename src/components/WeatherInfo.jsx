import style from "@/styles/components/WeatherInfo.module.css";
import { useEffect, useState } from "react";

export default function WeatherInfo({city, lat, lon}) {

    const [temp, setTemp] = useState(0);
    const [wind, setWind] = useState({speed: 0, deg: 0});
    const [clouds, setClouds] = useState(0);
    const [weatherIcon, setWeatherIcon] = useState("");

    useEffect(() => { 
        const getData = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`)
            const data = await response.json();

            setTemp(data.list[0].main.temp - 273.15)
            setWind({
                speed: data.list[0].wind.speed,
                deg: data.list[0].wind.deg
            })
            setClouds(data.list[0].clouds.all)
            setWeatherIcon(data.list[0].weather[0].icon)
        }

        getData();
    }, [city, lat, lon]);

    return (
        <div className={style.container}>
            <h2>{city}</h2>
            <h3>Lat: {lat}</h3>
            <h3>Lon: {lon}</h3>
            <div className={style.weatherInfo}>
                <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="weather icon"/>
                <div className={style.infoSection}>
                    <div className={style.sectionTitle}>Temperatura</div>
                    <div className={style.data}>{parseFloat(temp).toFixed(1)}°C</div>
                </div>
                <div className={style.infoSection}>
                    <div className={style.sectionTitle}>Wiatr</div>
                    <div className={style.data}>{wind.deg.toFixed(1)}°</div>
                    <div className={style.data}>{wind.speed} km/h</div>
                </div>
                <div className={style.infoSection}>
                    <div className={style.sectionTitle}>Zachmurzenie</div>
                    <div className={style.data}>{clouds}%</div>
                </div>
            </div>
        </div>
    );
}