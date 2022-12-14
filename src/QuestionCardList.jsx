

import React, {useState, useEffect} from 'react';

import './QuestionCard.css';

import { firestoreDB } from './utils/firebase';
import {doc, getDocs, collection, deleteDoc} from "firebase/firestore";

import CodeMirror from '@uiw/react-codemirror';
import '@uiw/codemirror-theme-sublime';


const questionCollectionRef = collection(firestoreDB, "questions");

const  QuestionCardList =  () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [questions, setQuestions] = useState([]);

    // Getting data from firestore
    useEffect(() => {
        const fetchQuestion = async () => {
            const questionData = await getDocs(questionCollectionRef);
            setQuestions(questionData.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            console.log("Question Data:", questionData);
    }
    fetchQuestion();
    }, []);

    // Deleting data from firestore
    const deleteQuestion = async (id) => {
        const questionRef = doc(firestoreDB, "questions", id);
        await deleteDoc(questionRef);
        console.log("Question deleted");
        alert("Question deleted");
        window.location.reload();
    }

    // Expandaable question
    const [expanded, setExpanded] = useState(null);

    const toggle = (i) => {
        if (expanded === i) {
            return setExpanded(null);
        }
        setExpanded(i);
    };

    return (

        <div>
            {/* Question Part */}
            <br /><br />
            <h2 className='featureTitle'>Feature Question</h2>

            <br />
            <div className='filterSearchBar'>
                    <form>
                        <span>Search Question: </span>
                        <input type='text' 
                        placeholder='Search and filter Question title, tag, and date' 
                        onChange={(event) => {
                            setSearchTerm(event.target.value);  
                        }}
                        />
                    </form>

            </div>

            {/* <div className='questionrow'>
                {questionList.map(questionComponent)}
            </div> */}

            <div className='questionrow'>

                {/* I cannot connect question Id between QuestionCardList
                and QuestionCard for delete, so I just move it for easy implement */}

                {/* {questions.map(questionComponent)} */}

                {/* Filter to search specific data */}
                {questions
                .filter((question) => {
                    if (searchTerm === "") {
                        return question
                    } 
                    else if (question.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return question
                    } 
                    else if (question.text.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return question
                    }
                    else if (question.author.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return question
                    }
                    else if (question.tag.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return question
                    } 
                    else {return null}
                    // else if (question.date.toLowerCase().includes(searchTerm.toLowerCase())) {
                    //     return question
                    // }
                })
                .map((question, i) => {
                    return (
                    <div className='questioncolumn'>

                        <div className='title'
                        onClick={() => toggle(i)}
                        >
                            <h3>{question.title}</h3>
                            <span>{expanded === i ? "-" : "+" } </span>
                        </div>

                        <div className= {expanded === i ? "content show" : "content"}>
                        

                            <p>{question.text}</p>

                            {/* <p>{question.codemirror}</p> */}
                            <CodeMirror
                                value={question.codemirror}
                            />

                            <h4>{question.author}</h4>

                            <p>{question.tag}</p>

                            <button className='deleteButton' 
                                onClick = {() => {deleteQuestion(question.id)}} >
                                Delete</button>
                        </div>

                        {/* <p>{props.createdAt}</p> */}

                    </div> )
                })}

            </div>

            {/* <div className='seeAllButton'>
                <button type="button">See all questions</button>
            </div> */}

        </div>

    );
}

export default QuestionCardList;

// Reference for codemirror: https://raw.githack.com/uiwjs/react-codemirror/doc3/index.html