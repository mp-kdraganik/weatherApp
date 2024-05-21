import style from "@/styles/components/CityBox.module.css";
import { useEffect, useState } from "react";

export default function CitySearch({city, country, lat, lon}) {

    return (
        <div className={style.container}>
            {
            //Dodać wszytskie informacje o znaloźonych miastach
            }
            <div>
                <span className={style.cityName}>{city}</span>
                <span className={style.countryName}>{country}</span>
            </div>
            <div>
                <span className={style.lan}>{lon}</span>
                <span className={style.lat}>{lat}</span>
            </div>
        </div>
    );
}