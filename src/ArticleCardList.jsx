

import React, {useState, useEffect} from 'react';

// import Card from './Card';
// import './Card.css';
// import articleList from './articleList';
import './ArticleCard.css';
import { firestoreDB } from './utils/firebase';
import {doc, getDocs, collection, deleteDoc} from "firebase/firestore";

// function articleComponent (article, i) {
//     return <Card 
//     key = {article.key}
//     image = {article.image}
//     title = {article.title}
//     text = {article.text}
//     name = {article.name} />
        
// }


const  ArticleCardList =  () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [articles, setArticles] = useState([]);
    // const articleCollectionRef = collection(firestoreDB, "articles");

    // Getting data from firestore
    useEffect(() => {
        const fetchArticle = async () => {
            // const articleData = await getDocs(articleCollectionRef);
            const articleData = await getDocs(collection(firestoreDB, "articles"));
            setArticles(articleData.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            console.log("Article Data:", articleData);
    }
    fetchArticle();
    }, []);


    // Deleting data from firestore
    const deleteArticle = async (id) => {
        const articleRef = doc(firestoreDB, "articles", id);
        await deleteDoc(articleRef);
        console.log("Article deleted");
        alert("Article deleted");
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
            {/* Article Part */}
            <br /><br />
            <h2 className='featureTitle'>Feature Article</h2>

            <br />
            <div className='filterSearchBar'>
                    <form>
                        <span>Search Article: </span>
                        <input type='text' 
                        placeholder='Search and filter Article title, tag, and date' 
                        onChange={(event) => {
                            setSearchTerm(event.target.value);  
                        }}
                        />
                    </form>

            </div>

            <div className='articlerow'>
                {articles
                .filter((article) => {
                    // if (searchTerm == "") {
                    if (searchTerm === "") {
                        return article
                    } 
                    else if (article.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return article
                    } 
                    else if (article.abstract.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return article
                    } 
                    else if (article.text.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return article
                    }
                    else if (article.author.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return article
                    }
                    else if (article.tag.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return article
                    } 
                    else {return article}
                    // else if (question.date.toLowerCase().includes(searchTerm.toLowerCase())) {
                    //     return question
                    // }
                })
                .map((article, i) => {
                    return (
                    <div className='articlecolumn'>

                        <div className='title'
                        onClick={() => toggle(i)}
                        > 
                            <h3>{article.title}</h3>
                            <span>{expanded === i ? "-" : "+" } </span>
                        </div>

                        <div className= {expanded === i ? "content show" : "content"}>

                            <img src={article.image} alt="Article"></img>

                            {/* <p>{article.image}</p> */}

                            <h5>{article.abstract}</h5>
            
                            <p>{article.text}</p>

                            <h4>{article.author}</h4>

                            <p>{article.tag}</p>

                            <button className='deleteButton' 
                                onClick = {() => {deleteArticle(article.id)}} >
                            Delete</button>

                        </div>

                        
                    </div>
                    )
                }
                
                    )}
            </div>

            {/* <div className='seeAllButton'>
                <button type="button">See all articles</button>
            </div> */}

        </div>

    );
}

export default ArticleCardList;
