


import React, {useState, useEffect} from 'react';
// import { firestoreDB } from './utils/firebase';
// import {doc, getDocs, collection, deleteDoc} from "firebase/firestore";
// import {deleteQuestion} from './QuestionCardList';
import './QuestionCard.css';

const QuestionCard = (props) =>  {

    return (
        <div className='questioncolumn'>

            <h3>{props.title}</h3>

            <p>{props.text}</p>

            <h4>{props.author}</h4>

            <p>{props.tag}</p>

            {/* <button className='deleteButton' 
            onClick = {() => {deleteQuestion(questions.id)}}
            >Delete</button> */}

            {/* <p>{props.createdAt}</p> */}
            
        </div>
    );
}


export default QuestionCard;