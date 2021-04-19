import React from "react";
import NavBar from "../NavBar";
import './Card.css'

const Card = (props) => {
    return (
        <div className={props.className}>
            <p className='header'>{props.headerText}</p>
            <p className='amount'>{props.amountText}</p>
            <p className='saved'>{props.savedText}</p>
        </div>
    )
}

export default Card