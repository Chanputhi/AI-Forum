// Name: Chanputhi TITH
// DEAKIN SIT313
// Task 4.1P: Home Page

import React from 'react';

import Card from './Card';
import './Card.css';
import articleList from './articleList';
import tutorialList from './tutorialList';

function articleComponent (article, i) {
    return <Card 
    key = {article.key}
    image = {article.image}
    title = {article.title}
    text = {article.text}
    name = {article.name} />
        
}

function tutorialComponent (tutorial, i) {
    return <Card 
    key = {tutorial.key}
    image = {tutorial.image}
    title = {tutorial.title}
    text = {tutorial.text}
    name = {tutorial.name} />
        
}

const  CardList =  () => {
    return (

        <div>
            {/* Article Part */}
            <br /><br />
            <h2 className='featureTitle'>Feature Article</h2>

            <div className='row'>
                {articleList.map(articleComponent)}
            </div>

            <div className='seeAllButton'>
                <button type="button">See all articles</button>
            </div>

           
            {/* Tutorial Part */}
            <br />
            <h2 className='featureTitle'>Feature Tutorial</h2>

            <div className='row'>
                {tutorialList.map(tutorialComponent)}
            </div>

            <div className='seeAllButton'>
                <button type="button">See all tutorials</button>
            </div>

        </div>

    );
}

export default CardList;



// Reference List:

// Article 1: AI in Medicine: On the Way to Growth
// Image: http://www.itnonline.com/sites/default/files/field/image/Screen%20Shot%202019-10-09%20at%209.00.14%20PM.png
// Ref: https://www.itnonline.com/article/ai-medicine-way-growth
// Article 2: AI and Robotics in the Manufacturing Industry
// Image: https://assets.ennomotive.com/wp-content/uploads/2018/04/20092022/manufacturing-2-e1524751735838.jpg
// Ref: https://www.ennomotive.com/artificial-intelligence-robotics/
// Article 3: 3 Key Areas Where Nanotechnology Is Impacting Our Future
// Image: https://imageio.forbes.com/specials-images/imageserve/6293b76ce0de5e9e85f79130/Nanotechnology/960x0.jpg?format=jpg&width=960
// Ref: https://www.forbes.com/sites/chuckbrooks/2022/05/31/3-key-areas-where-nanotechnology-is-impacting-our-future/?sh=14cfa0d56741

// Tutorial 1: Coding Your Own Algo-Trading Robot
// Image: https://media.istockphoto.com/photos/future-financial-technology-controlled-by-ai-robot-using-machine-and-picture-id1273360297?k=20&m=1273360297&s=612x612&w=0&h=UtOS_HSItYfiH6cC2Uy7dY-b12sLKUS756OaEl_oOLQ=
// Ref: https://www.investopedia.com/articles/active-trading/081315/how-code-your-own-algo-trading-robot.asp
// Tutorial 2: A beginner’s guide to quantum computer programming
// Image: https://cdn.mos.cms.futurecdn.net/g84icgJSVZXbib7BxPpMJB.jpg
// Ref: https://www.computerweekly.com/opinion/A-beginners-guide-to-quantum-computer-programming
// Tutorial 3: Program an AI robot
// Image: https://uploads.theartofeducation.edu/2018/05/Another-Photo-if-Needed.jpg
// Ref: https://theartofeducation.edu/2018/05/25/a-step-by-step-guide-to-creating-holograms-in-your-classroom/
