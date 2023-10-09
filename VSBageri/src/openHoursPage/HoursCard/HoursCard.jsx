import React from "react";
import UnderLine from "../underLine";
import { Card } from '../../staticComponents/card/card'


const currentDate = new Date()

export default function HoursCard(props){
    return(
        <Card 
            link={ props.link }
            content= {<>
                <div className="img-div">
                    <img src={props.img} alt="" />
                </div>
                <h1 className="card--header">{props.storeName}</h1>
                <UnderLine />
                <p>
                    {props.adress} <br />
                    öppettider idag: {props.storesOpenHours[currentDate.getDay()]}
                </p>
            </>}
        />
    )

}