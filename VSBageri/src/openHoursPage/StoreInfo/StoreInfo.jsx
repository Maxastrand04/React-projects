import React from "react";
import {Element} from 'react-scroll'
import './StoreInfo.css'
import { weekDays } from "../OpenHoursData";

export default function StoreInfo(props){

    let weekSchedule = ''
    weekSchedule = weekDays.map((weekDay, index) => {
        return (
            <p key={index}>{`${weekDay}: ${props.storesOpenHours[index]}`}</p>
        )
    })
    return(
        <Element name={props.link}>
            <div className='storeInfo--div' id={props.link}>
                <h1>{props.storeName}</h1>
                <h3>{props.adress}</h3>
                <h3>öppettider</h3>
                {weekSchedule}
            </div>
        </Element>
    )
}