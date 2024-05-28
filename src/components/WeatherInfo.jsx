import style from "@/styles/components/WeatherInfo.module.css";
import { useEffect, useState } from "react";

export default function WeatherInfo({city, lat, lon}) {

    

    return (
        <div className={style.container}>
            <h2>{city}</h2>
            {lat}
            {lon}
        </div>
    );
}