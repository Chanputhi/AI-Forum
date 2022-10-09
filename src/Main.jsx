// Name: Chanputhi TITH
// DEAKIN SIT313
// Task 4.1P: Home Page

import React from 'react';

// import CardList from './CardList';
import QuestionCardList from './QuestionCardList';
import ArticleCardList from './ArticleCardList';

function Main (props) {
    return (
        <div className='mainDiv'>

            {/* <CardList /> */}
            <QuestionCardList />
            <ArticleCardList />

        </div>
    );
}


export default Main;