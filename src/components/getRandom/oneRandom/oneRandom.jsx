import './oneRandom.css'
import React from "react";

const OneRandom = (props) => {
    return(
        <div className={'oneRandom'}>
            <img className={'image'} src={props.image} alt={props.image} placeholder={props.image}/>
            <h2 className={'text'}>{props.text}</h2>
            <p className={'gender'}>{props.gender}</p>
        </div>
    )
}
export default OneRandom