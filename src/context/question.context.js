
import React, { createContext, useState, useEffect } from "react";
// import questionList from "../questionList";
import { addCollectionAndDocuments } from "../utils/firebase";

export const QuestionContext = createContext(
    {
        questions: [],
    });

export const QuestionProvider = ({ children }) => {
    const [questions, setQuestions] = useState([]);

    // useEffect(() => {
    //     addCollectionAndDocuments("questions", questionList);
    // }, []);


    const value = {questions}

    return (
        <QuestionContext.Provider value={value}>
            {children}
        </QuestionContext.Provider>
    );
}

