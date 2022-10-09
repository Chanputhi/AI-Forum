// Name: Chanputhi TITH
// Deakin SIT313

import React, {useState} from 'react';
import { createQuestionDocFromPost } from './utils/firebase';

import './Question.css';

import CodeMirror from '@uiw/react-codemirror';
import '@uiw/codemirror-theme-sublime';

const Question = () => {

    const [question, setQuestion] = useState({
        title: '',
        text: '',
        codemirror: '',
        tag: '',
        author: '',
    });

    // const code = 'console.log("hello world");';

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

    const onChangeCM = React.useCallback((value, viewUpdate) => {
        // console.log('value:', value);
        setQuestion((preValue)=>( {...preValue, "codemirror" : value}))
      }, []);

    console.log("question.codemirror: ", question.codemirror);

    return (
        <form className='questionDiv' >
            {console.log(question)}

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

            {/* Code Mirror part */}
            <div className='describePost'>
                <p>Describe your coding problem</p>

                <CodeMirror
                    value={question.codemirror}
                    options={{
                        theme: 'monokai',
                        keyMap: 'sublime',
                        mode: 'jsx',
                    }}
                    onChange = { onChangeCM }
                />
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