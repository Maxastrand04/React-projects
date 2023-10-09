import React from 'react';
import './Card.css'
import {Link} from 'react-scroll'

export function Card(props){

    return(
        <Link to={props.link} smooth={true} duration={500}>
            <div className="card">
                {props.content}
            </div>
        </Link>
    )
}