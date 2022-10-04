// Name: Chanputhi TITH
// Deakin SIT313

import React, {useState} from 'react';
import { createQuestionDocFromPost } from './utils/firebase';

import './Question.css';

const Question = () => {

    const [question, setQuestion] = useState({
        title: '',
        text: '',
        tag: '',
        author: '',
    });

    // const {title, text, tag, author} = question;

    // const handleChange = (event)=>{
    //     const {name, value} = event.target
    //     setQuestion ((preValue)=>{
    //     return {
    //     ...preValue,
    //     [name]: value
    //     }
    //     })
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createQuestionDocFromPost(question);
            alert('Question posted successfully!');
        }
        catch (error) {
            console.log('Error in submitting question', error.message);
            alert(error.message);
        }
    }

    return (
        <form className='questionDiv' >

            <div className='titlePost'>
                <p>Title</p>
                <input type='text'
                    // onChange={handleChange}
                    value={question.title}
                    onChange = { (e) => setQuestion((preValue)=>({...preValue, "title" : e.target.value}) ) }
                    placeholder='Start your question with how, what, why, etc.' />
            </div>

            <div className='describePost'>
                <p>Describe your problem</p>
                <textarea rows = "10" cols = "80" name = "description"
                    // onChange={handleChange}
                    value={question.text}
                    onChange = { (e) => setQuestion((preValue)=>( {...preValue, "text" : e.target.value})) }
                >
                </textarea>
            </div>

            <div className='tagPost'>
                <p>Tags</p>
                <input type='text'
                    // onChange={handleChange}
                    value={question.tag}
                    onChange = { (e) => setQuestion((preValue)=>( {...preValue, "tag" : e.target.value})) }
                    placeholder='Please add up to 3 tags to describe what your question is about e.g. robotic ' />
            </div>

            <div className='authorPost'>
                <p>Author</p>
                <input type='text'
                    // onChange={handleChange}
                    value={question.author}
                    onChange = { (e) => setQuestion((preValue)=>( {...preValue, "author" : e.target.value})) }
                    placeholder='Please write your name' />
            </div>

            <br />

            <button type="submit" className='postButton' onClick={handleSubmit}>
              Post
            </button>

        </form>
    );
}

export default Question;