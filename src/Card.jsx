// Name: Chanputhi TITH
// DEAKIN SIT313
// Task 4.1P: Home Page

import React from 'react';

import './Card.css';

const Card = (props) =>  {
    return (
        <div className='column'>
            <img src={props.image} ></img>

            <h3>{props.title}</h3>

            <p>{props.text}</p>

            <h4>{props.name}</h4>
            
        </div>
    );
}


export default Card;
