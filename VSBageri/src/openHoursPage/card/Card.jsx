import React from "react";
import './Card.css'
import UnderLine from "../underLine";

export default function Card(props){

    return(
        <a href={props.link}>
            <div className="card">
                <div className="img-div">
                    <img src={props.img} alt="" />
                </div>
                <h1 className="card--header">{props.storeName}</h1>
                <UnderLine />
                <p>{props.text}</p>
            </div>
        </a>
    )
}