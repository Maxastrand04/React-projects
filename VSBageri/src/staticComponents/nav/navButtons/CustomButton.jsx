import React from 'react'
import './CustomButton.css'

export default function CustomButton(props){

    return(
        <a href={props.link} className={props.specClass}> {props.text} </a>
    )
}