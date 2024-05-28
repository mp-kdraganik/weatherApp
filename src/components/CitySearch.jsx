import style from "@/styles/components/CitySearch.module.css";
import { useEffect, useState } from "react";
import CityBox from "@/components/CityBox";

export default function CitySearch({setLat, setLon, setCity}) {

    const setData = (lat, lon, city) => {
        setLat(lat);
        setLon(lon);
        setCity(city);
    }

    const [text, setText] = useState("");
    const [cities, setCities] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=5&appid=${process.env.API_KEY}`)
            const data = await response.json();
            setCities(data.map((obj) => {return {
                city: obj.name,
                country: obj.country,
                lat: obj.lat,
                lon: obj.lon
            }}))
        }
            
        if (text.length>3) {
            getData();
        }
    }, [text]);

    return (
        <>
            <input className={style.textInput} type="text" placeholder="Enter city name" value={text} onChange={e => setText(e.target.value)} />
            {
                cities.map((city) => {
                    return <CityBox city={city.city} country={city.country} lon={city.lon} lat={city.lat} setData={setData}/>
                })
            }
        </>
    );
}