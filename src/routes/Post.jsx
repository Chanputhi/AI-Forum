// Name: Chanputhi TITH
// Deakin SIT313
// Task 4.1C

import React, {useState} from 'react';

import '../Post.css';
import Question from '../Question';
import Article from '../Article';
// import {db} from '../utils/firebase';
// import { firestoreDB } from '../utils/firebase';


function Post() {

    const [isQuestion, setIsQuestion] = useState(true);
    const isArticle = (e) => setIsQuestion(e.target.value);

    console.log(isQuestion)

    return (
      <div className="postDiv">

        <h2>New Post</h2>

        <form className='postForm'>
            <p>Select Post Type: </p>

            {/* I have used onChange instead of onClick so it change to the one we click only */}

            <input className='postType' type="radio" id="question" name="postType" value={true} onChange={isArticle}></input>
            <label className='postType' for="question">Question</label>

            <input className='postType' type="radio" id="article" name="postType" value={false} onChange={isArticle}></input>
            <label className='postType' for="article">Article</label>

        </form>

        <h2>What do you want to ask or share</h2>

        {isQuestion==="true" ? <Question /> : <Article />}

        {/* <Question /> */}
        {/* <Article /> */}

        {/* <button type="button" className='postButton'>
            <a href="post">Post</a>
        </button> */}

        {/* <button type="button" className='postButton'>
              Post
        </button> */}

      </div>
    );
}

export default Post;