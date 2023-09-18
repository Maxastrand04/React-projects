import React from 'react'
import '../navBar.css'

export default function CustomButton(props){

    return(
        <>
            {props.content && <a href={props.link} className={props.specClass}>{props.content}</a>}
        </>
        )
}
